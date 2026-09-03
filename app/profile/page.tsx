const highlights = [
    {
        img:["img1","img2","img3"],
        caption:"Seleccion"
    },
    {
        img:["img1","img2","img3"],
        caption:"FCB"
    },
    {
        img:["img1","img2","img3"],
        caption:"Familia"
    },
]

const profile={
    username:"leomessi",
    followers:"516M",
    following:"369",
    name: "Leo Messi",
    about:"Bienvenidos a la cuenta oficial de Instagram de Leo Messi / Welcome to the official Leo Messi Instagram account",
    // {about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sint libero iure culpa maxime id quo voluptatum soluta est asperiores ratione labore dolorem veritatis numquam eaque fuga qui neque deserunt hic nesciunt, optio tempora rerum. Cumque, quos fugiat provident ipsa itaque suscipit laborum rerum et sequi quas nam officiis aliquam corporis placeat facilis explicabo voluptates nobis culpa aut assumenda. Veritatis asperiores, a modi hic distinctio voluptas perspiciatis. Sapiente enim ad recusandae temporibus qui ut optio quisquam facilis, sequi voluptas repudiandae maiores provident voluptatum error voluptates sunt asperiores iure dicta nisi amet sint eos cumque officiis tenetur! Ducimus sed magni distinctio officia reprehenderit quibusdam sunt, eos pariatur nulla molestias odit a est debitis! Voluptatum veniam, commodi dolor voluptate delectus quas assumenda enim neque, explicabo vero minus sit animi placeat esse modi ipsum. Quidem quaerat cupiditate reprehenderit aut, dignissimos voluptates cum fugiat. Unde officiis rerum hic illum, voluptates ut! Fugiat, vitae enim."},
    links:"instagram.com/uecornella and 2 more"

}



export default function Profile(){
    
    
    return(
        <div className="bg-black flex flex-col items-center">

            {/* login and signup button */}
            <div className="flex items-center justify-between w-full max-w-[975px] h-[60px] px-5">
                
                {/* logo */}
                <div className="h-[34px]">
                    <img className="w-[108px] h-[32px]" src="Instagram_white.svg" alt="" />
                </div>

                <div className="flex h-[32px]">
                    <div className="h-[32px] pl-6">
                        <div className="h-8">

                            <div className=" h-8 ml-4">
                                <div className="flex items-center h-8 px-4 bg-[#4A5DF9] text-sm text-white font-semibold rounded-lg">
                                    Log In
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* signup button */}
                    <div className="flex items-center h-8 px-4 text-sm text-[#85A1FF] font-semibold">
                        Sign Up
                    </div>

                </div>


            </div>

            {/* profile and photos section */}
            <div className="w-full max-w-[975px] mx-[248px] pt-[30px] px-5">

                {/* profile */}
                <header className="flex flex-col w-full h-[395px]">

                    <div className="flex">

                        {/* profile pic */}
                    <section className="flex items-center justify-center w-[284px] h-[177px] mr-7">
                        <div className="flex items-center justify-center w-[284px] h-[150px]">
                            <div className="flex items-center justify-center w-[165px] h-[165px]">
                                <img className="size-[150px] rounded-full" src="messi.jpg" alt="" />
                            </div>
                        </div>
                    </section>


                    {/* name and other info */}
                    
                        <div className="flex flex-col text-white w-[624px]">
                            
                            {/* username */}
                            <div className="h-[25px] mb-5">
                                <div className="flex items-center gap-1.5 h-[25px]">
                                    <span className="font-semibold text-[#F5F5F5] text-[20px]">{profile.username}</span>
                                    <img className="size-[18px]" src="verified.png" alt="" />
                                </div>

                            </div>



                            {/* following and followers */}
                            <section className="w-full h-10">
                                <ul className="flex gap-10 w-full h-5 mb-5">
                                    <span><b>{profile.followers}</b> followers </span>
                                    <span><b>{profile.following}</b> following </span>
                                </ul>
                            </section>

                            <div className="flex flex-col w-full h-[76px] text-sm text-white">
                                <span className="h-[18px] font-semibold">{profile.name}</span>
                                <span className="h-auto text-sm font-medium">{profile.about}</span>
                                
                                <div className="flex items-center">
                                    <span className="flex justify-center items-center size-[18px] mr-[7px] pt-[3px]">
                                         <img className="size-3" src="link.png" alt="" />
                                    </span>
        
                                    <span className="text-[#708DFF] h-[18px] font-semibold">{profile.links}</span>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                   
                   

                    
                    


                    




                    {/* Highlights */}
                    <section className="w-full h-[174px]">
                         <div className="flex w-full h-[130px]">
                        <li className="w-6 h-[130px]"></li>
                        {highlights.map((item,index)=>(
                            <li className="flex items-center justify-center w-full max-w-[125px] h-[130px]">
                                <div className="flex flex-col items-center justify-center w-full max-w-[115px] h-[128px] px-[15px] py-2.5">
                                    
                                    {/* {item.img.map((pics,idx)=>( */}
                                        <div className="flex items-center justify-center size-23">
                                            <img className="border-2 rounded-full size-[77px]" src="" alt="" />
                                        </div>
                                    {/* ))} */}
                                    

                                    <div className=" w-[85px] h-[31px] pt-[15px] text-white text-xs font-semibold">
                                        <span className="flex justify-center w-[85px] h-[16px]">
                                            {item.caption}

                                        </span>

                                    </div>

                                </div>
                            </li>
                        ))}

                        <li className="w-6 h-[130px]"></li>

                    </div>


                    </section>
                   

                </header>


            </div>

        </div>
    )
}