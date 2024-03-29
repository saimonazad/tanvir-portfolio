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
        phone
      }
    }
  `);

  const { email, address, phone } = res.datoCmsContact;
  return (
    <div className="">
      <div className="xl:w-4/5 sm:w-4/5 w-5/6 mx-auto">
        <img src={contactImg} alt="" className="md:w-5/6 mx-auto" />
      </div>
      <div className="flex justify-start md:justify-center md:flex-row flex-col 2xl:gap-16 gap-8 2xl:py-6 py-2">
        <span className="flex gap-5 md:w-1/3 w-auto">
          <span>
            <Address />
          </span>
          <p className="md:text-left 2xl:text-lg text-base text-heroTitle font-Encode_Sans">
            {address}
          </p>
        </span>
        <span className="flex gap-5 w-auto ">
          <span>
            <Call />
          </span>
          <p className="2xl:text-lg md:text-left text-base text-heroTitle font-Encode_Sans ">
            {phone}
          </p>
        </span>

        <span className="flex gap-5 w-auto">
          <span>
            <Email />
          </span>
          <p className="2xl:text-lg md:text-left text-base text-heroTitle font-Encode_Sans ">
            {email}
          </p>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center  cursor-pointer mt-2 md:mt-0">
        <button className="bg-animationTitle font-Poppins rounded px-4 p-2 md:text-lg text-base outline-none focus:outline-none text-white">
          <a
            className="no-underline"
            href="https://calendly.com/tanvirkhandll/60min?back=1&month=2022-09"
            target="_blank"
          >
            Make an appointment
          </a>
        </button>
        {/* <span>
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
        <span className="text-animationTitle text-lg font-bold mt-2">
          Make an appointment
        </span> */}
      </div>
    </div>
  );
};

export default Contact;
