import React from "react";
import { graphql, useStaticQuery } from "gatsby";
const Bio = () => {
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
    <div className="text-center flex flex-col py-5 md:relative md:top-0 absolute top-[30%] px-2 overflow-hidden">
      <div className="py-3 md:mb-5">
        <p className="text-aboutTitle tracking-custom text-3xl pt-2 sm:pt-0 sm:text-4xl 2xl:text-7xl lg:text-5xl md:text-3xl font-impact font-black">
          Tanvir Hossain Khan
        </p>
      </div>
      <div className="md:bg-white lg:w-[80%] mx-auto md:rounded-t-aboutBorderRadius h-[19.5rem] 2xl:h-[34rem] 2xl:px-40 sm:px-10 xl:shadow-xl md:shadow-lg">
        <div className="md:pt-[6%]">
          <p className="text-aboutSubtitle tracking-widest md:text-xl text-base lg:text-base xl:text-xl 2xl:text-3xl font-PT_Serif font-bold uppercase md:py-8 py-2">
            {title}
          </p>
          <p className="text-aboutDescription font-light tracking-widest text-sm md:text-sm 2xl:text-2xl xl:text-base font-PT_Serif uppercase xl:pb-10 pb-2">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
