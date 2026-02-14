import TextCarousel from "./TextCarousel";
import { ActiveItems } from "./ActiveItems";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Sidebar=({ sideOption, showSideItem, setShowSideItem })=>{
    return(
       <div className="flex item-center justify-center basis-80 rounded-xl sidebgcolor h-full p-2 shadow-lg h-full rounded-xl">
                {(!sideOption || sideOption === "projects") && (
                    <div>
                        <TextCarousel />
                    </div>   
                )}
                {sideOption === "info" && (
                    <div className='fontfamily fontcolor flex md:block  md:text-left'>
                        <ActiveItems label="Intro" value="intro"showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Details" value="pdetails" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Interest" value="interests" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Hobby" value="hobbies" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Study" value="education" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/> 
                    </div>
                )}
                {sideOption === "skills" && (
                    <div className='fontfamily fontcolor flex md:block  md:text-left p-1'>
                        <ActiveItems label="Hardware" value="chardware" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Programming" value="csoftware" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>  
                    </div>
                )}
                {sideOption === "exp" && (
                    <div className='fontfamily fontcolor flex md:block md:text-left'>
                        <ActiveItems label="Developer" value="dev" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="BPO" value="bpo" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>
                        <ActiveItems label="Non-BPO" value="nonbpo" showSideItem={showSideItem} setShowSideItem={setShowSideItem}/>  
                    </div>
                )}
                {sideOption === "contact" && (
                    <div className='fontfamily text-gray-500 grid grid-row'>
                        <div className="p-2">
                            <div className="text-[15px] font-bold">Cellphone</div>
                            <div className="text-[15px] ">09496574640</div>
                            <div className="border border-black/20"></div>
                        </div>
                        <div className="flex p-2 gap-2">
                            <a href="https://www.facebook.com/jams.ian/" target="_blank" rel="noopener noreferrer">
                                <div className="text-[40px] font-bold transition duration-200 hover:scale-110"><BsFacebook /></div>
                            </a>
                            <a href="https://github.com/jamstarter36" target="_blank" rel="noopener noreferrer">
                                <div className="text-[40px] font-bold transition duration-200 hover:scale-110"><BsGithub /></div>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/jams-ian-maluya-363bbb3b0/" target="_blank" rel="noopener noreferrer">
                            <div className="text-[40px] font-bold transition duration-200 hover:scale-110"><BsLinkedin /></div>
                            </a>
                            {/* <div className="text-[15px] ">https://www.facebook.com/jams.ian/</div> */}
                            {/* <div className="text-[15px] ">https://github.com/jamstarter36</div> */}
                        </div>
                    </div>
                )}
        </div>
    );
};
