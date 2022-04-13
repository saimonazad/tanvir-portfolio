import React from "react";
import contactImg from "../../images/contact.png";
const Contact = () => {
  return (
    <div className="w-5/6 mx-auto p-8">
      <div className="w-4/5 mx-auto">
        <img src={contactImg} alt="" className="w-full " />
      </div>
      <div className="flex justify-center gap-10 lg:text-xl text-base md:flex-row flex-col md:mt-2 mt-4 text-center">
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
    </div>
  );
};

export default Contact;
