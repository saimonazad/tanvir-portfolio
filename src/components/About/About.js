import React from "react";
import {graphql, useStaticQuery} from 'gatsby'
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

  const {title, content} = res.datoCmsAbout
  return (
    <div className="text-center mt-about md:mt-0">
      <div className="xl:pt-20 xl:pb-5 pt-24 2xl:pt-48 2xl:pb-10 text-center">
        <p className="text-aboutTitle tracking-custom text-2xl sm:text-4xl 2xl:text-6xl md:text-5xl lg:text-3xl font-impact font-black">Tanvir Hossain Khan</p>
      </div>
      <div className="bg-white rounded-t-aboutBorderRadius lg:pb-16 2xl:pb-about py-10 2xl:px-40 sm:px-10 shadow-lg">
            <p className="text-aboutSubtitle tracking-widest md:text-xl text-xs lg:text-xl 2xl:text-2xl font-PT_Serif font-bold uppercase xl:py-5 md:py-8 my-5">
               {title}
            </p>
             <p className="text-aboutDescription font-light tracking-widest text-xs xl:text-2xl lg:text-base md:text-base font-PT_Serif uppercase xl:pb-10 pb-2">
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
