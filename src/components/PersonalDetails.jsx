import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMale } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
export const PersonalDetail=()=>{
    return(
        <div className="grid grid-row basis-full p-2 gap-2">
            <div>
                <span className="fontfamily font-bold">Location</span><br />
                <span className="fontfamily text-[14px] text-black/60"><FaLocationDot /></span>
                <span className="fontfamily text-[14px] text-black/60">Cadahuan Heights, Talamban Cebu City, Cebu, 6000</span>
                <div className="border border-black/20"></div>
            </div>
            <div>
                <span className="fontfamily font-bold">Hometown</span><br />
                <span className="fontfamily text-[14px] text-black/60"><FaLocationDot /></span>
                <span className="fontfamily text-[14px] text-black/60">502 Valle Street, Mejia Subd. Ormoc City, Leyte 6541</span>
                <div className="border border-black/20"></div>
            </div>
            <div>
                <span className="fontfamily font-bold">Birthday</span><br />
                <span className="fontfamily text-[14px] text-black/60"><FaBirthdayCake /></span>
                <span className="fontfamily text-[14px] text-black/60">December 4, 1989</span>
                <div className="border border-black/20"></div>
            </div>
            <div>
                <span className="fontfamily font-bold">Status</span><br />
                <span className="fontfamily text-[14px] text-black/60"><IoHeart /></span>
                <span className="fontfamily text-[14px] text-black/60">Single</span>
                <div className="border border-black/20"></div>
            </div>
            <div>
                <span className="fontfamily font-bold">Gender</span><br />
                <span className="fontfamily text-[14px] text-black/60"><IoMale /></span>
                <span className="fontfamily text-[14px] text-black/60">Male</span>
                <div className="border border-black/20"></div>
            </div>
        </div>
    );
};