import { MdOutlineWork } from "react-icons/md";

const experiences = [
  { company: "TvStartup / ApexTech",               role: "Technical Support Specialist",                       period: "02/2024 – 08/2024" },
  { company: "ePerformax",                          role: "Customer Service Representative",                   period: "10/2023 – 01/2024" },
  { company: "Alorica",                             role: "Content Moderator, Customer Service Representative", period: "07/2020 – 07/2023" },
  { company: "Affiliated Computer Services (ACS)",  role: "Data Entry Processor",                              period: "06/2010 – 12/2010" },
];

export const BpoEx = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm">
          <MdOutlineWork />
        </div>
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">BPO Experience</p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        {experiences.map(({ company, role, period }, idx) => (
          <div key={company} className="flex items-start gap-3">

            {/* Dot + line */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-[#1877F2] mt-1.5 flex-shrink-0" />
              {idx < experiences.length - 1 && (
                <div className="w-px bg-[#E7F3FF] my-1" style={{ minHeight: 32 }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-4 flex-1">
              <p className="text-sm font-semibold text-gray-800">{company}</p>
              <p className="text-xs text-gray-500 mt-0.5">{role}</p>
              <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-[#E7F3FF] text-gray-400 text-[10px] font-medium tracking-wide">
                {period}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200" />
    </div>
  );
};