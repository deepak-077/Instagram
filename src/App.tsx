
import { useState } from 'react'
import './App.css'
import Home from './Home';

function App() {

 const [username,SetUsername] = useState('');
 const [password,setPassword] = useState('');
 const [loggedin,setLoggedin] = useState(false);

function isLoggedin(){

  if(username == 'alpha' && password=='delta'){
    setLoggedin(true);
      
  }
  else{
      alert(" error : incorrect username or password ")
  }
}
  if(loggedin){
    return <Home/>

  } 

  return (
    <div className='flex flex-col justify-center items-center bg-black min-h-screen  '>
      
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

          <img className='w-[175px] h-[51px]' src='Instagram white.svg'></img>

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
            <div>

              {/* login button */}
              <button className='w-full max-w-[270px] min-w-[187px] h-[32px] bg-[#4a5df9] font-semibold text-[14px] text-white rounded-md mt-2'
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
            <div className='flex justify-center max-w-[270px] min-w-[187px] w-full h-[20px] mt-4'>
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
        <div className='flex justify-center w-full min-w-[250px] max-w-[350px] h-[61px] py-[10px] text-[14px]'>
          <span className=' flex justify-center w-[236px] h-[41px] text-white  text-[14px]'>
             Don't have an account? <p className='text-[#708dff] text-[14px] ml-1'>Sign up</p>
          </span>
        </div>

      </div>

        </article>
        
      </main>

      {/* footer */}
      <footer className=' px-[16px] w-full min-w-[250px]'>
        <div className=' mb-[52px] h-[83px]'>
          <div className='flex flex-wrap justify-center w-full max-w-[1273px] text-white text-[12px] gap-2 sm:gap-4 mx-auto pb-1'>
          <span className="whitespace-nowrap">Meta</span> 
          <span className="whitespace-nowrap">About</span> 
          <span className="whitespace-nowrap">Blog</span> 
          <span className="whitespace-nowrap">Jobs</span> <span className="whitespace-nowrap">Help</span> <span className="whitespace-nowrap">API</span>
          <span className="whitespace-nowrap">Privacy</span> <span className="whitespace-nowrap">Terms</span> <span className="whitespace-nowrap">Locations</span> <span className="whitespace-nowrap">Instagram Lite</span> <span className="whitespace-nowrap">Meta AI</span> 
          <span className="whitespace-nowrap">Meta AI articles</span> <span className="whitespace-nowrap">Threads</span> <span className="whitespace-nowrap">Contact uploading and non-users</span> <span className="whitespace-nowrap">Meta Verified</span>
        </div>

        <div className='flex  flex-wrap justify-center w-full max-w-[1273px] text-white text-[12px] my-[12px]'>
          <span className="whitespace-nowrap"> English (UK)</span>
          <span className="whitespace-nowrap"> 2025 Instagram from Meta</span>
        </div>


        </div>
        

      </footer>
      
      
    </div>
  )
}

export default App
