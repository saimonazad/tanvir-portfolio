import React from "react";
import {
  IconFive,
  IconFour,
  IconOne,
  IconSix,
  IconThree,
  IconTwo,
} from "../../icons";
import Nav from "../Nav/Nav";

const animationContent = [
  { bg_color: "bg-yellow-500", content: <IconOne /> },
  { bg_color: "bg-red-300", content: <IconTwo /> },
  { bg_color: "bg-blue-500", content: <IconThree /> },
  { bg_color: "bg-indigo-500", content: <IconFour /> },
  { bg_color: "bg-cyan-500", content: <IconFive /> },
  { bg_color: "bg-gray-500", content: <IconSix /> },
];

const AnimationComponent = () => {
  return (
    <div className="relative">
      <h1 className=" absolute font-Poppins font-extrabold text-7xl pl-8 pb-4 text-stroke top-32 left-16">
        CONTENTS
      </h1>
      <div className="flex justify-between space-x-16 items-stretch md:pl-20 lg:pl-20 lg:pr-20 lg:pt-20 lg:pb-10 bg-white min-h-screen ">
        <div className="w-full  flex flex-col flex-wrap item-1">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap item-2">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            2
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap item-3" >
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            3
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap item-4">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            4
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="w-full flex flex-col flex-wrap item-extra">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
          
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            
          </div>
        </div>

        <div className="w-full  flex flex-col flex-wrap item-5">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            5
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="w-full  flex flex-col flex-wrap item-6">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            6
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationComponent;