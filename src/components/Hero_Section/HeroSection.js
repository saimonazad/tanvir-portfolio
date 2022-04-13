import React from "react";
import ProfilePic from "../../images/hero-image.png";
const HeroSection = ({successMessage}) => {
  return (
    <>
    {/* transform ${successMessage ? '-translate-y-custom' : 'translate-y-auto'} */}
      <div className="container md:px-16 px-5 mx-auto">
        <div className={`items-center lg:flex flex md:flex-row flex-col justify-center  transition duration-500 `}>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg mx-auto text-center md:text-left">
              <h1 className="text-2xl font-semibold font-Sacramento text-animationTitle dark:text-white lg:text-3xl">
                Hello I am
              </h1>
              <h1 className="text-xl font-semibold text-heroTitle uppercase dark:text-white lg:text-3xl">
                Tanvir Hossain Khan
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400 font-Montserrat uppercase">
                Entrepreneur
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full  lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-xl xl:max-w-full xl:max-h-full"
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
