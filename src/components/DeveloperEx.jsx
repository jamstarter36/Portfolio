import { IoIosLock } from "react-icons/io";

export const DeveloperEx = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 px-4 text-center">

      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#E7F3FF] text-gray-400 text-2xl">
        <IoIosLock />
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-700">Not yet unlocked</p>
        <p className="text-xs text-gray-400 mt-1 max-w-[200px] leading-relaxed">
          I'm a career shifter — developer experience is on the way.
        </p>
      </div>

    </div>
  );
};