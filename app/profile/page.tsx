export default function Profile(){
    
    
    return(
        <div className="bg-black flex justify-center">

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

        </div>
    )
}