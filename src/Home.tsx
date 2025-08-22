import Sidebar from "./Sidebar";
import Middle from "./Stories_photos";
import Suggestion from "./Suggestion";
function Home(){
    return(
        //parent container
        <div className="flex flex-col-reverse md:flex-row bg-black ">
            <Sidebar/>

            {/* photos and suggestions container */}
            <div className="flex  max-w-[1226px] justify-center w-full min-h-screen bg-black pt-3.5 md:pt-0">
                <Middle/>
                
                <Suggestion/>

            </div>
        </div>
    )
}
export default Home;