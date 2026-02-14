import { IoAccessibilityOutline } from "react-icons/io5";

export const Hobbies=()=>{
    return(
        <div className="grid grid-row-2 basis-full p-2">
            <div>
                <span className="fontfamily font-bold">Hobbies</span>
                <span className="fontfamily text-[20px] text-black/60"><IoAccessibilityOutline /></span>
            </div>
            <div className="grid grid-cols-3 fontfamily text-[15px] text-black/60">
                <span>Playing guitar</span>
                <span>History deep-dives</span>
                <span>Web development</span>
                <span>PC building</span>
                <span>Modding games</span>
                <span>UX/UI design</span>
                <span>Video gaming</span>
                <span>Basketball</span>
                <span>Bonsai</span>
                <span>Cooking</span>
                <span>Traveling</span>
            </div>
            <div className="h-1"></div>
        <div className="border border-black/20"></div>
        </div>
    );
};
