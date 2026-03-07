import { useState } from "react";
import { createPortal } from "react-dom";
import FirstProject from '../images/projectImages/firstproject.png';
import EmployeeMgt from '../images/projectImages/employeemgt.png';
import DoordashReplica from '../images/projectImages/doordashreplica.png';
import JamstarterPC from '../images/projectImages/jamstarterpc.png';

import HrisVideo1 from '../recordings/1.mp4';
import HrisVideo2 from '../recordings/2.mp4';
import HrisVideo3 from '../recordings/3.mp4';
import HrisVideo4 from '../recordings/4.mp4';
import HrisVideo5 from '../recordings/5.mp4';
import HrisVideo6 from '../recordings/1m.mp4';
import HrisVideo7 from '../recordings/2m.mp4';
import HrisVideo8 from '../recordings/3m.mp4';
import HrisVideo9 from '../recordings/4m.mp4';
import HrisVideo10 from '../recordings/5m.mp4';
import HrisVideo11 from '../recordings/1a.mp4';

const projects = [
  {
    img: FirstProject,
    title: "Car Rental",
    stack: ["HTML", "CSS"],
    href: "https://car-rental-lyart-five.vercel.app",
    status: null,
    videos: null,
  },
  {
    img: DoordashReplica,
    title: "Doordash Front Page",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
    href: "https://jams-doordashreplicate.vercel.app/",
    status: null,
    videos: null,
  },
  {
    img: JamstarterPC,
    title: "PC Shop — Ecommerce",
    stack: ["React", "Tailwind", "JavaScript"],
    href: "https://jamstarterpc.vercel.app",
    status: null,
    videos: null,
  },
  {
    img: EmployeeMgt,
    title: "HR Information System",
    stack: ["React", "Tailwind", "JavaScript"],
    href: null,
    status: "ongoing",
    videos: [
      { label: "Demo 1", src: HrisVideo1 },
      { label: "Demo 2", src: HrisVideo2 },
      { label: "Demo 3", src: HrisVideo3 },
      { label: "Demo 4", src: HrisVideo4 },
      { label: "Demo 5", src: HrisVideo5 },
      { label: "Demo 6", src: HrisVideo6 },
      { label: "Demo 7", src: HrisVideo7 },
      { label: "Demo 8", src: HrisVideo8 },
      { label: "Demo 9", src: HrisVideo9 },
      { label: "Demo 10", src: HrisVideo10 },
      { label: "Demo 11", src: HrisVideo11 },
    ],
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(0);

  const openModal = (project) => {
    if (project.videos) {
      setActiveProject(project);
      setActiveVideo(0);
    }
  };

  const closeModal = () => {
    setActiveProject(null);
    setActiveVideo(0);
  };

  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Projects</p>
      <div className="border-t border-gray-200" />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projects.map((project) => {
          const { img, title, stack, href, status, videos } = project;

          const Card = (
            <div
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1877F2] hover:shadow-md transition-all duration-200 bg-white cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {status === "ongoing" && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#E7F3FF] text-[#1877F2] text-[10px] font-semibold">
                    In Progress
                  </span>
                )}
                {/* Play overlay */}
                {videos && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-[#1877F2] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-800 leading-tight">{title}</p>
                <div className="flex flex-wrap gap-1">
                  {stack.map((tech) => (
                    <span key={tech} className="px-1.5 py-0.5 rounded-md bg-[#E7F3FF] text-gray-500 text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return href ? (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              {Card}
            </a>
          ) : (
            <div key={title}>{Card}</div>
          );
        })}
      </div>

      {/* Video Modal — rendered via portal to escape parent overflow */}
      {activeProject && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl"
            style={{ maxWidth: "768px", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <div>
                <p className="text-sm font-bold text-gray-800">{activeProject.title}</p>
                <p className="text-[11px] text-gray-400">{activeProject.videos[activeVideo].label}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 flex items-center justify-center text-gray-500 text-lg font-bold transition-colors duration-200"
              >
                ✕
              </button>
            </div>

            {/* Video tabs — only show if more than 1 video */}
            {activeProject.videos.length > 1 && (
              <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }} className="px-5 pt-3 pb-1">
                <div style={{ display: "flex", gap: "8px", width: "max-content" }}>
                  {activeProject.videos.map((video, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVideo(idx)}
                      style={{ flexShrink: 0 }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        activeVideo === idx
                          ? "bg-[#1877F2] text-white border-[#1877F2]"
                          : "bg-white text-gray-400 border-gray-200 hover:border-[#1877F2] hover:text-[#1877F2]"
                      }`}
                    >
                      {video.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5">
              <div className="rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
                <video
                  key={activeVideo}
                  src={activeProject.videos[activeVideo].src}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </div>
  );
};













// import HrisVideo2 from '../recordings/2.mp4';
// import HrisVideo3 from '../recordings/3.mp4';
// import HrisVideo4 from '../recordings/4.mp4';
// import HrisVideo5 from '../recordings/5.mp4';
// import HrisVideo6 from '../recordings/1m.mp4';
// import HrisVideo7 from '../recordings/2m.mp4';
// import HrisVideo8 from '../recordings/3m.mp4';
// import HrisVideo9 from '../recordings/4m.mp4';
// import HrisVideo10 from '../recordings/5m.mp4';
// import HrisVideo11 from '../recordings/1a.mp4';






// { label: "Demo 2", src: HrisVideo2 },
//       { label: "Demo 3", src: HrisVideo3 },
//       { label: "Demo 4", src: HrisVideo4 },
//       { label: "Demo 5", src: HrisVideo5 },
//       { label: "Demo 6", src: HrisVideo6 },
//       { label: "Demo 7", src: HrisVideo7 },
//       { label: "Demo 8", src: HrisVideo8 },
//       { label: "Demo 9", src: HrisVideo9 },
//       { label: "Demo 10", src: HrisVideo10 },
//       { label: "Demo 11", src: HrisVideo11 },