// import React, { useState } from "react";

// const Nav = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     { name: "ABOUT", link: "/" },
//     { name: "MILESTONES", link: "/" },
//     { name: "CONTRITION", link: "/" },
//     { name: "MILESTONES", link: "/" },
//     { name: "MORE", link: "/" },
//     { name: "LET'S GET IN TOUCH", link: "/" },
//   ];
//   let [open, setOpen] = useState(false);
//   return (
//     <div className="shadow-md w-auto">
//       <div className="md:flex items-center justify-center bg-navbar py-4 md:px-10 px-7">
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-20 " : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link) => (
//             <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
//               <a
//                 href={link.link}
//                 className="text-white hover:text-gray-400 duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { Transition } from "@headlessui/react";
import React, { useState } from "react";

function Nav({ setSwitchPage, switchPage, bg_color,setAnimation }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav
        className={`bg-navbar md:fixed fixed top-0 lg:top-auto lg:bottom-0 w-full z-50`}
      >
        <div className="">
          
          <div className="h-16">
            <div className="">
              <div className="hidden lg:block">
                <div className=" grid grid-cols-6 pl-20 text-center">
                  <button
                    href="#"
                    onClick={() => 
                      {
                        setAnimation(null)
                        setSwitchPage("home")
                      }
                      }
                    className={` hover:bg-gray-700 ${
                      switchPage === "home" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex justify-center items-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    Home
                  </button>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("about")}
                    className={` hover:bg-gray-700 ${
                      switchPage === "about" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex items-center justify-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    About
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("milestone")}
                    className={` hover:bg-gray-700 ${
                      switchPage === "milestone" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex items-center justify-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    Milestone
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("contribution")}
                    className={` hover:bg-gray-700 ${
                      switchPage === "contribution" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex items-center justify-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    Contribution
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("gallery")}
                    className={` hover:bg-gray-700 ${
                      switchPage === "more" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex items-center justify-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    More
                  </a>
                  <a
                    href="#"
                    onClick={() => setSwitchPage("contact me")}
                    className={` hover:bg-gray-700 ${
                      switchPage === "contact" && "bg-animationTitle"
                    } hover:bg-animationTitle h-16 flex items-center justify-center text-white px-6 py-2 w-auto text-sm font-Poppins font-semibold`}
                  >
                    Let get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center absolute right-2 top-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase"
              >
                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("home");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  Home
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("about");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  About
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("milestone");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  Milestone
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("contribution");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  Contribution
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("gallery");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  More
                </a>

                <a
                  href="#"
                  onClick={() => {
                    setSwitchPage("contact me");
                    setIsOpen(!isOpen);
                  }}
                  className={` hover:bg-gray-700 ${
                    bg_color === "white" ? "text-black" : "text-white"
                  }  px-3 py-2 block rounded-md text-base font-Poppins font-semibold`}
                >
                  Let get in touch
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className={`${switchPage === "about" ? "hidden" : "block"}`}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white md:bg-inherit fixed lg:left-4% lg:top-4% md:top-4% top-6% w-full">
          <h1
            className={` md:text-5xl flex items-center justify-center md:justify-start text-xl font-impact font-black text-heroTitle  md:z-50 md:top-0 left-0 px-2 md:px-2 md:h-12 md:w-full md:left-0 uppercase lg:bg-inherit bg-white w-full lg:top-auto  top-16 h-10 md:text-left text-center py-1`}
          >
            {switchPage}
          </h1>
        </div>
      </header> */}
    </div>
  );
}

export default Nav;
