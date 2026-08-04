import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(bodyParser.json())

// GET - Do not support request bodies (officially). so we will have to send them in query string
app.post('/login', async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
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
	    //user - is the model name defined in schema.prisma

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

app.listen(4000,()=>{
    console.log("server running")
})
