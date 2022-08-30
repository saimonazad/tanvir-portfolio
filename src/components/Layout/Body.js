import React, { useState } from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import Nav from "../Nav/Nav";

const Body = ({ children }) => {
  const [navbarZindex, setNavbarZindex] = useState(false)
  let route = "";
  if (typeof window !== `undefined`) {
    route = window.location.pathname.replace(/^\/+|\/+$/g, "");
  }
  return (
    <div>
      <div className="lg:hidden block">
        <Nav setNavbarZindex={setNavbarZindex}/>
      </div>
      <div className="lg:h-[calc(100vh-5rem)]">
        <div class="grid lg:grid-cols-8 grid-cols-1 lg:grid-rows-6 h-full px-3">
          <div class="lg:col-span-8">
            <div className="flex lg:justify-start text-center lg:text-left lg:absolute lg:top-[10%] left-[5%] py-3">
              <p
                className={`2xl:text-3xl text-xl tracking-widest font-impact font-black text-heroTitle uppercase lg:bg-inherit w-full`}
              >
                {/* {route !== "/about" && route?.substr(1, route.length)} */}
                {route !== "about" && route}
              </p>
            </div>
          </div>
          <div class=" lg:flex justify-center text-center row-span-6 hidden">
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
          </div>

          <div class={`row-span-5 lg:col-span-7 max-w-[1980px] w-full ${navbarZindex && "-z-10"}`}>
            <div
              className={`${route !== "gallery" && 'lg:pr-20'} lg:col-span-5 w-full h-full flex justify-center items-center`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <Nav />
      </div>
    </div>
  );
};

export default Body;
