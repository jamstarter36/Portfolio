import { useState, useEffect, useRef } from "react";
import logoImage from "../images/JamsLogo.png";

export const Navigation = ({ setSideOption, resetHome }) => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (name) => {
    setActive(name);
    setMenuOpen(false);
    if (name === "home") resetHome();
    else setSideOption(name);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const links = [
    { key: "home",    label: "Home" },
    { key: "info",    label: "About me" },
    { key: "skills",  label: "Skills" },
    { key: "exp",     label: "Experience" },
    { key: "contact", label: "Contact" },
  ];

  const navLinkClass = (name) =>
    `cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
     ${active === name
       ? "bg-[#1877F2] text-white"
       : "text-gray-500 hover:text-[#050505] hover:bg-[#E7F3FF]"}`;

  return (
    <>
      <div className={`sticky top-0 z-50 px-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        <div className={`flex items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl px-5 py-3 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"} border border-gray-200`}>

          {/* Logo */}
          <img src={logoImage} className="w-28 md:w-36" alt="Logo" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ key, label }) => (
              <div key={key} className={navLinkClass(key)} onClick={() => handleClick(key)}>
                {label}
              </div>
            ))}
          </div>

          {/* Projects CTA */}
          <button
            onClick={() => handleClick("projects")}
            className={`hidden md:block px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${active === "projects"
                ? "bg-[#1877F2] text-white border-[#1877F2]"
                : "border-gray-300 text-gray-700 hover:border-[#1877F2] hover:text-[#050505]"}`}>
            Projects
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-between w-5 h-4 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-72 mt-2" : "max-h-0"}`}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md px-4 py-3 flex flex-col gap-1">
            {links.map(({ key, label }) => (
              <div
                key={key}
                onClick={() => handleClick(key)}
                className={`px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-200
                  ${active === key ? "bg-[#1877F2] text-white" : "text-gray-600 hover:bg-[#E7F3FF] hover:text-[#050505]"}`}
              >
                {label}
              </div>
            ))}
            <button
              onClick={() => handleClick("projects")}
              className={`mt-1 px-3 py-2 rounded-xl text-sm font-medium text-left border transition-all duration-200
                ${active === "projects" ? "bg-[#1877F2] text-white border-[#1877F2]" : "border-gray-200 text-gray-600 hover:border-[#1877F2] hover:text-[#050505]"}`}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};