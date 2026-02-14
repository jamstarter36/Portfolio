import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoTvSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { FaFilm } from "react-icons/fa";
import Witcher from '../images/witcher.png';
import RingOp from '../images/rings.png';
import GameOt from '../images/got.png';
import LotR from '../images/lotr.png';
import PearlH from '../images/pearlharbor.png';
import Titanic from '../images/titanic.png';
import Ffrmk from '../images/ff7rmk.png';
import AcOdy from '../images/acodyssey.png';
import WitcherWh from '../images/witcherwh.png';
import WutheringW from '../images/wutheringW.png';
export const InterestDetails=()=>{
    return(
        <>
        <div className="grid grid-row p-2"> 
            <div className="">
                <div className="flex">
                    <span className="fontfamily"><p className="font-bold">Music<IoMusicalNotesOutline/> </p>90's Love and Rock Music</span>
                </div>
                <div className="border border-gray-300"></div>
            </div>
                <span className="fontfamily pt-1"><p className="font-bold">TV shows<IoTvSharp /></p></span>
                <div className="flex flex-shrink gap-5 pb-3 pt-3">
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Witcher<img src={Witcher} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Rings of Power<img src={RingOp} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Game of Thrones<img src={GameOt} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>          
        </div>
        <div className="grid grid-row p-2 overflow-auto md:overflow-visible"> 
                <span className="fontfamily pt-1"><p className="font-bold">Movies<FaFilm /></p></span>
                <div className="flex flex-shrink gap-5 pb-3 pt-3">
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        The Lord of the Rings<img src={LotR} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Pearl Harbor<img src={PearlH} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className=" bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Titanic<img src={Titanic} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>
        </div>
        <div className="grid grid-row p-2 overflow-auto md:overflow-visible"> 
                <span className="fontfamily pt-1]"><p className="font-bold">Video Games<IoGameController /></p></span>
                <div className="flex flex-shrink gap-5 pb-3 pt-3">
                    <div className="bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Final Fantasy 7 Remake<img src={Ffrmk} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Assassin's Creed: Odyssey<img src={AcOdy} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Witcher 3: Wild Hunt<img src={WitcherWh} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                    <div className="bg-black max-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        Wuthering Waves<img src={WutheringW} className="max-w-full max-h-65 object-cover rounded-lg"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>
        </div>
        </>
    );
};






{/* <div className="grid grid-row p-2">
            <div>
                <span className="fontfamily font-bold">Music</span> 
                <span><p className="text-[20px]"><IoMusicalNotesOutline /></p> 90's Love and Rock Music</span>
                <div className="border border-black/20"></div>        
            </div>
            <div className="h-full">
                <span className="fontfamily font-bold">TV shows</span>
                <span className="p-1 text-[20px]"><IoTvSharp /></span>
                <div className="block md:flex gap-5">
                    <div className="fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Witcher<img src={Witcher} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Rings of Power<img src={RingOp} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Game of Thrones<img src={GameOt} className="w-40 h-65 object-cover rounded-lg"/></div>
                </div>
                <div className="h-3"></div> 
                <div className="border border-black/20"></div>
            </div>
            <div>
                <span className="fontfamily font-bold">Movies</span>
                <span className="p-1 text-[20px]"><FaFilm /></span>
                <div className="block md:flex gap-5">
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">The Lord of the Rings<img src={LotR} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Pearl Harbor<img src={PearlH} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl text-white p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Titanic<img src={Titanic} className="w-40 h-65 object-cover rounded-lg"/></div>
                </div> 
                <div className="h-3"></div>
                <div className="border border-black/20"></div> 
            </div>
            <div>
                <span className="fontfamily font-bold">Games</span>
                <span className="p-1 text-[20px]"><IoGameController /></span> 
                <div className="block md:flex gap-5">
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Final Fantasy 7 <br/>Remake/Rebirth<img src={Ffrmk} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Assassin's Creed: <br/>Odyssey<img src={AcOdy} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Wither 3: Wild Hunt<img src={WitcherWh} className="w-40 h-65 object-cover rounded-lg"/></div>
                    <div className="flex flex-col fontfamily bg-white md:bg-black text-black md:text-white items-center md:items-start rounded-xl p-2 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105">Wuthering Waves<img src={WutheringW} className="w-40 h-65 object-cover rounded-lg"/></div>
                </div> 
                <div className="h-3"></div>
                <div className="border border-black/20"></div>
                <div className="h-2"></div>
            </div>
        </div> */}