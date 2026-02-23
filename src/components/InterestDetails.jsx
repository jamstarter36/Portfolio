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

export const InterestDetails = () => {
    return (
        <>
            {/* Music */}
            <div className="grid grid-row p-2">
                <div>
                    <div className="flex">
                        <span className="fontfamily">
                            <p className="font-bold flex items-center gap-1">Music <IoMusicalNotesOutline /></p>
                            90's Love and Rock Music
                        </span>
                    </div>
                    <div className="border border-gray-300 mt-2"></div>
                </div>

                {/* TV Shows */}
                <span className="fontfamily pt-1">
                    <p className="font-bold flex items-center gap-1">TV shows <IoTvSharp /></p>
                </span>
                <div className="flex gap-4 overflow-x-auto pb-3 pt-3 scrollbar-hide">
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Witcher<img src={Witcher} className="w-full h-56 object-cover rounded-lg" alt="Witcher"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Rings of Power<img src={RingOp} className="w-full h-56 object-cover rounded-lg" alt="Rings of Power"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Game of Thrones<img src={GameOt} className="w-full h-56 object-cover rounded-lg" alt="Game of Thrones"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>
            </div>

            {/* Movies */}
            <div className="grid grid-row p-2">
                <span className="fontfamily pt-1">
                    <p className="font-bold flex items-center gap-1">Movies <FaFilm /></p>
                </span>
                <div className="flex gap-4 overflow-x-auto pb-3 pt-3 scrollbar-hide">
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        The Lord of the Rings<img src={LotR} className="w-full h-56 object-cover rounded-lg" alt="The Lord of the Rings"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Pearl Harbor<img src={PearlH} className="w-full h-56 object-cover rounded-lg" alt="Pearl Harbor"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Titanic<img src={Titanic} className="w-full h-56 object-cover rounded-lg" alt="Titanic"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>
            </div>

            {/* Video Games */}
            <div className="grid grid-row p-2">
                <span className="fontfamily pt-1">
                    <p className="font-bold flex items-center gap-1">Video Games <IoGameController /></p>
                </span>
                <div className="flex gap-4 overflow-x-auto pb-3 pt-3 scrollbar-hide">
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Final Fantasy 7 Remake<img src={Ffrmk} className="w-full h-56 object-cover rounded-lg" alt="Final Fantasy 7 Remake"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Assassin's Creed: Odyssey<img src={AcOdy} className="w-full h-56 object-cover rounded-lg" alt="Assassin's Creed: Odyssey"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Witcher 3: Wild Hunt<img src={WitcherWh} className="w-full h-56 object-cover rounded-lg" alt="Witcher 3: Wild Hunt"/>
                    </div>
                    <div className="bg-black min-w-40 text-white p-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 flex-shrink-0">
                        Wuthering Waves<img src={WutheringW} className="w-full h-56 object-cover rounded-lg" alt="Wuthering Waves"/>
                    </div>
                </div>
                <div className="border border-gray-300"></div>
            </div>
        </>
    );
};