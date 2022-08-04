import React, { useState } from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Contribution from "../Contributions/Contributions";
import PhotoGallery from "../Gallery/Gallery";
import HeroSection from "../Hero_Section/HeroSection";
import Milestone from "../Milestone/Milestone";
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  const [switchPage, setSwitchPage] = useState("home");
  const [animation, setAnimation] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);


  return (
    <div className="">
      {switchPage !== "home" && switchPage !== "gallery" && (
        <>
          {
            <div className={`${switchPage == "contribution" && "bg-bodyBg"}`}>
              <div className="md:h-screen">
                <div
                  className={`${
                    switchPage === "about"
                      ? "hidden"
                      : "lg:px-28 lg:py-3 fixed lg:top-5% md:top-6% top-[5.8%] mt-2 lg:mt-0 w-full md:relative"
                  } `}
                >
                  <h1
                    className={`lg:text-3xl tracking-widest flex items-center justify-center lg:justify-start text-lg mt-5 md:mt-10 lg:mt-0 font-impact font-black text-heroTitle  md:z-50 px-2 md:px-2 uppercase lg:bg-inherit bg-white w-full  md:text-left text-center lg:py-5 pt-8 md:pt-0`}
                  >
                    {switchPage}
                  </h1>
                </div>
                <div
                  className={`lg:h-5/6 h-fit flex items-center justify-start lg:px-28 px-5 gap-5 2xl:max-w-4/5 mx-auto`}
                >
                  <div className="items-center flex-col lg:gap-10 gap-7 md:flex hidden">
                    <span>
                      <a href="https://www.facebook.com/dreamerz.tanvir">
                        <Facebook color={"#326AFF"} />
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/tanvirkhandll/">
                        <LinkedIn color={"#326AFF"} />
                      </a>
                    </span>
                    <span>
                      <a href="https://twitter.com/Tanvir_dreamerz">
                        <Twitter color={"#326AFF"} />
                      </a>
                    </span>
                    <span>
                      <Youtube color={"#326AFF"} pathColor={"#F6F6F6"} />
                    </span>
                  </div>
                  <div
                    className={`${
                      switchPage == "contribution" || switchPage == "contact"
                        ? "xl:px-0 lg:px-16 px-5"
                        : "xl:px-48 lg:px-20 px-5"
                    } ${switchPage == "about" && 'xl:px-48 2xl:px-20'}`}
                  >
                    {switchPage === "about" && <About />}
                    {switchPage === "milestone" && <Milestone />}
                    {switchPage === "contribution" && <Contribution />}

                    {switchPage === "contact me" && <Contact />}
                    {/* <div>Test........</div> */}
                  </div>
                </div>
              </div>
              <div>
                {switchPage !== "home" && (
                  <Nav
                    switchPage={switchPage}
                    setSwitchPage={setSwitchPage}
                    setAnimation={setAnimation}
                  />
                )}
              </div>
            </div>
          }
        </>
      )}

      {switchPage === "gallery" && (
        <PhotoGallery
          switchPage={switchPage}
          setSwitchPage={setSwitchPage}
          setAnimation={setAnimation}
        />
      )}
      {switchPage === "home" && (
        <div>
          <HeroSection
            switchPage={switchPage}
            animation={animation}
            setSwitchPage={setSwitchPage}
            setAnimation={setAnimation}
            setMobileMenu={setMobileMenu}
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
