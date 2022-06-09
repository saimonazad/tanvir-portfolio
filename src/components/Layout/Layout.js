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
  const [animation, setAnimation] = useState(null)
  
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(null)
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
                      <div className="h-screen">
                          <div className={`${switchPage === "about" ? "hidden" : "block lg:px-28 lg:py-3 absolute top-5% mt-2 lg:mt-0 w-full md:relative"}`}>
                            <h1
                              className={`lg:text-5xl flex items-center justify-center lg:justify-start text-lg font-impact font-black text-heroTitle  md:z-50 px-2 md:px-2 uppercase lg:bg-inherit bg-white w-full  md:text-left text-center lg:py-5 py-7`}
                            >
                              {switchPage}
                            </h1>
                          </div>
                          <div className="lg:h-5/6 h-fit flex items-center justify-start lg:px-28 px-5 gap-5">
                              <div className="items-center flex-col lg:gap-10 gap-7 md:flex hidden">
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
                              <div className={`${switchPage == 'contribution' ||switchPage == 'contact' ? 'xl:px-10 lg:px-20 px-5' : 'xl:px-48 lg:px-20 px-5'} `}>
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
                      {switchPage !== "animation" && !animation && <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} setAnimation={setAnimation}/>}
                      </div>
                  </div>
                )
              }
          
        </>
       
      )}
      {switchPage === "home" && (
        <HeroSection switchPage={switchPage} animation={animation} setSwitchPage={setSwitchPage} setAnimation={setAnimation}/>
      )}
    </div>
  );
};

export default Layout;

