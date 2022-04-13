import React from "react";
import ProfilePic from "../../images/hero-image.png";
const HeroSection = ({successMessage}) => {
 
  return (
    <>
    {/* transform ${successMessage ? '-translate-y-custom' : 'translate-y-auto'} */}
      <div className="container md:px-16 px-5 mx-auto lg:fixed inset-0 md:h-[45vw]">
        <div className={`items-center lg:flex flex lg:min-h-screen md:h-96 md:flex-row flex-col justify-center  transition duration-500 `}>
          <div className="w-full lg:w-1/2">
            <div className="mx-auto text-center md:text-left">
              <h1 className="text-lg xl:text-7xl lg:text-5xl md:text-2xl font-semibold font-Sacramento text-animationTitle dark:text-white">
                Hello I am
              </h1>
              <h1 className="text-xl lg:text-4xl xl:text-6xl font-semibold font-impact text-heroTitle uppercase dark:text-white py-3">
                Tanvir Hossain Khan
              </h1>
              <p className=" font-semibold xl:text-3xl lg:text-2xl md:text-xl text-base dark:text-gray-400 font-Montserrat uppercase">
                Entrepreneur
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:mt-0 lg:w-1/2 md:1/2 ">
            <img
              className="w-full lg:object-cover object-fill"
              src={ProfilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
