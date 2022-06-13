import React, { useState } from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Contribution from "../Contributions/Contributions";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../Hero_Section/HeroSection";
import Milestone from "../Milestone/Milestone";
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  const [switchPage, setSwitchPage] = useState("milestone");
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <div className="">
      {switchPage !== "home" && (
        <div className="">
          <div className="flex gap-24 lg:px-20 xl:px-32 md:px-10 items-center ">
            <div className=" absolute top-40% md:block hidden">
              <div className="flex gap-16 flex-col">
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
            <div className="2xl:px-44 lg:px-20">
              {switchPage === "about" && <About />}
              {switchPage === "milestone" && <Milestone />}
              {switchPage === "contribution" && <Contribution />}
              {switchPage === "more" && <Gallery />}
              {switchPage === "contact" && <Contact />}
            </div>
          </div>
          <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} />
        </div>
      )}
      {switchPage === "home" && (
        <HeroSection switchPage={switchPage} setSwitchPage={setSwitchPage}/>
      )}

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
