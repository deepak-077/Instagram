"use client"

import { useEffect,useState, ChangeEvent, useRef } from 'react';
import axios from 'axios';

const menu=[
    {
        img:"home.png",
        title:"Home"
    },
    {   //not in small
        img:"search.png",
        title:"Search"
    },
    {
        img:"compass.png",
        title:"Explore"
    },
    {
        img:"reels.png",
        title:"Reels"
    },
    {   
        img:"home.png",
        title:"Messages"
    },
    {   //not in small
        img:"heart.png",
        title:"Notifications"
    },
    {
        img:"add.png",
        title:"Create"
    },
    {
        img:"mkbhd.jpg",
        title:"Profile"
    },
    {   //not in small
        img:"menu.png",
        title:"More"
    },
]

function Sidebar(){
    const [isSmall,setIsSmall] = useState(false);
    const [expanded, setIsExpanded] = useState <string | null> (null);
    
    const [upload, setUpload] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [caption, setCaption] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);


    const fileInputRef = useRef<HTMLInputElement | null>(null);
    

    useEffect(()=>{
        const screenSize=()=>{
            setIsSmall(window.innerWidth<768);
        }

        screenSize();

        window.addEventListener('resize',screenSize);
        return ()=>window.removeEventListener('resize',screenSize);
    },[])

    useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
    }, [previewUrl]);


    function handleFileUpload() {
    setError(null);
    fileInputRef.current?.click();
  }

  
  // Runs when the user picks a file
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSizeBytes = 10 * 1024 * 1024; // 10 MB
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }
    if (file.size > maxSizeBytes) {
      setError("Image must be 10 MB or smaller.");
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setError(null);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  
  async function handlePublishPost() {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("caption", caption);

      // API route 
      const res = await axios.post("http://localhost:3001/upload", formData);

      if (res.status!==(201)) {
        throw new Error("Failed to upload image.");
      }

      if(res.status===201){
        console.log("img upload successful");
      }

      // Resetting modal state 
      setSelectedFile(null);
      setPreviewUrl(null);
      setCaption("");
      setUpload(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }
    

    const visibleMenu=isSmall ? menu.filter(
        (item) =>
            item.title!=='Search' &&
            item.title!=='Notifications'&&
            item.title!=='More'
        
    ):menu

    return(
        <>
        {/* sidebar */}
            <div className={`w-screen  md:max-w-[72px] bg-black flex flex-row md:flex-col items-center border-r-1 border-[#262626] transition-all duration-300 ease-in-out ${expanded==='Search' || expanded==='Notifications'?'xl:max-w-[72px]':'xl:max-w-[240px]'}`}>

                <div className="flex justify-center w-full max-w-[48px] h-[96px] xl:max-w-[220px] xl:h-[92px] hidden md:block">
                    <div className="flex justify-center w-full  mt-3 xl:mt-0 xl:pt-[25px]  pb-[23px] xl:pb-[16px] max-w-[48px] h-[92px] xl:max-w-[220px] xl:h-[73px] xl:mb-[19px] xl:px-[12px]">
                        <div className="w-full max-w-[196px] h-[37px]">
                            <img className="rounded-full w-full max-w-[103px] h-[29px]" src="Instagram_white.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* menu options*/}
            
                <div className={`flex flex-row md:flex-col justify-around md:justify-normal  w-full md:max-w-[48px] xl:max-w-[220px] h-[52px]`}>
                    {visibleMenu.map((item,index) =>(
                        
                        <div key={index} 
                        onClick={()=>{
                            if(item.title ==='Search'  || item.title==='Notifications'){
                                setIsExpanded((prev)=> prev===item.title ? null:item.title) 
                            }

                            if(item.title==='Create'){
                                setUpload(prev=>!prev);
                            }
                        }}
                        
                        className="flex justify-center md:justify-start w-full max-w-[48px] h-[52px] xl:max-w-[220px] xl:h-[48px] md:my-0.5 p-3 cursor-pointer">

                            <img className="w-full max-w-[24px] h-[24px]"  src={`/${item.img}`} alt="" />
                            <div  className={`flex items-center w-full max-w-[62px] h-[24px] text-white 
                                ${expanded ==='Search' || expanded ==='Notifications' ? 'hidden xl:hidden' :'hidden xl:flex'}`}> 

                                <span className="pl-4">{item.title}</span>
                            </div>
    
                        </div>
                    ))}
                    
                    {/* Add post */}
                        {/* <div className= "flex justify-center md:justify-start w-full max-w-[48px] h-[52px] xl:max-w-[220px] xl:h-[48px] md:my-0.5 p-3 cursor-pointer" onClick={()=>setUpload((prev)=>!prev)}>
                            
                            <div  className={`flex items-center w-full max-w-[62px] h-[24px] text-white`}> 
                                <span className="pl-4">Post</span>
                            </div>

                            <img className="w-full max-w-[24px] h-[24px]"  src="" alt="" />
                            
                        </div> */}

                        {/* dialog for file upload */}
                        {/* <div className={`w-full max-w-[800px] bg-amber-400 ${upload ? "flex":"hidden"}`}>
                            <div className='w-full max-w-[623px] h-[42px]'>
                                <div className='w-full max-w-[623px] h-[24px] cursor-pointer'>Create New Post</div>

                            </div>

                            <div className='flex flex-col h-auto text-sm'>
                                <img className='w-full max-w-[96px] h-[77px]' src="" alt="image and reels icon" />
                                <h3 className='h-[15px] text-sm font-semibold'>Drag Photos and Video Here</h3>

                                <div className='w-full max-w-[192px] h-[40px] p-1'>
                                    <button className='w-full max-w-[182px] h-[32px] py-[7px] px-4 text-sm rounded-full bg-lime-300' onClick={handleFileUpload}>Select From Computer</button>
                                </div>

                            </div>

                        </div> */}


                    {/* Expandable panel for Search or Notifications */}
                    
                    <div className= {`transform transition-transform duration-300 ease-in-out fixed top-0 left-[72px] h-full w-full max-w-[397px] text-white shadow-lg z-50
                                    ${expanded? 'translate-x-0 bg-black':'-translate-x-full bg-transparent'} md:left-[72px]` }>  
                                    {/* md:left-[72px] was added in the above line */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">{expanded}</h2>
                        </div>

                    {/* Dynamic content of Search and Notification */}
                    {expanded === 'Search' && <p>Search panel content goes here...</p>}
                    {expanded === 'Notifications' && <p>Notifications content goes here...</p>}
                    </div>
                    

                    
                </div>
                
            </div>

            <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Centered upload modal */}
      {upload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 text-white">
          <div className="w-full max-w-lg rounded-xl border border-[#262626] bg-[#121212] p-4">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3">
              <h2 className="text-base font-semibold">Create New Post</h2>
              <button
                type="button"
                onClick={() => setUpload(false)}
                className="text-sm text-neutral-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Selected preview"
                  className="max-h-80 w-full rounded-lg object-contain"
                />
              ) : (
                <p className="text-sm text-neutral-400">
                  Choose a photo from your device to preview it.
                </p>
              )}

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="button"
                onClick={handleFileUpload}
                className="rounded-full bg-lime-300 px-4 py-2 text-sm font-medium text-black"
              >
                Select From Computer
              </button>

              {selectedFile && (
                <>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    className="w-full rounded-lg border border-[#262626] bg-black px-3 py-2 text-sm text-white"
                  />
                  <button
                    type="button"
                    disabled={isUploading}
                    onClick={handlePublishPost}
                    className="w-full rounded-lg bg-blue-500 py-2 text-sm font-semibold disabled:opacity-50"
                  >
                    {isUploading ? "Uploading..." : "Share Post"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
        </>
    )

}

export default Sidebar;

