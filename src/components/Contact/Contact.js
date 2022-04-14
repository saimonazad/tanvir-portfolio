import React from "react";
import contactImg from "../../images/contact.png";
const Contact = () => {
  return (
    <div className="flex sm:flex-col flex-col items-center justify-center xl:mt-auto mt-16">
      <div className="w-4/5 mx-auto">
        <img src={contactImg} alt="" className="w-full " />
      </div>
      <div className="flex justify-center md:gap-10 gap-3 lg:text-xl text-base md:flex-row flex-col md:-my-4 my-6 text-center">
        <div className="md:w-1/3 w-full">
          <span></span>
          <p className="text-left">
            Bangladesh : 6/14 Haseena D’ Palace Block - A, Lalmatia Dhaka - 1207
          </p>
        </div>
        <div className="md:w-1/3 w-full">
          <span></span>
          <p>+880 167511 0479</p>
        </div>
        <div className="md:w-1/3 w-full">
          <span></span>
          <p>info@dreamerzlab.com</p>
        </div>
        
      </div>
      <div className="flex flex-col justify-center items-center">
          <span>
            <svg
              width="67"
              height="29"
              viewBox="0 0 67 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5 29L0 0C26.2652 11.7532 40.9261 11.6748 67 0L33.5 29Z"
                fill="url(#paint0_linear_306_37)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_306_37"
                  x1="33.5"
                  y1="29"
                  x2="67"
                  y2="8.68378e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#326AFF" />
                  <stop offset="1" stop-color="#44C4FF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className='text-animationTitle text-lg '>Make an appointment</span>
        </div>
    </div>
  );
};

export default Contact;
