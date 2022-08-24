import React from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import Nav from "../Nav/Nav";

const Body = ({ children }) => {
    const route = window.location.pathname
  return (
    <div>
      <div className="lg:hidden block">
        <Nav />
      </div>
      <div className="lg:h-[calc(100vh-5rem)] max-w-[1980px] mx-auto">
        <div>
          {/* <p
            className={`lg:text-3xl absolute lg:top-[10%] lg:left-[8%] tracking-widest font-impact font-black text-heroTitle uppercase lg:bg-inherit w-full  md:text-left text-center `}
          >
            MILESTONE
          </p> */}
          <div className="lg:w-[20%] w-[98%] text-center mx-auto lg:absolute lg:top-[12%] lg:left-[7%] py-3">
            <p
              className={`lg:text-3xl text-2xl tracking-widest font-impact font-black text-heroTitle uppercase lg:bg-inherit w-full`}
            >
              {route !== '/about' && route?.substr(1, route.length)}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-6 lg:place-items-center space-x-3 h-full w-[98%]">
          <div className="lg:flex hidden flex-col space-y-7 w-[8%] justify-center items-center">
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

          {/* content */}
          <div className="lg:pr-32 lg:col-span-5">{children}</div>
        </div>
      </div>
      <div className="lg:block hidden">
        <Nav />
      </div>
    </div>
  );
};

export default Body;
