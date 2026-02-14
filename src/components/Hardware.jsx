import CompAssemb from '../images/computerAssemble.jpg';
import LanCab from '../images/lancable.jpg';
import { FaWrench } from "react-icons/fa";

export const Hardware=()=>{
    return(
        <div className="grid grid-row p-2 overflow-auto md:overflow-visible">   
                <div className="h-full">
                    <span className="fontfamily font-bold">Computer Hardware Skills</span>
                    <span className="p-1 text-[20px]"><FaWrench /></span>
                <div className="flex gap-5">
                    <div className="flex-shrink max-w-100 max-h-90 fontfamily bg-black rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><p>Assemble / Disassemble / Installation & Maintenance</p><img src={CompAssemb}/></div>
                    <div className="flex-shrink max-w-100 max-h-90 fontfamily bg-black rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">LAN Cable Installation & Maintenance<img src={LanCab}/></div>
                </div> 
                <div className="h-3"></div> 
                <div className="border border-black/20"></div>
            </div>  
        </div>
    );
}