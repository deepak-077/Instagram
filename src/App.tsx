import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center bg-black h-screen '>
      
      {/* header */}
      <main className=' flex justify-center items-center w-[1306px] h-[555px] '>
        <article className='flex w-[935px] h-[523px]  mt-[32px] mx-[186px] pb-[32px]'>

          {/* background image */}
      <div className='w-[585px] h-[491px] flex justify-center'> 
        <img className='w-[517px] h-[450px] ml-[-55px] ' src="landing.png" alt="" />
      </div>

      {/* credentials div */}
      <div className='w-[350px] h-[480px] mt-[12px]'>
        
        <div className='w-[350px] h-[408px] py-[10px] mb-[10px] flex flex-col justify-center items-center'>

          <img className='w-[175px] h-[51px]' src='Instagram white.svg'></img>

          <div className='w-[350px] h-[223px] flex flex-col items-center gap-2 mt-[24px]'> 

            {/* username field */}
            <div className='w-[270px] h-[38px] border-[#262626] border-[0.5px] rounded-sm '>
              <input className='w-[260px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-white text-[12px]' type="text" placeholder='Phone number, username or email address' />
            </div>

            {/* password field */}
            <div className='w-[270px] h-[38px] border-[#262626] border-[0.5px] rounded-sm '>
              <input className='w-[260px] h-[36px] pt-[9px] pb-[7px] pl-[8px] text-white text-[12px]' type="text" placeholder='Password' />
            </div>
            <div>

              {/* login button */}
              <button className='w-[270px] h-[32px] bg-[#4a5df9] font-semibold text-[14px] text-white rounded-md mt-2'> Log in</button>
            </div>

            {/* additional options */}

            <div className='flex  justify-center items-center w-[270px] h-[15px] mt-4 gap-4'>
            <div className='w-[107px] h-[1px] bg-[#262626]'> </div>
            <div className=' font-semibold text-white text-[13px]'>OR</div>
            <div className='w-[107px] h-[1px] bg-[#262626]'> </div>
            </div>

            {/* login with facebook */}
            <div className='flex justify-center w-[270px] h-[20px] mt-4'>
              <div className='mr-[4px] px-[4px]'>
                <img className='w-[20px] h-[20px]  bg-[#0095f6] rounded-full' src="Facebook.png" alt="" />
              </div>
              <span className='text-[#0095f6] font-semibold text-[14px]'>Log in with Facebook</span>

            </div>
          
          </div>

          {/* forgotten password */}
          <div className='mt-4 '>
            <a className='text-white text-[14px]' href=""> Forgotten your password?</a>
          </div>

        </div>
        {/* Sign up */}
        <div className='flex justify-center w-[350px] h-[61px] py-[10px] text-[14px]'>
          <span className=' flex justify-center w-[236px] h-[41px] text-white  text-[14px]'>
             Don't have an account? <p className='text-[#708dff] text-[14px] ml-1'>Sign up</p>
          </span>
        </div>

      </div>

        </article>
        
      </main>

      {/* footer */}
      <footer className='px-[16px]'>
        <div className='mb-[52px] h-[83px]'>
          <div className='flex justify-center w-[1273px] text-white text-[12px] gap-4'>
          <span>Meta</span> <span>About</span> <span>Blog</span> <span>Jobs</span> <span>Help</span> <span>API</span>
          <span>Privacy</span> <span>Terms</span> <span>Locations</span> <span>Instagram Lite</span> <span>Meta AI</span> 
          <span>Meta AI articles</span> <span>Threads</span> <span>Contact uploading and non-users</span> <span>Meta Verified</span>
        </div>

        <div className='flex justify-center text-white text-[12px] my-[12px]'>
          <span> English (UK)</span>
          <span> 2025 Instagram from Meta</span>
        </div>


        </div>
        

      </footer>
      
      
    </div>
  )
}

export default App
