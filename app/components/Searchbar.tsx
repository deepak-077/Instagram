function Searchbar(){
    return(
         <div className="flex justify-between items-center w-screen  h-[60px] md:hidden text-white px-4">
                {/* logo and dropdown icon*/}
                <div className="w-full max-w-[423px] h-[31px]">
                    <div className="flex items-center w-full max-w-[131px] h-[31px]">
                        <img className="w-full max-w-[103px] h-[29px]" src="Instagram white.svg" alt="" />
                        <div className="flex w-[28px] h-[28px] p-2"> 
                            <img className="w-[12px] h-[12px]" src="Instagram_files/down.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* searchbar */}
                <div className="flex items-center w-full max-w-[312px] h-[36px] ">

                    <div className="w-full max-w-[276px] h-[36px] mr-3 pr-3 ">
                        <div className="w-full max-w-[268px] h-[36px] px-4 bg-[#363636] rounded-lg">
                            {/* the inner most div */}
                            <div className="w-full max-w-[78px] h-[36px] flex items-center gap-2 ">
                                <img className="w-[16px] h-[16px]" src="Instagram_files/search_grey.png" alt="" />
                                <span className="text-[#a8a8a8]" >Search</span>

                            </div>

                        </div>

                    </div>
                    
                    {/* notifications icon */}
                    <div className="w-full max-w-[40px] h-[24px] -mr-4 text-white flex items-center">
                        <img className="max-w-[24px] h-[24px]" src="/Instagram_files/heart.png" alt="" />
                    </div>
                </div>
            </div>

    )

}
export default Searchbar;