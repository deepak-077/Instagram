import { useState,useRef } from "react"
import posts from "./posts";

export default function PostCard({item}){

    const [currentImg,setCurrentImg]= useState(0);
    const [likes,setLikes] = useState(0);
    const [allcomments,setAllComments]= useState<String[]>([])
    const [commentActive, setCommentActive] = useState(false);
    const [showcomments,setShowComments]=useState(false)
    const [captionExpand, setCaptionExpand]= useState(false)
    const [currentComment, setCurrentComment] = useState("")

    const [showLeftArrow_Post,setShowLeftArrow_Post]=useState(false);


    const postScrollRef = useRef<HTMLDivElement | null>(null);

    function handleScroll(){
        if(postScrollRef.current){
            const scrollPosition= postScrollRef.current.scrollLeft;
            const width = postScrollRef.current.offsetWidth

            const index=Math.round(scrollPosition / width);
            setCurrentImg(index);
        }
    }

    function handleScrollPostRight(){
        if(postScrollRef.current){
            postScrollRef.current.scrollBy({left:468, behavior:'smooth'});
        }
        setShowLeftArrow_Post(true)
    }

    function handleScrollPostLeft(){
        if(postScrollRef.current){
            postScrollRef.current.scrollBy({left:-468, behavior:"smooth"});
        }
    }


    function addComment(){
    if (!currentComment.trim()){
        return;
    }
    setAllComments(prev=>[...prev, currentComment]);
    setCurrentComment("");
    setCommentActive(false);

    console.log(allcomments);

}
function handleComments(){
    setShowComments(prev=>!prev)
}

function handleCaption(){
    setCaptionExpand((prev)=>!prev)
}


    return(
        <article className="w-full max-w-[470px] min-h-[660px] max-h-[830px] h-auto ">

                    <div className="w-full max-w-[470px] min-h-[660px] max-h-[810px] h-auto mb-5 pb-4 ">

                        {/* first container - username and other info */}
                        <div className="flex max-w-[470px] h-[44px] pb-3 pl-1 bg-black">
                            {/* inner container */}
                            <div className="flex items-center justify-between w-full max-w-[466px] h-[32px] gap-2">

                                {/* dp image */}
                                <div className="flex items-center max-w-[41px] h-[41px]">
                                    <img className="max-w-[32px] h-[32px] rounded-full" src={item.dp} alt="" />
                                </div>

                                    {/* name and time of upload */}
                                    <div className="flex w-full max-w-[390px] h-[18px] gap-5">
                                        <div className="flex items-center max-w-[60px] h-[18px] gap-1" >
                                            <span className=" text-sm">{item.username}</span>
                                            {/* verified tag */}
                                            <span className=" flex justify-center items-center max-w-[12px] h-[12px]">
                                                <img className=" max-w-[12px] h-[12px]" src="/verified.png" alt="" />
                                            </span>


                                        </div>

                                        <div className=" w-full max-w-[47px] h-[18px] flex items-center gap-1.5">
                                        <span className="max-w-[7px] h-[18px] text-sm">.</span>
                                        <time className="h-[17px] text-sm max-w-[19px]  "> {item.time} </time>

                                        </div>
                                    </div>

                                    {/* three dots option */}
                                    <div>
                                        <span className="text-sm">...</span>
                                    </div>

                            </div>

                        </div>

                        {/*second container - image */}
                        <div className='relative w-full max-w-[468px] '>

                            
                            <div ref={postScrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory w-full max-w-[468px]  border-gray-600 no-scrollbar ">
                                
                                {item.postedImg.map((pics,index)=> (
                                    <img key={index} className=" w-full max-w-[468px] max-h-[565px] h-auto shrink-0" src={pics} alt="" />
                                ))}
                                
                            </div>

                            {/* buttons for multiple images */}
                            {item.postedImg.length>1 && (
                                
                                <div className='  flex justify-between items-center w-full '>
                                    {currentImg>0 && (
                                        <button className={` ${showLeftArrow_Post? "flex" : "hidden"} absolute left-0 top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10`} onClick={handleScrollPostLeft}  >
                                            <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                                                <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/left.png" alt="" />
                                            </div>
                        
                                        </button>    
                                    )}

                                    
                                    {currentImg<item.postedImg.length-1 && (
                                        <button className='right-0 absolute top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10' onClick={handleScrollPostRight}>
                                            <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                                                <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/right.png" alt="" />
                                            </div>        
                                        </button>
                                    )}
                            </div>

                            )}

                            {/* image dots for showing the image num we are at */}

                            {item.postedImg.length > 1 && (
        <div className="absolute left-1/2 bottom-2 flex justify-center items-center gap-1.5 mt-2">
          {item.postedImg.map((dot: any, idx: number) => (
            <span key={idx} className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                currentImg === idx ? "w-3 bg-red-500" : "w-2 bg-gray-600"
              }` }
             onClick={()=>{
                setCurrentImg(idx)
                if(postScrollRef.current){
                    const width= postScrollRef.current.offsetWidth;
                    postScrollRef.current.scrollTo({
                        left:idx*width, // pixels to reach the image
                        behavior:"smooth",
                    });
                }
             }}/>
          ))}
        </div>
      )}
                        </div>     
                        

                        {/* third container - likes and comments */}
                        <div className="w-full max-w-[470px] max-h-[180px] h-auto">

                            {/* first section - likes share comments*/}
                            <section className="flex justify-between w-full max-w-[470px] h-[40px] bg-lime-400">

                                {/* like share and comment */}
                                <div className="flex items-center w-full max-w-[235px] h-[40px]">

                                    {/* like */}
                                    <div className="w-full max-w-[40px] h-[40px] p-2 cursor-pointer " onClick={()=>{setLikes(likes+1)}}>
                                        <img className="hover:bg-red-400 rounded-lg max-w-[24px] h-[24px]" src="/like.png" alt="" />
                                    </div>

                                    {/* comment */}
                                    <div className="w-full max-w-[40px] h-[40px] p-2" onClick={()=>setCommentActive(true)}>
                                        <img className="max-w-[24px] h-[24px]" src="/comment.png" alt="" />
                                    </div>

                                    {/* share */}
                                    <div className="w-full max-w-[40px] h-[40px] p-2">
                                        <img className="max-w-[24px] h-[24px]" src="/send.png" alt="" />
                                    </div>

                                </div>

                                <div className="flex items-center">
                                    <img className="max-w-[24px] h-[24px]" src="/bookmark.png" alt="" />
                                </div>

                            </section>

                            {/* second section - total likes */}
                            <div className="max-w-[470px] w-full h-[18px] font-semibold text-sm">
                                {item.likes} Likes
                            </div>

                            {/* third section - caption */}
                            <div className={`max-w-[470px] w-full min-h-[18px] ${captionExpand? "h-[auto]" : "max-h-[54px]"} mt-1.5  `}>
                                <span className={` max-w-[458px] w-full min-h-[18px] ${!captionExpand? "line-clamp-2 " : ""} text-sm `}> 

                                {/* make this to div and style accordingly */}
                                    <span className="inline-flex items-center gap-1">
                                        <span className="font-semibold"> {item.username} </span>
                                        <img className="max-w-[12px] h-[12px] inline" src="/verified.png" alt="" />
                                    </span>

                                        {item.caption}
                                </span>
                                {item.caption.length>90 && (
                                <span className='text-sm font-semibold cursor-pointer' onClick={handleCaption}>{captionExpand? "Less": "More"}</span>
                                )}
                                   
                            </div>

                            {/* number of comments  */}
                            <div className={`max-w-[470px] mt-2 w-full ${showcomments? "h-auto":"h-[18px]"} `}>
                                <span className="text-sm text-gray-300 " onClick={handleComments}>{showcomments? "hide comments":  `Show ${allcomments.length} Comments`}</span>

                                {showcomments && allcomments.map((item,index)=>(
                                    <div className='h-[18px]'>{item}</div>
                                ))}
                            </div>

                            {/* add a comment */}
                            <div className="flex items-center max-w-[470px] w-full h-[18px] mt-3 rounded-2xl">
                                <textarea className={`text-sm text-gray-300 max-w-[451px] rounded-2xl w-full ${commentActive?"h-auto  text-red-400" : "h-[18px]" } `} placeholder="Add a comment..." name = "comment" value={currentComment} onFocus={() =>setCommentActive(true)}  onChange={(e) =>setCurrentComment(e.target.value)}></textarea>
                                    
                                    <span className="w-full max-w-[13px] h-[13px]">
                                        <img className=" w-full max-w-[13px] h-[13px]" src="/happy.png" alt="" />
                                    </span>

                                    {/* add comment icon - visible when we type comnt */}

                                    <span className={`${commentActive?"flex bg-amber-400":"hidden"} cursor-pointer w-full max-w-[13px] h-[13px]`} onClick={addComment}>
                                        <img className=" w-full max-w-[13px] h-[13px]" src="/send.png" alt="" />
                                    </span>
                                    
                            </div>
                        </div>
                    </div>

                    </article>
    )
}