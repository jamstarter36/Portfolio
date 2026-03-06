import { FaUserGraduate } from "react-icons/fa";

export const Education = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
          <FaUserGraduate />
        </div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Education</p>
      </div>

      {/* Entry */}
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-gray-400 mt-1.5" />
          <div className="w-px flex-1 bg-[#E7F3FF] mt-1" />
        </div>
        <div className="pb-4">
          <p className="text-sm font-semibold text-gray-800">Bachelor of Science in Information Technology</p>
          <p className="text-xs text-gray-500 mt-0.5">Western Leyte College of Ormoc City</p>
          <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#E7F3FF] text-gray-400 text-[10px] font-medium tracking-wide">
            S.Y. 2014 – 2018
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200" />
    </div>
  );
};