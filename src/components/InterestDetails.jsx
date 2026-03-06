import { IoMusicalNotesOutline, IoTvSharp, IoGameController } from "react-icons/io5";
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

const sections = [
  {
    icon: <IoTvSharp />,
    label: "TV Shows",
    items: [
      { title: "Witcher",          img: Witcher },
      { title: "Rings of Power",   img: RingOp },
      { title: "Game of Thrones",  img: GameOt },
    ],
  },
  {
    icon: <FaFilm />,
    label: "Movies",
    items: [
      { title: "Lord of the Rings", img: LotR },
      { title: "Pearl Harbor",      img: PearlH },
      { title: "Titanic",           img: Titanic },
    ],
  },
  {
    icon: <IoGameController />,
    label: "Video Games",
    items: [
      { title: "FF7 Remake",             img: Ffrmk },
      { title: "AC: Odyssey",            img: AcOdy },
      { title: "Witcher 3: Wild Hunt",   img: WitcherWh },
      { title: "Wuthering Waves",        img: WutheringW },
    ],
  },
];

const MediaCard = ({ title, img }) => (
  <div className="flex-shrink-0 w-36 rounded-xl overflow-hidden shadow-sm group cursor-pointer">
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Title overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <p className="text-white text-xs font-medium leading-tight">{title}</p>
      </div>
    </div>
  </div>
);

export const InterestDetails = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Music */}
      <div className="flex items-start gap-3 pb-4 border-b border-[#1877F2]/30">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm mt-0.5">
          <IoMusicalNotesOutline />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Music</p>
          <p className="text-sm text-gray-700 mt-0.5">90's Love and Rock Music</p>
        </div>
      </div>

      {/* TV / Movies / Games */}
      {sections.map(({ icon, label, items }) => (
        <div key={label} className="pb-4 border-b border-[#1877F2]/30 last:border-0 last:pb-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
              {icon}
            </div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {items.map((item) => (
              <MediaCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};