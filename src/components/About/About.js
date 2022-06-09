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
    <div className="text-center ">
      <div className="py-8 2xl:pt-48 2xl:pb-10 text-center">
        <p className="text-aboutTitle 2xl:text-7xl md:text-5xl lg:text-3xl font-impact font-black">Tanvir Hossain Khan</p>
      </div>
      <div className="bg-white rounded-t-aboutBorderRadius lg:pb-20 2xl:pb-about 2xl:pt-20 py-10 2xl:px-40">
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
    // <div className="md:px-20 px-5 2xl:px-52 mt-20 md:mt-5">
    //   <div className="w-full ">
    //     <div className="px-5 py-2">
    //       <p className="text-aboutTitle font-impact font-extrabold xl:text-7xl lg:text-5xl md:text-3xl text-xl text-center">
    //         Tanvir Hossain Khan
    //       </p>
    //     </div>
    //     <div className="flex justify-center text-center md:px-10 xl:px-20 lg:px-10 ">
    //       <div className="2xl:h-[50vw] lg:h-[56vw] h-[100vw] md:h-[65vw] xl:h-[31vw] overflow-auto rounded-t-aboutBorderRadius shadow-2xl bg-white md:px-10 lg:px-5 px-5 md:pt-2 pt-5 xl:pt-5 lg:w-5/6 w-4/5 md:w-full pb-8">
    //         <p className="text-aboutSubtitle tracking-widest md:text-xl text-xs lg:text-xl xl:text-2xl font-PT_Serif font-bold uppercase xl:py-5 md:py-8 my-5">
    //           “Collaboration is Always Better than Competition.”
    //         </p>
    //         <p className="text-aboutDescription font-light tracking-widest text-xs xl:text-base lg:text-base md:text-base font-PT_Serif uppercase xl:pb-10 pb-2">
    //           He always believes any problem can be solved if we can all work as
    //           one and from that idea his belief is “Collaboration is Always
    //           Better than Competition.
    //         </p>
    //         <button className="bg-animationTitle font-Poppins rounded px-3 p-2 md:text-lg text-sm outline-none focus:outline-none text-white">
    //           Read more
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
