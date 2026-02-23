import heroImage from '../images/Hero.jpg'

export const HeaderSection = () => {
    return (
        <div className='p-2 rounded-xl'>
            <div
                className='relative h-[35vh] sm:h-[40vh] md:h-[50vh] bg-no-repeat w-full bg-cover bg-center rounded-xl shadow-md'
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-white/40 rounded-xl"></div>

                <div className="relative z-1 h-full flex flex-col items-center justify-center text-center px-3">
                    <span className='fontfamily text-white font-bold tracking-tight text-xl sm:text-3xl md:text-5xl lg:text-7xl drop-shadow-md'>
                        Hi, I'm Jams Ian
                    </span>
                    <span className='mt-2 border border-black text-black fontfamily font-bold rounded-md px-4 py-1 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.4em]'>
                        FRONTEND DEVELOPER
                    </span>
                </div>
            </div>
        </div>
    );
};