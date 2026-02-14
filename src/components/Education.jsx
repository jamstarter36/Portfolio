import { FaUserGraduate } from "react-icons/fa";
export const Education=()=>{
    return(
        <div className="grid grid-row basis-full p-2 gap-2">
            <div>
                <span className="fontfamily font-bold">Education</span><br />
                <span className="fontfamily text-[14px] text-black/60"><FaUserGraduate /></span>
                <span className="fontfamily text-[14px] text-black/60">Bachelor of Science in Information Technology — Western Leyte College of Ormoc City (S.Y. 2014-2018)</span>
                <div className="border border-black/20"></div>
            </div>
        </div>
    );
};