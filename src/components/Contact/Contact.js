import React from "react";
import { Address, Call, Email } from "../../icons";
import contactImg from "../../images/contact.png";
import { graphql, useStaticQuery } from "gatsby";

const Contact = () => {
  const res = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsContact {
        id
        address
        email
      }
    }
  `);
  console.log(res);
  return (
    <div className="flex sm:flex-col flex-col items-center justify-center xl:mt-auto py-32">
      <div className="w-4/5 mx-auto">
        <img src={contactImg} alt="" className="w-5/6 mx-auto" />
      </div>
      <div className="flex justify-center md:px-0 px-10 md:gap-10 gap-3 lg:text-xl text-base md:flex-row flex-col text-center md:py-0 py-10 md:space-y-0 space-y-5">
        <div className="md:w-1/3 w-full">
          <span className="flex gap-5">
            <span>
              <Address />
            </span>
            <p className="text-left md:text-lg text-base text-heroTitle font-Encode_Sans">
              Bangladesh : 6/14 Haseena D’ Palace Block - A, Lalmatia Dhaka -
              1207
            </p>
          </span>
        </div>
        <div className="md:w-1/3 w-full">
          <span className="flex gap-5">
            <span>
              <Call />
            </span>
            <p className="md:text-lg text-base text-heroTitle font-Encode_Sans ">+880 167511 0479</p>
          </span>
        </div>
        <div className="md:w-1/3 w-full">
          <span className="flex gap-5">
            <span>
              <Email />
            </span>
            <p className='md:text-lg text-base text-heroTitle font-Encode_Sans'>info@dreamerzlab.com</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-10 cursor-pointer">
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
        <span className="text-animationTitle text-lg font-bold">
          Make an appointment
        </span>
      </div>
    </div>
  );
};

export default Contact;
