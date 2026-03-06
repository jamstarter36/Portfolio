import FirstProject from '../images/projectImages/firstproject.png';
import EmployeeMgt from '../images/projectImages/employeemgt.png';
import DoordashReplica from '../images/projectImages/doordashreplica.png';
import JamstarterPC from '../images/projectImages/jamstarterpc.png';

const projects = [
  {
    img: FirstProject,
    title: "Car Rental",
    stack: ["HTML", "CSS"],
    href: "https://car-rental-lyart-five.vercel.app",
    status: null,
  },
  {
    img: DoordashReplica,
    title: "Doordash Front Page",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind"],
    href: "https://jams-doordashreplicate.vercel.app/",
    status: null,
  },
  {
    img: JamstarterPC,
    title: "PC Shop — Ecommerce",
    stack: ["React", "Tailwind", "JavaScript"],
    href: "https://jamstarterpc.vercel.app",
    status: null,
  },
  {
    img: EmployeeMgt,
    title: "HR Information System",
    stack: ["React", "Tailwind", "JavaScript"],
    href: null,
    status: "ongoing",
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4 p-2">

      {/* Header */}
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Projects</p>
      <div className="border-t border-gray-200" />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {projects.map(({ img, title, stack, href, status }) => {
          const Card = (
            <div className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1877F2] hover:shadow-md transition-all duration-200 bg-white cursor-pointer">
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
            <a key={title} href={href} target="_blank" rel="noopener noreferrer">
              {Card}
            </a>
          ) : (
            <div key={title}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
};