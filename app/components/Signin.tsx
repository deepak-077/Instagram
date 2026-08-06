"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function Signin() {

const [username,SetUsername] = useState('');
const [password,setPassword] = useState('');
const [loggedin,setLoggedin] = useState(false);
const [signup,setSignup] = useState(false);

const router = useRouter()

async function isLoggedin(){

  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoggedin(true);
      console.log(data.message);
    } else {
      alert(data.error); // Show error from backend
    }
  } catch (error) {
    console.error('Login failed:', error);
    alert('Server error during login');
  }


}
  if(loggedin){
    return <Home/>

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
      <div className='w-full min-w-[250px] max-w-[350px] h-[480px] mt-[12px] flex flex-col justify-center items-center mx-auto'>
        
        <div className='w-full min-w-[250px] max-w-[350px] h-[408px] py-[10px] mb-[10px] flex flex-col justify-center items-center'>

          <img className='w-[175px] h-[51px]' src='Instagram_white.svg'></img>

          <div className='w-full min-w-[250px] max-w-[350px] h-[223px] flex flex-col items-center gap-2 mt-0 sm:mt-6'> 

            {/* username field */}
            <div className='w-full max-w-[270px] min-w-[187px] h-[38px] border-[#262626] border-[0.5px] rounded-sm '>
              <input id='username' className='w-full max-w-[260px] min-w-[183px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-white text-[12px] focus:outline-none' type="text" placeholder='Phone number, username or email address'
              value={username}
              onChange={(e)=>SetUsername(e.target.value)}/>
            </div>

            {/* password field */}
            <div className='w-full max-w-[270px] min-w-[187px] h-[38px] border-[#262626] border-[0.5px] rounded-sm '>
              <input id='pass' className='w-full max-w-[260px] min-w-[183px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-white text-[12px] focus:outline-none' type="password" placeholder='Password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='flex justify-center'>

              {/* login button */}
              <button className='w-full max-w-[270px] min-w-[187px] h-[32px] bg-[#4a5df9] font-semibold text-[14px] text-white rounded-md my-2 mx-10'
              onClick={isLoggedin}> 
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
