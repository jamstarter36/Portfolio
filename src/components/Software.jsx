import { TbDeviceImacCode } from "react-icons/tb";
import Html5 from '../images/html5.png';
import CssLogo from '../images/csslogo.png';
import JavaSlogo from '../images/javascriptlogo.png';
import BootStrap from '../images/bootstraplogo.png';
import ReactLogo from '../images/reactlogo.png';
import Tailwind from '../images/tailwind.png'
export const Software=()=>{
    return(
        <div>
            <div className="grid grid-row p-2 overflow-auto md:overflow-visible">   
                <div className="h-full">
                    <span className="fontfamily font-bold">Tech Stack</span>
                    <span className="p-1 text-[20px]"><TbDeviceImacCode /></span>
                    <div className="flex gap-5">
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={Html5} /></div>
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={CssLogo} /></div>
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={JavaSlogo} /></div>
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={BootStrap} /></div>
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={Tailwind} /></div>
                    <div className="flex flex-shrink justify-center items-center bg-gray-50 max-w-50 max-h-50 fontfamily text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"><img src={ReactLogo} /></div>
                    </div> 
                    <div className="h-3"></div> 
                    <div className="border border-black/20"></div>
                </div>  
            </div>
        </div>
    );
};