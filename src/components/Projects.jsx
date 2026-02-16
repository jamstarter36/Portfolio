import FirstProject from '../images/projectImages/firstproject.png'
import EmployeeMgt from '../images/projectImages/employeemgt.png'
import DoordashReplica from '../images/projectImages/doordashreplica.png'
import JamstarterPC from '../images/projectImages/jamstarterpc.png'
export const Projects = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 triggerProjSection gap-5">
        <a href="https://car-rental-lyart-five.vercel.app" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col flex-shrink justify-center items-center max-w-50 max-h-100 fontfamily text-white p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 bg-black"><img src={FirstProject} /><p className='text-center text-white text-md'>Car Rental | HTML CSS Responsive</p></div>
        </a>
        <a href="https://jams-doordashreplicate.vercel.app/" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col flex-shrink justify-center items-center max-w-50 max-h-100 fontfamily text-white p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 bg-black"><img src={DoordashReplica} /><p className='text-center text-white text-md'>Replicated Doordash Font Page | HTML CSS Javascript Tailwind</p></div>
        </a>
        <a href="https://jamstarterpc.vercel.app" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col flex-shrink justify-center items-center max-w-50 max-h-100 fontfamily text-white p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 bg-black"><img src={JamstarterPC} /><p className='text-center text-white text-md'>PC Shop | HTML CSS Javascript Tailwind Reactjs</p><p className='italic text-red-600 text-xs'>Project is ongoing...</p></div>
        </a>
        <div className="flex flex-col flex-shrink justify-center items-center max-w-50 max-h-100 fontfamily text-white p-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 bg-black"><img src={EmployeeMgt} /><p className='text-center text-white text-md'>Employee Management | HTML CSS Tailwind Reactjs</p><p className='italic text-red-600 text-xs'>Project is ongoing...</p></div>
    </div>
  );
};