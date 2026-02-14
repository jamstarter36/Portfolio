import { useState, useEffect, useRef } from "react";
import logoImage from "../images/JamsLogo.png";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
export const Navigation = ({ setSideOption, resetHome }) => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (name) => {
    setActive(name);
    setMenuOpen(false);

    if (name === "home") {
      resetHome();
    } else {
      setSideOption(name);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);}, []);
      const navIconClass=(name)=> 
      `cursor-pointer p-2 rounded-full transition duration-300 hover:scale-110 hover:bg-gray-200 ${active === name ? "text-blue-500 bg-gray-200" : "text-gray-700"}`;
    return (
    <>
      <div className="z-5 backdrop-blur-md p-2">
        <div className="relative flex items-center justify-between bg-white/70 rounded-xl px-4 py-3 shadow-md">
          <img src={logoImage} className="w-32 md:w-40" />
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 fontfamily gap-2">
            <div className={navIconClass("home")} onClick={() => handleClick("home")}>
              <p className="text-sm lg:text-lg">Home</p>
            </div>
            <div className={navIconClass("info")} onClick={() => handleClick("info")}>
              <p className="text-sm lg:text-lg">About me</p>
            </div>

            <div className={navIconClass("skills")} onClick={() => handleClick("skills")}>
              <p className="text-sm lg:text-lg">Skills</p>
            </div>

            <div className={navIconClass("exp")} onClick={() => handleClick("exp")}>
              <p className="text-sm lg:text-lg">Experience</p>
            </div>

            <div className={navIconClass("contact")} onClick={() => handleClick("contact")}>
              <p className="text-sm lg:text-lg">Contact</p>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => handleClick("projects")}
              className={`fontfamily px-6 py-2 rounded-md border transition duration-300 hover:bg-black hover:text-white ${active === "projects" ? "text-blue-500 border-blue-500": "border-gray-400"}`}>
              Projects
            </button>
          </div>    
          <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
              <span
                className={`h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
              <span
                className={`h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
              <span className={`h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}/>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden fixed top-[50px] left-0 w-full backdrop-blur-lg bg-white/80 transition-all duration-500 ease-in-out overflow-hidden z-10 ${menuOpen ? "max-h-[500px] py-6" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-1 text-md">
          <div onClick={() => handleClick("home")} className="hover:text-blue-500 transition hover:cursor-pointer">Home</div>
          <div onClick={() => handleClick("info")} className="hover:text-blue-500 transition hover:cursor-pointer">About</div>
          <div onClick={() => handleClick("skills")} className="hover:text-blue-500 transition hover:cursor-pointer">Skills</div>
          <div onClick={() => handleClick("exp")} className="hover:text-blue-500 transition hover:cursor-pointer">Experience</div>
          <div onClick={() => handleClick("contact")} className="hover:text-blue-500 transition hover:cursor-pointer">Contact</div>
          <button
            onClick={() => handleClick("projects")} className="border px-6 py-2 rounded-md mt-2 hover:bg-black hover:text-white transition hover:cursor-pointer">
            Projects
          </button>
        </div>
      </div>
    </>
  );
};
