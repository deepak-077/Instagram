const comments = [
    {username:"user1",
     dp:"img1",
     comment:"lorem10"
    },
    {username:"user2",
     dp:"img1",
     comment:"lorem10"
    },
    {username:"user3",
     dp:"img1",
     comment:"lorem10"
    },
    {username:"user4",
     dp:"img1",
     comment:"lorem10"
    },
    {username:"user5",
     dp:"img1",
     comment:"lorem10"
    }
]

export default function MorePost(){

    return(
        <div className="bg-black flex flex-col items-center">

            {/* navbar with - login and signup button */}
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
            <div className=" w-full max-w-[975px] h-[2062px] mx-[248px] pt-[30px] px-5">

                <div className="w-full max-w-[818px] flex">
                    {/* image or video */}
                    <div className="w-[480px] h-[600px]">
                        <img className="w-[480px] h-[600px] " src="" alt="" />
                    </div>


                    {/* caption and comments */}
                    <div className="border border-lime-400">

                    {/* userinfo */}
                    <div className="flex w-[335px] h-[60px] py-[14px] px-4">
                        <div className="flex items-center w-[304px] h-[32px]">
                            <div className="size-8 mr-3">
                                <img className="size-8 rounded-full" src="messi.jpg" alt="" />
                            </div>

                            <div className="text-white flex gap-2 h-[18px]">
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center w-auto h-[18px] gap-1">
                                        <span className="font-semibold text-sm">leomessi</span>
                                        <span><img className="size-3" src="verified.png" alt="" /></span>
                                    </div>

                                    <div className="flex items-center gap-1.5 h-[18px]">
                                        <span className="bg-[#a8a8a8] w-[7px] h-[18px] rounded-full"></span>
                                        <span className="text-[#85A1FF] font-semibold text-sm">Follow</span>
                                    </div>

                                </div>
                                <div className="w-8 h-6">
                                     <img className="size-6" src="" alt="3dots" />

                                </div>
                                 
                            </div>
                        </div>
                    </div>


                    {/* comments */}
                    <div className="w-[335px] h-[425px] px-4 pb-4 ">
                        {/* user info and Caption */}
                        <div className="w-[303px] h-[78px] py-3 border border-amber-300">

                            <div className="flex">
                                {/* profile pic */}
                                <div className="w-[32px] h-[54px] mr-2"> 
                                    <img className="size-8 rounded-full" src="messi.jpg" alt="" />


                                </div>

                                <div className=" text-white">
                                    <div className="w-[263px] h-[18px] font-semibold text-sm">
                                        <div className="flex items-center gap-1 w-auto h-[18px]">
                                            <span className="w-auto  h-[18px]">leomessi </span>
                                            <img className="size-3" src="verified.png" alt="" />
                                            <span className="text-[#A8A8A8]">5w</span>
                        
                                        </div>

                                    </div>

                                    {/* caption */}
                                    {/* Adjust the line spacing */}
                                    <span className="text-sm">Momentos especiales que sé que voy a extrañar… 🇦🇷</span>

                                </div>
                            </div>

                        </div>

                        {/* plus button */}
                        <div className=" w-full flex justify-center h-[40px] p-2">
                            <img className="size-6" src="" alt="" />

                        </div>


                        {/* individual comments */}
                        <div className="flex w-[303px] h-auto  py-3">
                            
                            <div className="w-8 h-auto mr-3">
                                <img className="rounded-full size-8" src="" alt="" />

                            </div>
                            <div className="w-[259px] h-auto text-white text-sm">
                                {/* username and time */}
                                <div className="flex gap-1 font-semibold w-full h-[18px]">
                                    <span>username</span>
                                    <span className="text-[#A8A8A8]">1d</span>
                                </div>

                                {/* comment */}
                                <div className="w-full h-auto">
                                    <span className="h-auto text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic provident distinctio repudiandae, quia recusandae illo culpa, ipsum, similique eaque esse fuga praesentium nobis temporibus reiciendis velit dignissimos? Voluptatibus, quae eius! </span>
                                </div>

                                {/* like and reply */}
                                <div className="flex text-[#A8A8A8] font-semibold gap-3 text- w-full h-4 mt-2 text-xs">
                                    <span className="h-4">Like</span>
                                    <span className="h-4">Reply</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="w-full h-[80px] py-1.5 px-4">
                        <section className="w-[303px] h-[40px]">
                            
                            {/* like comment and share */}
                            <div className="w-[202px] h-[40px]">
                                <div className="size-10 p-2">
                                    <img src="" alt="" />

                                </div>


                            </div>

                            {/* save icon */}
                            <div>

                            </div>
                        </section>

                    </div>




                </div>

                </div>

            </div>
        </div>
    )
}