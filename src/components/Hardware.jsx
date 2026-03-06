import CompAssemb from '../images/computerAssemble.jpg';
import LanCab from '../images/lancable.jpg';
import { FaWrench } from "react-icons/fa";

const skills = [
  { img: CompAssemb, title: "Assembly & Maintenance", desc: "Assemble / Disassemble / Installation & Maintenance" },
  { img: LanCab,     title: "LAN Cable",              desc: "LAN Cable Installation & Maintenance" },
];

export const Hardware = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
          <FaWrench />
        </div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Computer Hardware Skills</p>
      </div>

      {/* Cards */}
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {skills.map(({ img, title, desc }) => (
          <div
            key={title}
            className="flex-shrink-0 w-48 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-white text-xs font-semibold leading-tight">{title}</p>
                <p className="text-white/70 text-[10px] mt-0.5 leading-tight">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1877F2]/30" />
    </div>
  );
};