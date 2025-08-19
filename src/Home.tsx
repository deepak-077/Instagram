import Sidebar from "./Sidebar";
import Middle from "./Stories_photos";
import Suggestion from "./Suggestion";
function Home(){
    return(
        //parent container
        <div className="flex bg-black">
            <Sidebar/>

            {/* photos and suggestions container */}
            <div className="flex max-w-[1061px] w-full min-h-screen bg-black">
                <Middle/>
                
                <Suggestion/>

            </div>
        </div>
    )
}
export default Home;
