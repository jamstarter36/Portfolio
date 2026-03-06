import { TbDeviceImacCode } from "react-icons/tb";
import Html5 from '../images/html5.png';
import CssLogo from '../images/csslogo.png';
import JavaSlogo from '../images/javascriptlogo.png';
import BootStrap from '../images/bootstraplogo.png';
import ReactLogo from '../images/reactlogo.png';
import Tailwind from '../images/tailwind.png';

const stack = [
  { img: Html5,     label: "HTML5" },
  { img: CssLogo,   label: "CSS3" },
  { img: JavaSlogo, label: "JavaScript" },
  { img: BootStrap, label: "Bootstrap" },
  { img: Tailwind,  label: "Tailwind" },
  { img: ReactLogo, label: "React" },
];

export const Software = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
          <TbDeviceImacCode />
        </div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Tech Stack</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3 lg:gap-5">
        {stack.map(({ img, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-3 lg:p-8 rounded-2xl bg-[#F0F2F5] border border-gray-200 hover:border-[#1877F2] hover:shadow-sm transition-all duration-200 cursor-default group"
          >
            <img
              src={img}
              alt={label}
              className="w-10 h-10 lg:w-20 lg:h-20 object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <p className="text-[11px] lg:text-sm font-medium text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200" />
    </div>
  );
};