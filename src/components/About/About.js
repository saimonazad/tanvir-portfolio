import React from "react";
import { graphql, useStaticQuery } from "gatsby";
const About = () => {
  const res = useStaticQuery(graphql`
    query AboutQuery {
      datoCmsAbout {
        id
        title
        content
      }
    }
  `);

  const { title, content } = res.datoCmsAbout;
  return (
    <div className="text-center flex flex-col py-5">
      <div className="py-5">
        <p className="text-aboutTitle tracking-custom text-xl pt-5 sm:pt-0 sm:text-4xl 2xl:text-5xl md:text-3xl font-impact font-black">
          Tanvir Hossain Khan
        </p>
      </div>
      <div className="md:bg-white md:rounded-t-aboutBorderRadius h-[80%] 2xl:h-[30rem] py-4 2xl:px-40 sm:px-10 md:shadow-lg">
        <p className="text-aboutSubtitle tracking-widest md:text-xl text-xs lg:text-base 2xl:text-2xl font-PT_Serif font-bold uppercase xl:py-5 md:py-8 py-2">
          {title}
        </p>
        <p className="text-aboutDescription font-light tracking-widest text-xs md:text-sm xl:text-base font-PT_Serif uppercase xl:pb-10 pb-2">
          {content}
        </p>
        <button className="bg-animationTitle font-Poppins rounded px-3 p-2 md:text-lg text-sm outline-none focus:outline-none text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default About;
