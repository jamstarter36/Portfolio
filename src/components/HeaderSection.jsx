import heroImage from '../images/Hero.jpg'
export const HeaderSection=()=>{
    return(
        <div className='p-2 rounded-xl'>
            <div className='relative h-[60vh] sm:h-[55vh] md:h-[50vh] bg-no-repeat w-full bg-cover bg-center rounded-xl shadow-md' style={{backgroundImage: `url(${heroImage})`}}>
                <div className="absolute inset-0 bg-white/50 rounded-xl"></div>   
                <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-4">
                <span className=''></span>
                <span className='fontfamily text-white font-bold tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl'>Hi, I'm Jams Ian</span>
                <span className='mt-4 border border-black text-black fontfamily font-bold rounded-md px-10 py-2 text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.5em]'>FRONTEND DEVELOPER</span>
                <span className=''></span>
                </div> 

            </div> 
        </div>
    );
};