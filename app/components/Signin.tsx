"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";


const fields = [
  {title:"Phone number, username or email address", name:"identifier"},
  {title:"Password", name:"password"}
]




export default function Signin() {

  const router = useRouter()

  const [userCredentials, setUserCredentials]=useState({
    
    identifier:"",
    password:""
  })
  const [loginError,setLoginError]=useState(false);

  function handleChange(e){
    const name = e.target.name

    setUserCredentials((prev)=>({...prev,[name]:e.target.value}))
  }



async function Login(){

  try {
    const response = await axios.post("http://localhost:3001/login", userCredentials )

    

    if(response.status===200){
      console.log("data = ", response.data)
      localStorage.setItem("username",response.data.user.username)
      localStorage.setItem("fullname",response.data.user.fullname)
      router.push("/home")
    }


  } catch (error) {
    
    if(axios.isAxiosError(error) && error.response?.status==401){
      setLoginError(true)
    }

    else{
      console.error('Login failed:', error);
      alert('Server error during login');
    }
  }
}
   
  return (
   <div className='flex flex-col justify-center items-center bg-black min-h-screen'>

      {/* header */}
      <main className=' flex justify-center items-center w-full max-w-[1306px] h-[555px] '>
        <article className='flex  flex-col md:flex-row items-center w-full max-w-[935px] h-auto  mt-0 mx-0  xs:mt-8 md:mx-4  lg:mx-[186px]  pb-[32px]'>

          {/* image */}
      <div className='w-[585px] h-[491px] flex justify-center hidden md:block'> 
        <img className='w-[517px] h-[450px] ml-[-55px] ' src="landing.png" alt="" />
      </div>

      {/* credentials div */}
      <div className='w-full min-w-[250px] max-w-[350px] h-auto mt-[12px]  flex flex-col justify-center items-center mx-auto '>
        
        <div className='w-full min-w-[250px] max-w-[350px] h-[408px]  py-[10px] mb-[10px] flex flex-col justify-center items-center'>

          <img className='w-[175px] h-[51px]' src='Instagram_white.svg'></img>

          <div className='w-full min-w-[250px] max-w-[350px] h-auto flex flex-col items-center gap-2 mt-0 sm:mt-6 '> 
            
            {/* error div */}
            <div className={`${loginError? "flex" : "hidden"} items-center justify-center gap-2 w-full max-w-[280px] min-w-[187px] h-[60px] border-[#262626]  border-[0.5px] rounded-sm mb-1.5 pb-4 `}>
              
              <div className="flex items-center size-6">
                <img className="size-5" src="info.png" alt="" />
              </div>
              <span className="text-sm text-white">The login information you entered is incorrect. <Link className="text-[#708Dff]" href="https://www.instagram.com/accounts/password/reset/">Find your account and log in</Link> </span>

            </div>



            {/* username field */}
            {fields.map((item,index)=>(
              <div className='w-full max-w-[280px] min-w-[187px] h-[38px] border-[#262626] border-[0.5px] rounded-sm '>
              <input className='w-full max-w-[270px] min-w-[183px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-white text-[12px] focus:outline-none' type={item.name==="password"? "password" : "text"} placeholder={item.title} name={item.name}
                onChange={handleChange}/>
              </div>

            ))}
            
            <div className='flex justify-center'>

              {/* login button */}
              <button className='w-full max-w-[270px] min-w-[187px] h-[32px] bg-[#4a5df9] font-semibold text-[14px] text-white rounded-md my-2 mx-10 cursor-pointer'
              onClick={Login}> 
              Log in </button>
            </div>

            {/* additional options */}

            <div className='flex  justify-center items-center w-full max-w-[270px] min-w-[187px] h-[15px] mt-4 gap-4'>
            <div className='w-[107px] h-[1px] bg-[#262626]'> </div>
            <div className=' font-semibold text-white text-[13px]'>OR</div>
            <div className='w-[107px] h-[1px] bg-[#262626]'> </div>
            </div>

            {/* login with facebook */}
            <Link href={"https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATpRdDugRCHd5EvpzC93apLUHo5Zy1hjuRLIxvHXI23bal1YEsZbxGlkNfJQzODE6q3tz0Hq6Cx4EGQuX3wxf29ZrwuBkJRtxPfLhBjyNeQXhNj1ia5uw9CAJwcws6-iw8mik_UgJGZs21vWT4-BP6dhyYM_D4PWpPgywg1fe9ORwaOHD_tle_eC42TKzoeM5NbZRqNYj8IdRi-b7GuvKWUxfioXvHGd_g0znZsqTXp9P6jzgYUFb-r2-SLapChgx4mxf1CtIp7RGB_cJiIrs9P8Xw"}>

            <div className='flex justify-center max-w-[270px] min-w-[187px] w-full h-[20px] mt-4 cursor-pointer'>
              <div className='mr-[4px] px-[4px]'>
                <img className='w-[20px] h-[20px]  bg-[#0095f6] rounded-full' src="Facebook.png" alt="" />
              </div>
              <div className='text-[#0095f6] font-semibold text-[14px]'>Log in with Facebook</div>

            </div>
            </Link>
            
          </div>

          {/* forgotten password */}
          <div className='mt-4 '>
            <Link className='text-white text-[14px]' href="https://www.instagram.com/accounts/password/reset/?hl=en"> Forgotten your password?</Link>
          </div>

        </div>
        {/* Sign up */}
        <div className='flex justify-center w-full min-w-[250px] max-w-[350px] h-[61px] py-[10px] text-[14px]'>
          <span className=' flex justify-center items-center w-[236px] h-[41px] text-white  text-[14px]'>
             Don't have an account? 
             
             <button className='text-[#708dff] text-[14px] ml-1 hover:cursor-pointer' onClick={()=>{
              router.push("/signup")
             }}>Sign up</button>
          </span>
        </div>

      </div>

        </article>
        
      </main>
      
    </div>
  );
}
