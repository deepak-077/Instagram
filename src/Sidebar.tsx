import './App.css'
import { useEffect,useState } from 'react';

const menu=[
    {
        img:"home.png",
        title:"Home"
    },
    {   //not in small
        img:"search.png",
        title:"Search"
    },
    {
        img:"compass.png",
        title:"Explore"
    },
    {
        img:"reels.png",
        title:"Reels"
    },
    {   
        img:"home.png",
        title:"Messages"
    },
    {   //not in small
        img:"like.png",
        title:"Notifications"
    },
    {
        img:"add.png",
        title:"Create"
    },
    {
        img:"mkbhd.jpg",
        title:"Profile"
    },
    {   //not in small
        img:"menu.png",
        title:"More"
    },
]

function Sidebar(){
    const [isSmall,setIsSmall] =useState(false);

    useEffect(()=>{
        const screensize=()=>{
            setIsSmall(window.innerWidth<768);
        }
        screensize();

        window.addEventListener('resize',screensize);
        return ()=>window.removeEventListener('resize',screensize);
    },[])

    const visibleMenu=isSmall ? menu.filter(
        (item) =>
            item.title!=='Search' &&
            item.title!=='Notifications'&&
            item.title!=='More'
        
    ):menu

    return(
        <>
        {/* sidebar */}
            <div className="w-screen md:max-w-[72px] xl:max-w-[240px] w-full bg-black flex flex-row md:flex-col items-center border-r-1 border-gray-800">

                <div className="flex justify-center w-full max-w-[48px] h-[96px] xl:max-w-[220px] xl:h-[92px] hidden md:block">
                    <div className="flex justify-center w-full  mt-3 xl:mt-0 xl:pt-[25px]  pb-[23px] xl:pb-[16px] max-w-[48px] h-[92px] xl:max-w-[220px] xl:h-[73px] xl:mb-[19px] xl:px-[12px]">
                        <div className="w-full max-w-[196px] h-[37px]">
                            <img className="rounded-full w-full max-w-[103px] h-[29px]" src="Instagram white.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* menu options*/}
            
                <div className="flex flex-row justify-around md:justify-normal md:flex-col w-full md:max-w-[48px] xl:max-w-[220px] h-[52px] ">
                    {visibleMenu.map((item,index) =>(
                        <div key={index} className="flex justify-center w-full max-w-[48px] h-[52px] xl:max-w-[220px] xl:h-[48px] md:my-0.5 p-3">

                            <img className="w-full max-w-[24px] h-[24px]" src={`/Instagram_files/${item.img}`} alt="" />
                            <div className="flex items-center w-full max-w-[62px] h-[24px] text-white hidden xl:block"> 
                                <span className="pl-4">{item.title}</span>
                            </div>
    
                        </div>
                    ))}
                    
                </div>
                
            </div>
        </>
    )

}
<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> 7eed756593fcf0f0616c1a5b65850ee78e1c590a
