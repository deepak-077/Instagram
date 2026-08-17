"use client"
import { useState,useRef, useEffect } from 'react';
import posts from './posts';
import stories from './stories';
import PostCard from './PostCard';



function Middle(){
    const storiesScrollRef = useRef<HTMLDivElement | null>(null);
    
    const [showLeftArrow,setShowLeftArrow]=useState(false);


function handleScrollStoriesRight(){
    if(storiesScrollRef.current){
        storiesScrollRef.current.scrollBy({left:300, behavior:"smooth"});
        setShowLeftArrow(true);
    }
}


function handleScrolStorieslLeft(){
    if(storiesScrollRef.current){
        storiesScrollRef.current.scrollBy({left:-300,behavior :"smooth"});
        setShowLeftArrow(false);
    }
}


    return(
        <>
        {/* stories and photos */}
        <div className="flex flex-col max-w-[630px] w-full mt-4">

            <div className="relative flex items-center max-w-[630px] w-full h-[124px] overflow-hidden">

                {/* left Arrow */}
                {showLeftArrow && (
                    <button className='absolute left-0 top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10' onClick={handleScrolStorieslLeft}>
                        <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                        
                                <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/left.png" alt="" />
                        </div>
                        
                    </button>
                    
                )}

                {/* stories */}
            <div ref={storiesScrollRef}
            className="flex items-center overflow-x-auto scroll-smooth flex-nowrap max-w-[630px] w-full h-[124px] py-2 px-[9px] bg-black gap-3 no-scrollbar">
                    
                {stories.map((item,index)=>(
                <li key={index} className="flex items-center shrink-0 justify-center w-full max-w-[90px] h-[108px]">
                            
                    <div className="w-full max-w-[90px] h-[102px] flex flex-col items-center">
                                
                        <div className="w-full max-w-[89px] h-[89px] border-gray-800 border-3 rounded-full flex justify-center items-center">
                            <img className="w-full max-w-[74px] h-[74px] rounded-full " src={`/${item.img}`} alt=" picture" />
                        </div>

                        <span className="w-full max-w-[66px] h-[16px] text-white text-xs text-center mt-0.5 text-ellipsis overflow-hidden whitespace-nowrap">{item.username}</span>

                    </div>

                </li>
                ))}     
            </div>

             {/* Right Arrow */}
                <button className='absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-[45px] h-[57px] mx-2 pb-3 bg-transparent z-10' onClick={handleScrollStoriesRight}>
                    <div className='w-full max-w-[45px] h-[45px] flex justify-center items-center'>
                        <img className='w-full max-w-[20px] h-[20px] bg-white rounded-full' src="/right.png" alt="" />
                    </div>        
                </button>

            </div>
            
            
{/* ------------------------------------------------------POST ---------------------------------  */}
                

            
            {/* username & photos - divided into 3 segments */}  
            <div className=" flex flex-col justify-center items-center max-w-[630px] w-full bg-black text-white ">

                {/* outer container */}
                {posts.map((item,index)=>(
                    <PostCard key={item.id || index} item={item} />

                ))}
                
                <div className="max-w-[470px] h-[17px] mb-5 pb-4 bg-amber-200"><hr /></div>

            </div>
        </div>

    </>
    )
}

export default Middle;

