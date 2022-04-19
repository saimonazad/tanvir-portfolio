import React, { useState } from "react";
import {
  IconFive,
  IconFour,
  IconOne,
  IconSix,
  IconThree,
  IconTwo,
} from "../../icons";
import Nav from "../Nav/Nav";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const animationContent = [
  { id: 1, bg_color: "bg-yellow-500", content: <IconOne /> },
  { id: 2, bg_color: "bg-red-300", content: <IconTwo /> },
  { id: 3, bg_color: "bg-blue-500", content: <IconThree /> },
  { id: 4, bg_color: "bg-indigo-500", content: <IconFour /> },
  { id: 5, bg_color: "bg-cyan-500", content: <IconFive /> },
  { id: 6, bg_color: "bg-gray-500", content: <IconSix /> },
];

const AnimationComponent = () => {
  const [showAnimation, setshowAnimation] = useState(false);
  return (
    <div className="relative">
      <h1 className=" absolute font-Poppins font-extrabold text-7xl pl-8 pb-4 text-stroke top-32 left-16">
        CONTENTS
      </h1>
      <TransitionGroup className="todo-list">
        <div class="grid overflow-hidden sm grid-cols-6 auto-rows-auto gap-16 h-full min-h-screen  md:pl-20 lg:pl-20 lg:pr-20 lg:pt-20 lg:pb-10 bg-white">
          {animationContent.map((item, index) => (
            <CSSTransition
              in={showAnimation}
              key={item.id}
              timeout={500}
              classNames="item"
            >
              <div
                className={`box col-start-${item.id} w-full  flex flex-col flex-wrap`}
              >
                <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
                  {item.id}
                </div>
                <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
                  HOME
                </div>
              </div>
            </CSSTransition>
          ))}
        </div>
      </TransitionGroup>
      {/* <div class="grid overflow-hidden sm grid-cols-6 auto-rows-auto gap-16 h-full min-h-screen  md:pl-20 lg:pl-20 lg:pr-20 lg:pt-20 lg:pb-10 bg-white">
        <div className="box col-start-1 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="box col-start-2 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="box col-start-3 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="box col-start-4 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="box col-start-5 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
        <div className="box col-start-6 w-full  flex flex-col flex-wrap">
          <div className=" grow bg-green-400 w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke">
            1
          </div>
          <div className="text-center font-Poppins font-semibold	text-aboutSubtitle mt-10">
            HOME
          </div>
        </div>
      </div> */}
      <button onClick={() => setshowAnimation(true)}>click</button>
    </div>
  );
};

export default AnimationComponent;
