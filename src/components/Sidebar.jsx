import TextCarousel from "./TextCarousel";
import { ActiveItems } from "./ActiveItems";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";

const menuMap = {
  info: {
    title: "About Me",
    items: [
      { label: "Intro",    value: "intro" },
      { label: "Details",  value: "pdetails" },
      { label: "Interest", value: "interests" },
      { label: "Hobby",    value: "hobbies" },
      { label: "Study",    value: "education" },
    ],
  },
  skills: {
    title: "Skills",
    items: [
      { label: "Hardware",    value: "chardware" },
      { label: "Programming", value: "csoftware" },
    ],
  },
  exp: {
    title: "Experience",
    items: [
      { label: "Developer", value: "dev" },
      { label: "BPO",       value: "bpo" },
      { label: "Non-BPO",   value: "nonbpo" },
    ],
  },
};

const socials = [
  { icon: <BsFacebook />, href: "https://www.facebook.com/jams.ian/",                     label: "Facebook" },
  { icon: <BsGithub />,   href: "https://github.com/jamstarter36",                        label: "GitHub" },
  { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/jams-ian-maluya-363bbb3b0/", label: "LinkedIn" },
];

export const Sidebar = ({ sideOption, showSideItem, setShowSideItem }) => {
  const section = menuMap[sideOption];

  return (
    <div className="flex flex-col basis-80 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm h-full p-4 gap-3">

      {/* Default / Projects */}
      {(!sideOption || sideOption === "projects") && (
        <div className="flex items-center justify-center h-full">
          <TextCarousel />
        </div>
      )}

      {/* Menu sections: info / skills / exp */}
      {section && (
        <>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1">
            {section.title}
          </p>
          <div className="border-t border-gray-200" />
          <div className="flex flex-col gap-0.5 w-full">
            {section.items.map(({ label, value }) => (
              <ActiveItems
                key={value}
                label={label}
                value={value}
                showSideItem={showSideItem}
                setShowSideItem={setShowSideItem}
              />
            ))}
          </div>
        </>
      )}

      {/* Contact */}
      {sideOption === "contact" && (
        <>
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1">
            Contact
          </p>
          <div className="border-t border-gray-200" />

          {/* Phone */}
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E7F3FF] text-gray-500 text-sm flex-shrink-0">
              <MdOutlinePhone />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Phone</p>
              <p className="text-sm text-gray-700 font-medium">09496574640</p>
            </div>
          </div>

          <div className="border-t border-gray-200" />

          {/* Socials */}
          <div className="px-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">Socials</p>
            <div className="flex flex-col gap-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:text-[#050505] hover:border-[#1877F2] hover:bg-[#F0F2F5] transition-all duration-200 group"
                >
                  <span className="text-base group-hover:scale-110 transition-transform duration-200">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};