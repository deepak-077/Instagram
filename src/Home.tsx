function Home(){
    return(
        //parent container
        <div className="flex">
            {/* sidebar */}
            <div className="max-w-[240px] w-full bg-red-700">
                <p className="font-extrabold"> Instagram </p>
                <p className="font-extrabold">menu</p>
            </div>

            {/* photos and suggestions container */}
            <div className="flex max-w-[1061px] w-full min-h-screen bg-black">

                {/* stories and photos */}
                <div className="flex flex-col max-w-[630px] w-full mt-4 bg-amber-400">

                    {/* stories */}
                    <div className="max-w-[630px] w-full h-[124px] py-2 px-[9px] bg-red-400">

                    </div>

                    {/* username & photos */}
                    <div className=" max-w-[630px] w-full bg-blue-300">

                        <div className="max-w-[470px] h-[660px] mb-5 pb-4">
                            {/* username and other info */}
                            <div className="w-full max-w-[470px] h-[44px] pb-3 pl-1">
                                <div className="flex w-full w-max-[466] h-[32px]">

                                    {/* image */}
                                    <canvas>
                                        <img src="" alt="" />
                                    </canvas>
                                    <div className="flex max-w-[390px] h-[18px]">
                                        <div className=" w-full max-w-[60px] h-[18px]" >
                                            <span>forbes</span>
                                            <span className="max-w-[12px] h-[12px]">
                                                <img className="max-w-[12px] h-[12px]" src="" alt="" />
                                            </span>


                                        </div>

                                        <div className="w-full max-w-[47px] h-[18px]">
                                        <span className="max-w-[7px] h-[18px]">.</span>
                                        <time className="h-[17px]"> 2d </time>

                                        </div>

                                        

                                    </div>

                                    {/* three dots option */}
                                    <div>
                                        <span>...</span>
                                    </div>

                                </div>

                            </div>

                            {/* image */}
                            <div className="max-w-[468px] h-[468px]">

                            </div>


                        </div>
                        


                    </div>
                </div>

                {/* suggestions */}
                <div className="max-w-[383px] w-full h-[420px] pl-[64px] bg-green-400">
                    <div className="max-w-[320px] w-full h-[548px] mt-9">

                        {/* user info */}
                        <div className="w-full max-w-[319px] h-[44px] px-[16px]">
                            <div className="flex justify-between max-w-[287px] w-full h-[44px]">

                                {/* image */}
                                <div className="flex justify-center items-center border-2 w-[56px] h-[44px]">
                                    <img className="w-[44px] h-[44px] rounded-full bg-amber-700" src="" alt="" />

                                </div>

                                {/* name and username */}
                                <div className="flex flex-col w-full max-w-[180px] h-[36px]">
                                    <a href="">iamuser</a>
                                    <span>Delta</span>

                                </div>

                                {/* switch  */}
                                <div className=" flex justify-center items-center w-full max-w-[51px] h-[18px]">
                                    <div className="w-full max-w-[40px] h-[18px]">
                                        Switch
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* suggested for you outer container*/}
                        <div className="w-[319px] h-[351px] mt-6 mb-2">

                            {/* inner div */}
                            <div className=" w-full max-w-[287px] h-[351px] mx-4">
                                <div className="flex justify-between w-max-[319px] h-[19px] py-1 px-4 ">
                                    <div className="max-w-[246px] h-[11px]">
                                    <span className="h-[11px]">
                                        Suggested for you
                                    </span>
                    
                                </div>
                                <span>See All</span>

                                </div>
                                

                                {/* suggested people */}
                                <div className="max-w-[315px] h-[316px] py-2">
                                    {/* person */}
                                    <div className="flex max-w-[315px] h-[60px] py-2 px-4 bg-gray-500">
                                        {/* picture */}
                                        <div className="max-w-[56px] h-[44px] pr-3">
                                            <img className="max-w-[44px] h-[44px] rounded-full" src="" alt="" />

                                        </div>
                                        

                                        {/* name and reason for suggestion */}
                                        <div className=" flex flex-col w-max-[177px] h-[34px]">
                                            <span>username</span>
                                            <span>Reason for suggestion</span>
                                        </div>

                                        <div className="max-w-[38px] h-[16px]">follow</div>



                                    </div>

                                </div>



                            </div>
                            
                        </div>
                        

                    </div>



                </div>

            </div>
        </div>
    )
}
export default Home;