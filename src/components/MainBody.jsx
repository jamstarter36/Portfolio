import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { ContentBody } from "./ContentBody";
import { ProfileSection } from "./ProfileSection";
import { Navigation } from "./Navigation";
// import ContentBody from "./ContentBody";

export const MainBody=()=>{
    const [showSideItem, setShowSideItem] = useState(null);
    const [sideOption , setSideOption] = useState(null);
    return(
        <div>
            <div><Navigation setSideOption={(value) => {setSideOption(value); setShowSideItem(value);}}
            resetHome={() => {setSideOption(null); setShowSideItem(null);}}/>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row p-2 gap-5">
                <div className="w-full md:w-70 min-h-10 md:h-full">
                <Sidebar sideOption={sideOption} showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                </div>
                <ContentBody showSideItem={showSideItem} />
                <div className="w-full md:w-70 min-h-10 md:h-full">
                <ProfileSection />
                </div>
            </div>
        </div> 
    );
};


// import { useState } from "react";
// import { Sidebar } from "./Sidebar";
// import { ContentBody } from "./ContentBody";
// import { ProfileSection } from "./ProfileSection";
// import { Navigation } from "./Navigation";
// export const MainBody = () => {
//     const [showSideItem, setShowSideItem] = useState(null);
//     const [sideOption, setSideOption] = useState(null);
//     return (
//         <div className="min-h-screen flex flex-col">
//             <div>
//                 <Navigation
//                     setSideOption={(value) => {setSideOption(value); setShowSideItem(value);}}
//                     resetHome={() => {setSideOption(null); setShowSideItem(null);}}/>
//             </div> 
//             <div className="flex flex-col md:flex-row p-2 gap-5">
//                 <div className="md:w-1/4 w-full basis-70">
//                     <Sidebar sideOption={sideOption} showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
//                 </div> 
//                 <div className="w-full basis-full overflow-auto">
//                     <ContentBody showSideItem={showSideItem} />
//                 </div>
//                 <div className="md:w-1/4 w-full basis-80">
//                     <ProfileSection />
//                 </div>
//             </div>
//         </div>
//     );
// };