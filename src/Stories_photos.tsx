import './App.css'

const stories=[
    {
    img:"chris.jpg",
    title:"chrishemsworth"
},
{
    img:"sachin.jpg",
    title:"sachintendulkar"
},
{
    img:"flag.jpg",
    title:"mahi7781"
},
{
    img:"taylor.jpg",
    title:"taylorswift"
},
{
    img:"me.jpg",
    title:"iamdepak"
},
{
    img:"aniket.jpg",
    title:"aniketxanand"
},

]

function Middle(){
    return(
        <>
        {/* stories and photos */}
                <div className="flex flex-col max-w-[630px] w-full mt-4 ">

                    {/* stories */}
                    <div className="flex items-center max-w-[630px] w-full h-[124px] py-2 px-[9px] bg-black gap-3">
                        {stories.map((item,index)=>(
                            <li className="flex items-center justify-center w-full max-w-[90px] h-[108px]">
                            
                            <div className="w-full max-w-[90px] h-[102px] flex flex-col items-center">
                                
                                <div className="w-full max-w-[89px] h-[89px] border-gray-800 border-3 rounded-full flex justify-center items-center">
                                <img className="w-full max-w-[74px] h-[74px] rounded-full " src={`/Instagram_files/${item.img}`} alt=" picture" />
                                </div>

                                <span className="w-full max-w-[66px] h-[16px] text-white text-xs text-center mt-0.5 text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</span>

                            </div>

                        </li>
                        ))}
                        
                        
                    </div>

                    {/* username & photos  - divided into 3 segments*/}  
                    <div className=" flex justify-center items-center max-w-[630px] w-full bg-black text-white ">

                        {/* outer container */}
                        <article className="w-full max-w-[470px] min-h-[660px] max-h-[830px] h-auto">

                        <div className="w-full max-w-[470px] min-h-[660px] max-h-[810px] h-auto mb-5 pb-4">

                            {/* first container - username and other info */}
                            <div className="flex max-w-[470px] h-[44px] pb-3 pl-1 bg-black">
                                {/* inner container */}
                                <div className="flex items-center justify-between w-full max-w-[466px] h-[32px] gap-2">

                                    {/* dp image */}
                                    <div className="flex items-center max-w-[41px] h-[41px]">
                                        <img className="max-w-[32px] h-[32px] rounded-full" src="/Instagram_files/mahi.jpg" alt="" />
                                    </div>

                                    {/* name and time of upload */}
                                    <div className="flex w-full max-w-[390px] h-[18px] gap-5">
                                        <div className="flex items-center max-w-[60px] h-[18px] gap-1" >
                                            <span className=" text-sm">mahindra</span>
                                            {/* verified tag */}
                                            <span className=" flex justify-center items-center max-w-[12px] h-[12px]">
                                                <img className=" max-w-[12px] h-[12px]" src="/Instagram_files/verified.png" alt="" />
                                            </span>


                                        </div>

                                        <div className=" w-full max-w-[47px] h-[18px] flex items-center gap-1.5">
                                        <span className="max-w-[7px] h-[18px] text-sm">.</span>
                                        <time className="h-[17px] text-sm max-w-[19px]  "> 2d </time>

                                        </div>
                                    </div>

                                    {/* three dots option */}
                                    <div>
                                        <span className="text-sm">...</span>
                                    </div>

                                </div>

                            </div>

                            {/*second container - image */}
                            <div className="w-full max-w-[468px] border-gray-600 ">
                                <img className="w-full max-w-[468px] max-h-[565px] h-auto" src="/Instagram_files/car.jpg" alt="" />

                            </div>

                            {/* third container - likes and comments */}
                            <div className="w-full max-w-[470px] max-h-[180px] h-auto">

                                {/* first section - likes share comments*/}
                                <section className="flex justify-between w-full max-w-[470px] h-[40px] bg-amber-400">

                                    {/* like share and comment */}
                                    <div className="flex items-center w-full max-w-[235px] h-[40px]">

                                        {/* like */}
                                        <div className="w-full max-w-[40px] h-[40px] p-2">
                                            <img className="max-w-[24px] h-[24px]" src="/Instagram_files/like.png" alt="" />
                                        </div>

                                         {/* comment */}
                                        <div className="w-full max-w-[40px] h-[40px] p-2">
                                            <img className="max-w-[24px] h-[24px]" src="/Instagram_files/comment.png" alt="" />
                                        </div>

                                         {/* share */}
                                        <div className="w-full max-w-[40px] h-[40px] p-2">
                                            <img className="max-w-[24px] h-[24px]" src="/Instagram_files/send.png" alt="" />
                                        </div>

                                    </div>
                                    <div className="flex items-center">
                                        <img className="max-w-[24px] h-[24px]" src="/Instagram_files/bookmark.png" alt="" />
                                    </div>

                                </section>

                                {/*second section - total likes */}
                                <div className="max-w-[470px] w-full h-[18px]">
                                    707 likes
                                </div>

                                {/* third section - caption */}
                                <div className="max-w-[470px] w-full min-h-[18px] max-h-[54px] h-[auto] mt-2">
                                    <span className="flex items-start max-w-[458px] w-full min-h-[18px] max-h-[36px] h-[auto] text-sm"> 

                                        {/* make this to div and style accordingly */}
                                        <span className="flex items-center gap-1">
                                            <span className="font-semibold"> username </span>
                                            <img className="max-w-[12px] h-[12px]" src="/Instagram_files/verified.png" alt="" />
                                        </span>

                                            Eastman kodak started over a century ago and rose to prominence in the mid -20th century 
                                        with its portable cameras - but digital cameras disrupted its hold on the market 
                                         
                                    </span>
                                    <span>more</span>
                                   
                                </div>

                                {/* number of comments  */}
                                <div className="max-w-[470px] w-full h-[18px]">
                                    <span className="text-sm text-gray-300">View All 42 Comments</span>
                                </div>

                                {/* add a comment */}
                                <div className="flex items-center max-w-[470px] w-full h-[18px]  mt-2">
                                    <textarea className="text-sm text-gray-300 max-w-[451px] w-full h-[18px]" placeholder="Add a comment..." id=""></textarea>
                                    <span className="w-full max-w-[13px] h-[13px]">
                                        <img className=" w-full max-w-[13px] h-[13px]" src="/Instagram_files/happy.png" alt="" />
                                    </span>
                                    
                                </div>





                            </div>


                        </div>

                        </article>

                        <div className="max-w-[470px] h-[17px] mb-5 pb-4 bg-amber-200"><hr /></div>

                    </div>
                </div>

        </>
    )
}

export default Middle;