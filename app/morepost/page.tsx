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
            <div className=" w-full max-w-[975px] mx-[248px] pt-[30px] px-5">

                <div className="flex">
                    {/* image or video */}
                    <div className="w-[480px] h-[600px]">
                        <img className="w-[480px] h-[600px] bg-[#0C1014]" src="" alt="" />
                    </div>


                    {/* caption and comments */}
                <div>

                    {/* userinfo */}
                    <div className="flex w-[335px] h-[60px] py-[14px] px-4">
                        <div className="flex w-[304px] h-[32px]">
                            <div className="size-8 mr-3">
                                <img className="size-8 rounded-full" src="messi.jpg" alt="" />
                            </div>

                            <div className="h-[18px]">
                                <span>leomessi</span>
                                <span><img className="size-3" src="verified.png" alt="" /></span>

                            </div>


                        </div>

                    </div>

                </div>

                </div>

                

                

                



            </div>


        </div>
    )
}