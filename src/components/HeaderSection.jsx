import profileImage from '../images/profilePic.png';

export const HeaderSection = ({ onViewProjects, visible = true }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        visible ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 py-2">
        <div className="rounded-2xl bg-gradient-to-br from-[#E7F3FF] via-white to-[#1877F2]/10 border border-gray-200 shadow-sm px-8 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Left — Profile photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-200 shadow-sm">
              <img src={profileImage} alt="Jams Ian" className="w-full h-full object-cover scale-110" />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-[#E7F3FF]" />

          {/* Right — Text */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
              Frontend Developer
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#050505] tracking-tight leading-tight">
              Hi, I'm <span className="text-gray-500">Jams Ian</span>
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              I build fast, thoughtful interfaces with clean, maintainable code. Passionate about UX, design systems, and making things that feel great to use.
            </p>
            <button
              onClick={onViewProjects}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:bg-[#166FE5] transition-all duration-200 shadow-sm"
            >
              View Projects ↗
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};