import { useState } from "react";
import Footer from "../components/Footer";
import {email, z, ZodError} from 'zod';

const field=[
{ title: "Email address",name:"email" },
{ title: "Password",name:"password" },
{ title: "Full Name", name:"fullname" },
{ title: "Username",name:"username" },
]

const userSchema =z.object({
    email:z.email("Invalid email address"),
    password:z.string().min(6,{message:"password must be atleast 6 characters"}),
    username:z.string().min(3,{message:"username should be atleast 3 character"}),
    fullname:z.string().min(3,{message:"name should be atleast 3 character"})
})
function Signup(){

    type FormDataType = z.infer<typeof userSchema>;
    const[errors,setErrors]= useState<ZodError <FormDataType> |null> (null);

    const [formData,setFormData]=useState<FormDataType>({
        email : '',
        password : '',
        username : '',
        fullname : '',
    })

    function handleChange(e){
        const {name,value} =e.target;
        setFormData((prev)=>({
            ...prev, // copying existing elements
            [name]:value,
            // initialising only updated value
        }))

    }

    async function onSubmit(e:React.FormEvent){
        e.preventDefault();

        const validation=userSchema.safeParse(formData);

        if(!validation.success){
            // If validation fails, extract errors and show to user
            setErrors(validation.error)
            return;
        }
        
        try{
            
            const response =await fetch("http://localhost:4000/signup",
            {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(formData)
            })
            if(!response){
                throw new Error ("Signup failed");
            }
            const result= await response.json();
            alert("user Created successfully")
        
        }
        
        catch(error){
            console.log("error submitting data",error)


        }
    }

    return(
        <div className='flex flex-col justify-center items-center bg-black min-h-screen'>
            
            <div className="flex flex-col items-center w-full max-w-[350px] min-h-[710px] mt-3 mb-[44px]">
                
                {/* signup component */}
                <div className=" flex flex-col gap-2 items-center w-full max-w-[350px] min-h-[619px] max-h-[775px] pt-2.5 mb-2.5 border border-[#262626]">
                    <img className=" w-full max-w-[175px] h-[51px]" src="Instagram white.svg" alt="" />

                    <div className="w-full max-w-[348px] h-[498px] flex justify-center ">

                        <form className="w-full max-w-[348px] h-[478px] flex flex-col items-center gap-4 " >
                            <h4 className="w-full max-w-[268px] h-[40px] text-center text-[#a8a8a8] font-semibold"> Sign up to see photos and videos from your friends.</h4>

                            <div className="w-full max-w-[268px] h-[34px] mx-10 my-2 "> 
                                <button className="flex justify-center w-full max-w-[268px] h-[34px] py-[7px] px-4  bg-[#4a5df9] text-sm font-semibold text-white rounded-lg gap-2"> 
                                    <span className="w-[16px] h-[16px] items-center">
                                    <img className="w-[20px] h-[20px] items-center" src="Instagram_files/fb.png" alt="" />
                                    </span>
                                    Log in with Facebook</button>
                            </div>

                            

                            {/* or */}
                            <div className="flex items-center w-full max-w-[268px] h-[15px] ">
                                <div className="w-[107px] h-[1px] bg-[#262626]"></div>
                                <div className="w-[19px] h-[15px] m-4.5 text-[#a8a8a8] text-[13px]" >OR</div>
                                <div className="w-[107px] h-[1px] bg-[#262626]"></div>
                            </div>

                            <div className="flex flex-col items-center w-full max-w-[268px] gap-3">
                                {field.map((item,index)=>(
                                <div key={item.name} className="w-full max-w-[268px] h-[38px] mb-1.5 mx-10 ">
                                    <div className=" w-full max-w-[268px] h-[38px] bg-[#121212] border border-[#262626] ">    
                                    <input className= "w-full max-w-[258px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-[#a8a8a8] text-xs" type={item.name==="password"?"password":"text"} placeholder={item.title} name={item.name} value={formData[item.name]} onChange={handleChange} />
                                    </div>

                                    {/* Show error below the input */}
                                    {errors?.issues
                                    .filter((issue) => issue.path[0] === item.name)
                                    .map((issue, index) => (
                                    <span key={index} className="text-red-500 text-xs mt-1 block w-full max-w-[260px] h-[36px]">
                                    {issue.message}
                                    </span>
                                    ))}


                                    

                                </div>
                            
                            ))}

                            </div>

                            

                            <div className="flex flex-col w-full max-w-[268px] h-[96px] gap-4">

                                <span className="text-xs w-full max-w-[267px] h-[46px] text-[#a8a8a8] text-center ">
                                    <span className="">People who use our service may have uploaded your contact information to Instagram.
                                        <a className="text-[#708dff] ml-1">Learn more</a>
                                    </span>
                                    
                                </span>

                                <span className="text-xs text-[#a8a8a8] text-center">
                                    <span className=" text-[#a8a8a8] text-xs">By signing up, you agree to our 
                                        <a className="text-[#708dff] m1-1" href="https://www.facebook.com/privacy/policy?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Factivity_status%2F%3F__coig_login%3D1"> Terms, Privacy Policy and Cookies Policy</a>
                                    </span>
                                    

                                </span>
                                
                                 
                            </div>

                            {/* sign up button*/}
                            <div className="w-full max-w-[348px] h-[48px]">
                                <div className="w-full max-w-[268px] h-[32px] mx-[40px] mt-2 bg-[#708dff] rounded-lg"> 
                                    <button className="w-full max-w-[268px] h-[32px] font-semibold text-white " onClick={onSubmit} type="submit">Sign up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Log in */}
                <div className="flex justify-center w-full max-w-[350px] h-[81px] py-2.5 text-white border border-[#262626] ">
                    <p className="text-center w-full max-w-[115px] h-[29px] m-[15px] text-sm">Have an account?
                        <a className="text-[#708dff] w-full max-w-[115px] h-[18px] font-semibold" href="">Log in</a>

                    </p>
                    
                </div>

            </div>

      

      {/* footer */}
      <Footer/>
      
      
    </div>
    )

}
export default Signup;