import React from "react";

const About = () => {
  return (
    <div className="md:relative xl:w-11/12 w-full md:w-full mx-auto container">
      <div className="px-5 py-2">
        <p className="text-aboutTitle font-impact xl:text-7xl lg:text-5xl md:text-3xl text-xl font-normal text-center">
          Tanvir Hossain Khan
        </p>
      </div>
      <div className="flex justify-center text-center md:px-24 lg:mt-10 mt-5">
        <div className="rounded-t-aboutBorderRadius shadow-2xl bg-white md:px-28 px-5 md:pt-5 pt-8 xl:pt-10 lg:w-5/6 w-4/5 md:w-full lg:h-[50vw] md:h-screen min-h-screen">
          <p className="text-aboutSubtitle tracking-widest  md:text-xl text-base lg:text-xl xl:text-2xl font-PT_Serif font-bold uppercase lg:py-16 py-5">“Collaboration is Always Better than Competition.”</p>
          <p className="text-aboutDescription font-normal tracking-widest text-xs xl:text-2xl lg:text-xl md:text-base font-PT_Serif uppercase xl:pb-16 pb-6">He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.”</p>
          <button className="bg-animationTitle font-Poppins rounded px-3 p-2 md:text-lg text-sm outline-none focus:outline-none text-white">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
