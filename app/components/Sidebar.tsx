"use client"
import { string } from 'zod';
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
        img:"heart.png",
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
    const [expanded, setIsExpanded] =useState<string | null> (null);
    

    useEffect(()=>{
        const screenSize=()=>{
            setIsSmall(window.innerWidth<768);
        }

        screenSize();

        window.addEventListener('resize',screenSize);
        return ()=>window.removeEventListener('resize',screenSize);
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
            <div className={`w-screen  md:max-w-[72px] bg-black flex flex-row md:flex-col items-center border-r-1 border-[#262626] transition-all duration-300 ease-in-out ${expanded==='Search' || expanded==='Notifications'?'xl:max-w-[72px]':'xl:max-w-[240px]'}`}>

                <div className="flex justify-center w-full max-w-[48px] h-[96px] xl:max-w-[220px] xl:h-[92px] hidden md:block">
                    <div className="flex justify-center w-full  mt-3 xl:mt-0 xl:pt-[25px]  pb-[23px] xl:pb-[16px] max-w-[48px] h-[92px] xl:max-w-[220px] xl:h-[73px] xl:mb-[19px] xl:px-[12px]">
                        <div className="w-full max-w-[196px] h-[37px]">
                            <img className="rounded-full w-full max-w-[103px] h-[29px]" src="Instagram_white.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* menu options*/}
            
                <div className={`flex flex-row md:flex-col justify-around md:justify-normal  w-full md:max-w-[48px] xl:max-w-[220px] h-[52px]`}>
                    {visibleMenu.map((item,index) =>(
                        
                        <div key={index} 
                        onClick={()=>{
                            if(item.title ==='Search'  || item.title==='Notifications'){
                                setIsExpanded((prev)=> prev===item.title ? null:item.title
                            )}
                        }}
                        
                        className="flex justify-center md:justify-start w-full max-w-[48px] h-[52px] xl:max-w-[220px] xl:h-[48px] md:my-0.5 p-3 cursor-pointer">

                            <img className="w-full max-w-[24px] h-[24px]"  src={`/${item.img}`} alt="" />
                            <div  className={`flex items-center w-full max-w-[62px] h-[24px] text-white 
                                ${expanded ==='Search' || expanded ==='Notifications'?'hidden xl:hidden' :'hidden xl:flex'}`}> 

                                <span className="pl-4">{item.title}</span>
                            </div>
    
                        </div>
                    ))}

                    {/* Expandable panel for Search or Notifications */}
                    
                    <div className= {`transform transition-transform duration-300 ease-in-out fixed top-0 left-[72px] h-full w-full max-w-[397px] text-white shadow-lg z-50
                                    ${expanded? 'translate-x-0 bg-black':'-translate-x-full bg-transparent'} md:left-[72px]` }>  
                                    {/* md:left-[72px] was added in the above line */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">{expanded}</h2>
                        </div>

                    {/* Dynamic content of Search and Notification */}
                    {expanded === 'Search' && <p>Search panel content goes here...</p>}
                    {expanded === 'Notifications' && <p>Notifications content goes here...</p>}
                    </div>
                    

                    
                </div>
                
            </div>
        </>
    )

}

export default Sidebar;

