import profileImage from '../images/profilePic.png'

export const ProfileSection=()=>{
    return(
        <div className="rounded-xl sidebgcolor h-full p-2 shadow-lg">
                <div className="w-full flex justify-center">
                    <div className="flex border border-black/20 border-solid bg-black w-30 h-30 lg:w-50 lg:h-50 rounded-full overflow-hidden shadow-md">
                        <img src={profileImage} className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-2'>
                    <div className='text-center text-sm lg:text-lg w-40 lg:w-75 fontfamily bg-gray-100 rounded-lg p-1 shadow-md'>“Pixels, performance, perfection — frontend developer at work.”</div>
                </div> 
        </div>
    );
};