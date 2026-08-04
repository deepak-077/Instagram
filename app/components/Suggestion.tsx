import './App.css'

const people =[
    {
        img:"one.jpg",
        username:"user_1",
        reason:"suggested for you"

},
{
        img:"two.jpg",
        username:"user_2",
        reason:"followed by user_1"

},
{
        img:"three.jpg",
        username:"use_3",
        reason:"suggested for you"

},
{
        img:"four.jpg",
        username:"user_4",
        reason:"followed by user1, and 4 others bla bla bla bla"

},
{
        img:"sachin.jpg",
        username:"user_5",
        reason:"followed by user_2 and user_3"

},
]

function Suggestion(){
    return (
        <>
        {/* suggestions */}
        <div className="max-w-[383px] w-full h-[580px] pl-[64px] bg-black text-white hidden lg:block">
            <div className="max-w-[319px] w-full h-[547px] mt-9">

            {/* user info */}
                <div className="w-full max-w-[319px] h-[44px] px-[16px]">
                    <div className="flex justify-between max-w-[287px] w-full h-[44px]">

                        {/* image */}
                        <div className="flex justify-center items-center w-[56px] h-[44px]">
                            <img className="w-[44px] h-[44px] rounded-full " src="/Instagram_files/flag.jpg" alt="" />

                        </div>

                        {/* name and username */}
                         <div className="flex flex-col w-full max-w-[180px] h-[36px] text-sm">
                            <a className="font-semibold" href="">iamuser</a>
                                <span>Delta</span>

                        </div>

                        {/* switch  */}
                        <div className=" flex justify-center items-center w-full max-w-[51px] h-[36px]">
                            <div className=" flex items-center w-full max-w-[40px] h-[18px] text-xs">
                                Switch
                            </div>
                        </div>
                    </div>
                </div>

                {/* suggested for you outer container*/}
                <div className="w-[319px] h-[351px] mt-6 mb-2">

                    {/* inner div */}
                    <div className=" w-full max-w-[287px] h-[351px] mx-4 text-sm">
                        <div className="flex justify-between items-center w-max-[319px] h-[19px] py-1 px-4 ">
                            <div className="max-w-[246px] h-[11px]">
                                <span className="h-[11px]">
                                    Suggested for you
                                </span>
                    
                            </div>
                            <span className="text-xs">See All</span>

                        </div>
                                
                        {/* suggested people */}
                        <div className="w-full max-w-[315px] h-[316px] py-2">

                            {people.map((item,index)=>(
                                <div className="flex justify-between w-full max-w-[315px] h-[60px] py-2 px-4 bg-black gap-2">
                                    {/* picture */}
                                    <div className="max-w-[56px] h-[44px] pr-3">
                                        <img className="max-w-[44px] h-[44px] rounded-full" src={`/Instagram_files/${item.img}`} alt="" />

                                    </div>
                                        
                                    {/* name and reason for suggestion */}
                                    <div className=" flex flex-col max-w-[177px] h-[34px]">
                                        <span className="font-semibold">${item.username}</span>
                                        <span className="w-full max-w-[177px] text-ellipsis whitespace-nowrap overflow-hidden text-xs">{item.reason}</span>
                                    </div>

                                    <div className="max-w-[38px] h-[16px] text-xs">follow</div>

                                </div>    
                                    ))}
                        </div>
                    </div>
                </div>                        
            </div>
        </div>
    </>
    )
}


export default Suggestion;
