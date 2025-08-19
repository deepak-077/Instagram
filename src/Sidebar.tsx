const menu=[
    {
        img:"home.png",
        title:"Home"
    },
    {
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
    {
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
    {
        img:"menu.png",
        title:"More"
    },
]

function Sidebar(){
    return(
        <>
        {/* sidebar */}
            <div className="max-w-[240px] w-full bg-black flex flex-col items-center border-r-1 border-gray-800">

                <div className="flex justify-center w-full max-w-[220px] h-[92px]">
                    <div className="flex justify-center w-full max-w-[220px] h-[73px] mb-[19px] pt-[25px] px-[12px] pb-[16px]">
                        <div className="w-full max-w-[196px] h-[37px]">
                            <img className="rounded-full w-full max-w-[103px] h-[29px]" src="Instagram white.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* menu options*/}
            
                <div className="w-full max-w-[220px] h-[52px]">
                            {menu.map((item,index) =>(
                        <div className="flex w-full max-w-[220px] h-[48px] my-0.5 p-3">

                            <img className="w-full max-w-[24px] h-[24px]" src={`/Instagram_files/${item.img}`} alt="" />
                            <div className="flex items-center w-full max-w-[62px] h-[24px] text-white"> 
                                <span className="pl-4">{item.title}</span>
                            </div>
    
                        </div>

                    ))}
                    
                </div>
                
            </div>
        </>
    )

}
export default Sidebar;