import React, { useEffect, useState } from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import About from "../About/About";
import AnimationComponent from "../Animaton/AnimationComponent";
import Contact from "../Contact/Contact";
import Contribution from "../Contributions/Contributions";
import PhotoGallery from "../Gallery/Gallery";
import HeroSection from "../Hero_Section/HeroSection";
import Milestone from "../Milestone/Milestone";
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  const [switchPage, setSwitchPage] = useState("home");
  const [successMessage, setSuccessMessage] = useState(false);
  const [animation, setAnimation] = useState(null)
useEffect(() => {
  if (switchPage) {
    setTimeout(() => {
      setAnimation(false)
    }, 4000);
  }
}, [switchPage])
  return (
    <div className="">
      {switchPage !== "home" && (
        <>
              {
                animation === true ? <AnimationComponent/> : (
                  <div className="">
                      <div className="bg-red-600 h-screen">
                          <div className={`${switchPage === "about" ? "hidden" : "block lg:px-28 lg:pt-10"}`}>
                            <h1
                              className={` md:text-5xl flex items-center justify-center md:justify-start text-xl font-impact font-black text-heroTitle  md:z-50 md:top-0 left-0 px-2 md:px-2 md:h-12 md:w-full md:left-0 uppercase lg:bg-inherit bg-white w-full lg:top-auto  top-16 h-10 md:text-left text-center py-1`}
                            >
                              {switchPage}
                            </h1>
                          </div>
                          <div className="h-5/6 flex items-center justify-start lg:px-28 px-10">
                              <div className="flex items-center flex-col lg:gap-10 gap-7">
                                          <span>
                                            <Facebook color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <LinkedIn color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <Twitter color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <Youtube color={"#326AFF"} pathColor={"#F6F6F6"} />
                                          </span>
                              </div>
                              <div className="xl:px-48 md:px-20">
                                        {switchPage === "about" && !animation && <About />}
                                        {switchPage === "milestone" && !animation && <Milestone />}
                                        {switchPage === "contribution" && !animation && <Contribution />}
                                        {switchPage === "gallery" && !animation && <PhotoGallery />}
                                        {switchPage === "contact me" && !animation && <Contact />}
                                          {/* <div>Test........</div> */}
                              </div>
                          </div>
                      </div>
                      <div>
                      {switchPage !== "animation" && !animation && <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} />}
                      </div>
                      
                    {/* <div className="md:block hidden absolute md:top-20% lg:top-1/4 xl:inset-y-30% left-5%">
                      <div className="flex gap-10 flex-col">
                        <span>
                          <Facebook color={"#326AFF"} />
                        </span>
                        <span>
                          <LinkedIn color={"#326AFF"} />
                        </span>
                        <span>
                          <Twitter color={"#326AFF"} />
                        </span>
                        <span>
                          <Youtube color={"#326AFF"} pathColor={"#F6F6F6"} />
                        </span>
                      </div>  
                    </div>
                    <div className="">
                      {
                        animation === true && <AnimationComponent/>
                      }
                      <span className="fixed">
                      {switchPage === "about" && !animation && <About />}
                      </span>
                      {switchPage === "milestone" && !animation && <Milestone />}
                      {switchPage === "contribution" && !animation && <Contribution />}
                      {switchPage === "gallery" && !animation && <PhotoGallery />}
                      {switchPage === "contact me" && !animation && <Contact />}
                    </div>
                    {switchPage !== "animation" && !animation && <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} />} */}
                  </div>
                )
              }
          
        </>
       
      )}
      {switchPage === "home" && (
        <HeroSection switchPage={switchPage} animation={animation} setSwitchPage={setSwitchPage} setAnimation={setAnimation}/>
      )}

{/* {switchPage === 'animation' &&  (<AnimationComponent/>)} */}

      {/* <Nav/> */}
      {/* <div className="md:flex item-center justify-center ">
        <div
          className={`${
            switchPage === "home" ? "md:hidden hidden" : "md:block sm:block hidden"
          } w-1/6 fixed md:left-0 `}
        >
          <div className="flex flex-col items-center align-middle pt-48 gap-8">
            <span>
              <Facebook color={switchPage === "home" ? "#2D3038" : "#326AFF"} />
            </span>
            <span>
              <LinkedIn color={switchPage === "home" ? "#2D3038" : "#326AFF"} />
            </span>
            <span>
              <Twitter color={switchPage === "home" ? "#2D3038" : "#326AFF"} />
            </span>
            <span>
              <Youtube
                color={switchPage === "home" ? "#2D3038" : "#326AFF"}
                pathColor={switchPage === "home" ? "#F6F6F6" : "#F6F6F6"}
              />
            </span>
          </div>
        </div>
        <div className='w-5/6 mx-auto'> 
         
          <div className="lg:px-16 md:px-10">
            {switchPage === "about" && <About />}
            {switchPage === "milestone" && <Milestone />}
            {switchPage === "contribution" && <Contribution />}
            {switchPage === "more" && <Gallery />}
            {switchPage === "contact" && <Contact />}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Layout;
{
  /* {switchPage === "home" && (
            <Home
              successMessage={successMessage}
              successMessage={successMessage}
              setSwitchPage={setSwitchPage}
              switchPage={switchPage}
              setSuccessMessage={setSuccessMessage}
            />
          )} */
}
