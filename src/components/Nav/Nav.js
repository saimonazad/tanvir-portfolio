import { Transition } from "@headlessui/react";
import { Link } from "gatsby";
import React, { useState } from "react";

function Nav({
  bg_color,
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [switchPage, setSwitchPage] = useState('');
  let route = "";
  if (typeof window !== `undefined`) {
    route = window.location.pathname.replace(/^\/+|\/+$/g, '');
  }

  return (
    <div>
      <nav
        // md:fixed fixed top-0 lg:top-auto lg:bottom-0 w-full z-50
        className={`bg-navbar`}
      >
        <div className="max-w-[1980px] mx-auto w-full">
          <div className="lg:h-20 lg:max-w-4/5 lg:mx-auto">
            <div className="">
              <div className="hidden lg:block">
                <div className=" grid grid-cols-6 pl-20 text-center">
                  <Link to="/">
                    <a
                      href="#"
                      // onClick={() => {setSwitchPage("home");}}
                      className={` hover:bg-gray-700 ${
                        route === "home" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-6 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      Home
                    </a>
                  </Link>

                  <Link to="/about">
                    <a
                      href="#"
                      // onClick={() => setSwitchPage("about")}
                      className={` hover:bg-gray-700 ${
                        route === "about" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-6 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      About
                    </a>
                  </Link>

                  <Link to="/milestone">
                    <a
                      href="#"
                      // onClick={() => setSwitchPage("milestone")}
                      className={` hover:bg-gray-700 ${
                        route === "milestone" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-6 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      Milestone
                    </a>
                  </Link>

                  <Link to="/contributions">
                    <a
                      href="#"
                      // onClick={() => setSwitchPage("contribution")}
                      className={` hover:bg-gray-700 ${
                        route === "contributions" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-6 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      Contribution
                    </a>
                  </Link>

                  <Link to="/gallery">
                    <a
                      href="#"
                      // onClick={() => setSwitchPage("gallery")}
                      className={` hover:bg-gray-700 ${
                        route === "gallery" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-6 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      Gallery
                    </a>
                  </Link>

                  <Link to="/contact">
                    <a
                      href="#"
                      // onClick={() => setSwitchPage("contact me")}
                      className={` hover:bg-gray-700 ${
                        route === "contact" && "bg-animationTitle"
                      } hover:bg-animationTitle h-20 flex items-center justify-center text-white px-3 py-2 w-auto text-base font-Poppins font-semibold`}
                    >
                      Let's get in touch
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center lg:hidden py-4 px-2">
              <div className="">
                <p className=" font-black font-impact text-base text-navTitle uppercase ">
                  Tanvir Hossain Khan
                </p>
                <p className="text-navTitle font-semibold text-xs font-Montserrat uppercase">
                  Entrepreneur
                </p>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center rounded-md text-navTitle hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          // className={"absolute"}
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                // className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase"
                className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-navbar`}
              >
                <Link to="/">
                  <a
                    href="#"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    Home
                  </a>
                </Link>

                <Link to="/about">
                  <a
                    href="#"
                    onClick={() => {
                      // setAnimateItem(false);
                      setIsOpen(false);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    About
                  </a>
                </Link>

                <Link to="/milestone">
                  <a
                    href="#"
                    onClick={() => {
                      // setAnimateItem(false);
                      setIsOpen(false);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    Milestone
                  </a>
                </Link>
                <Link to="/contributions">
                  <a
                    href="#"
                    onClick={() => {
                      // setAnimateItem(false);
                      setIsOpen(false);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    Contribution
                  </a>
                </Link>
                <Link to="/gallery">
                  <a
                    href="#"
                    onClick={() => {
                      // setAnimateItem(false);
                      setIsOpen(false);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    Gallery
                  </a>
                </Link>

                <Link to="/contact">
                  <a
                    href="#"
                    onClick={() => {
                      // setAnimateItem(false);
                      setIsOpen(false);
                    }}
                    className={` hover:bg-gray-700 ${
                      bg_color === "white" ? "text-black" : "text-white"
                    }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                  >
                    Let's get in touch
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
