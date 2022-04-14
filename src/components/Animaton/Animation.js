import React from "react";
import { IconFive, IconFour, IconOne, IconSix, IconThree, IconTwo } from "../../icons";
import Nav from "../Nav/Nav";

const animationContent = [
  { bg_color: "bg-yellow-500", content: <IconOne /> },
  { bg_color: "bg-red-300", content: <IconTwo /> },
  { bg_color: "bg-blue-500", content: <IconThree /> },
  { bg_color: "bg-indigo-500", content: <IconFour /> },
  { bg_color: "bg-cyan-500", content: <IconFive /> },
  { bg_color: "bg-gray-500", content: <IconSix /> },
];
const Animation = () => {
  return (
    <div>
      <div className="flex gap-8 mx-auto items-center md:pl-20 lg:pl-40 lg:pr-20 bg-white min-h-screen fixed w-full justify-center">
        {animationContent.map((animation, index) => {
          return (
            <>
              <div
                key={index}
                className={`${animation.bg_color} h-[45vw] text-7xl w-1/12 flex items-end justify-center pb-5`}
              >
                {animation.content}
              </div>
              
            </>
          )
        })}
      </div>
      <Nav bg_color={'white'} />
    </div>
  );
};

export default Animation;
