import { FaLocationDot } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMale, IoHeart } from "react-icons/io5";

const details = [
  { icon: <FaLocationDot />, label: "Location", value: "Cadahuan Heights, Talamban Cebu City, Cebu 6000" },
  { icon: <FaLocationDot />, label: "Hometown", value: "502 Valle Street, Mejia Subd. Ormoc City, Leyte 6541" },
  { icon: <FaBirthdayCake />, label: "Birthday", value: "December 4, 1989" },
  { icon: <IoHeart />,        label: "Status",   value: "Single" },
  { icon: <IoMale />,         label: "Gender",   value: "Male" },
];

export const PersonalDetail = () => {
  return (
    <div className="flex flex-col gap-3 p-2">
      {details.map(({ icon, label, value }) => (
        <div key={label} className="flex items-start gap-3">
          {/* Icon badge */}
          <div className="mt-0.5 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
            {icon}
          </div>
          {/* Text */}
          <div className="flex-1 pb-3 border-b border-gray-200">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
            <p className="text-sm text-gray-700 mt-0.5">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};