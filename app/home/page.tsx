import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import Middle from "../components/Stories_photos";
import Suggestion from "../components/Suggestion";


export default function Home(){
    return(
        //parent container
        <div className="flex flex-col-reverse md:flex-row bg-black ">
            <div className="w-screen xl:max-w-[240px] w-full md:max-w-[72px] ">
                <Sidebar/>

            </div>
            
            {/* photos and suggestions container */}
            <div className="flex  max-w-[1226px] justify-center w-full min-h-screen bg-black pt-3.5 md:pt-0">
                <Middle/>
                
                <Suggestion/>

            </div>

            {/* search bar only showing on small devices */}
            <Searchbar/>
        </div>
    )
}



