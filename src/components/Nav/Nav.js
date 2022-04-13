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
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";

function Nav({ setSwitchPage, switchPage }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-navbar md:fixed fixed md:top-auto top-0 md:bottom-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 uppercase">
                  <a
                    href="#"
                    onClick={() => setSwitchPage("home")}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("about")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("milestone")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Milestone
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("contribution")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contribution
                  </a>

                  <a
                    href="#"
                    onClick={() => setSwitchPage("more")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    More
                  </a>
                  <a
                    href="#"
                    onClick={() => setSwitchPage("contact")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Let get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase">
                <a
                  href="#"
                  onClick={() => {setSwitchPage("home"); setIsOpen(!isOpen)}}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  onClick={() => {setSwitchPage("about"); setIsOpen(!isOpen)}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  onClick={() => {setSwitchPage("milestone"); setIsOpen(!isOpen)}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Milestone
                </a>
                <a
                  href="#"
                  onClick={() => {setSwitchPage("contribution");setIsOpen(!isOpen)}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contribution
                </a>

                <a
                  href="#"
                  onClick={() => {setSwitchPage("more"); setIsOpen(!isOpen)}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  More
                </a>

                <a
                  href="#"
                  onClick={() => {setSwitchPage("contact");setIsOpen(!isOpen)}}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Let get in touch
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-bodyBg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {switchPage === "home" ? (
            <div className="flex gap-5 md:fixed justify-center md:justify-start mt-6">
              <span>
                <Facebook
                  color={switchPage === "home" ? "#2D3038" : "#326AFF"}
                />
              </span>
              <span>
                <LinkedIn
                  color={switchPage === "home" ? "#2D3038" : "#326AFF"}
                />
              </span>
              <span>
                <Twitter
                  color={switchPage === "home" ? "#2D3038" : "#326AFF"}
                />
              </span>
              <span>
                <Youtube
                  color={switchPage === "home" ? "#2D3038" : "#326AFF"}
                  pathColor={switchPage === "home" ? "#F6F6F6" : "#F6F6F6"}
                />
              </span>
            </div>
          ) : (
            <h1 className="md:text-5xl text-xl font-Impact font-bold text-heroTitle fixed left-32 uppercase">
              {switchPage}
            </h1>
          )}
        </div>
      </header>
    </div>
  );
}

export default Nav;
