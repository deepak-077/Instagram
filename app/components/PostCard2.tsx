import { useState,useRef } from "react"

export default function PostCard2({postedImg}){

    const [currentImg,setCurrentImg]= useState(0);
    const [likes,setLikes] = useState(0);
    const [allcomments,setAllComments]= useState<String[]>([])
    const [commentActive, setCommentActive] = useState(false);
    
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
            postScrollRef.current.scrollBy({left:480, behavior:'smooth'});
        }
        setShowLeftArrow_Post(true)
    }

    function handleScrollPostLeft(){
        if(postScrollRef.current){
            postScrollRef.current.scrollBy({left:-480, behavior:"smooth"});
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



    return(
            <div className='relative w-full max-w-[480px] overflow-hidden '>

                            <div ref={postScrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory w-full max-w-[480px]  border-gray-600 no-scrollbar ">
                                
                                {postedImg.map((pics,index)=> (
                                    <img key={index} className=" w-full max-w-[480px] max-h-[600px] h-auto shrink-0" src={pics} alt="" />
                                ))}
                                
                            </div>

                            {/* buttons for multiple images */}
                            {postedImg.length>1 && (
                                
                                <div className='flex justify-between items-center w-full'>
                                    {currentImg>0 && (
                                        <button className={` ${showLeftArrow_Post? "flex" : "hidden"} absolute left-0 top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10`} onClick={handleScrollPostLeft}  >
                                            <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                                                <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/left.png" alt="" />
                                            </div>
                        
                                        </button>    
                                    )}

                                    
                                    {currentImg<postedImg.length-1 && (
                                        <button className='right-0 absolute top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10' onClick={handleScrollPostRight}>
                                            <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                                                <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/right.png" alt="" />
                                            </div>        
                                        </button>
                                    )}
                            </div>

                            )}

                            {/* image dots for showing the image num we are at */}

                            {postedImg.length > 1 && (
        <div className="absolute left-1/2 bottom-2 flex justify-center items-center gap-1.5 mt-2">
          {postedImg.map((dot: any, idx: number) => (
            <span key={idx} className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                currentImg === idx ? "w-3 bg-red-500" : "w-2 bg-gray-600"
              }` }
             onClick={()=>{
                setCurrentImg(idx)
                if(postScrollRef.current){
                    const width= postScrollRef.current.offsetWidth;
                    postScrollRef.current.scrollTo({
                        left:idx * width, // pixels to reach the image
                        behavior:"smooth",
                    });
                }
             }}/>
          ))}
        </div>
      )}
            </div>     
                        
    )
}