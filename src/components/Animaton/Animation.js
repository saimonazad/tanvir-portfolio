import React from "react";
import { Five, Four, One, Six, Three, Two } from "../../icons";
import Nav from "../Nav/Nav";

const animationContent = [
  { bg_color: "bg-yellow-500", content: <One /> },
  { bg_color: "bg-red-300", content: <Two /> },
  { bg_color: "bg-blue-500", content: <Three /> },
  { bg_color: "bg-indigo-500", content: <Four /> },
  { bg_color: "bg-cyan-500", content: <Five /> },
  { bg_color: "bg-gray-500", content: <Six /> },
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
