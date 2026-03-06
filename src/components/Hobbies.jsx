import { IoAccessibilityOutline } from "react-icons/io5";

const hobbies = [
  "Playing guitar",
  "History deep-dives",
  "Web development",
  "PC building",
  "Modding games",
  "UX/UI design",
  "Video gaming",
  "Basketball",
  "Bonsai",
  "Cooking",
  "Traveling",
];

export const Hobbies = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
          <IoAccessibilityOutline />
        </div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Hobbies</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="px-3 py-1.5 rounded-full bg-[#E7F3FF] text-gray-600 text-xs font-medium hover:bg-[#E7F3FF] transition-colors duration-200 cursor-default"
          >
            {hobby}
          </span>
        ))}
      </div>

      <div className="border-t border-[#1877F2]/30" />
    </div>
  );
};