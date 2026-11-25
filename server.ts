import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import fs from "node:fs";
import path from "node:path";
import multer from "multer";


const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())


const uploadDir = path.join(process.cwd(), "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const subtype = file.mimetype.split("/")[1]?.split(";")[0] || "jpg";
    const safeExt = subtype.replace(/[^a-z0-9]/gi, "").toLowerCase() || "jpg";
    cb(null, `${Date.now()}-${crypto.randomUUID()}.${safeExt}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image files are allowed."));
      return;
    }
    cb(null, true);
  },
});


// GET - Do not support request bodies (officially). so we will have to send them in query string

app.post('/login', async (req, res) => {
  const { identifier, password  } = req.body;
  console.log("info =" , identifier, password)

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR:[
          {username:identifier},
          {email:identifier}
          
        ] 
      }
    });

    if (!existingUser) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login successful', user: existingUser });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/signup', async (req,res)=>{
    const {email, password, fullname, username} =req.body

    try{
        const existingUser=await prisma.user.findFirst({
                where:{
                    OR:[
                        {email:email},
                        {username:username}
                    ]},
            })
        
        if(existingUser) {
            return res.status(200).json({exists:true, message:"email already registered"})
        }
        
            console.log("creating user")
        const newUser = await prisma.user.create({
	    
            data:{
                email,
                password,
                fullname,
                username
            },
        })
        console.log("done");
        res.status(201).json({message:"User created"})

    }
    catch(error) {
        console.log('Error creating user :',error)
        res.status(500).json({error: "User Creation Failed"})
    }
})


app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    const caption =
      typeof req.body.caption === "string" ? req.body.caption.trim() : "";
    const imageUrl = `http://localhost:3001/uploads/${req.file.filename}`;
    console.log("url = ",imageUrl);

  
    const post = {
      id: crypto.randomUUID(),
      imageUrl,
      caption,
      createdAt: new Date().toISOString(),
    };

    return res.status(201).json({ post });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ error: "Failed to upload file." });
  }
});

app.listen(3001,()=>{
    console.log("server running")
})
