import React, { useState } from "react";
import { config } from "react-spring";
import GalleryPhoto from "./GalleryPhoto";
import VerticalCarousel from "./VerticalCarousel";
const Gallery = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });
  let slides = [
    {
      key: 1,
      content: "2015",
    },
    {
      key: 2,
      content: "2017",
    },
    {
      key: 3,
      content: "2018",
    },
    {
      key: 4,
      content: "2019",
    },
    {
      key: 5,
      content: "2020",
    },
    {
      key: 6,
      content: "2021",
    },
    {
      key: 7,
      content: "2022",
    },
  ];
  return (
    <div classNameName="">
      <div className="container lg:pl-32 lg:pr-10 lg:ml-3 lg:py-10 px-5 lg:-mt-16 md:mt-32 md:ml-5 -mt-5 mx-auto ">
          <div className="grid lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4 xl:gap-24 lg:gap-10 md:gap-8 items-center grid-cols-1 lg:h-[40vw] py-4 md:h-[35vw] overflow-auto">
            <div className="lg:col-span-4 md:col-span-3 xl:col-span-5 ">
              <GalleryPhoto />
            </div>
            <div className="lg:w-40 md:w-32 lg:h-48 h-20 md:block hidden">
              <VerticalCarousel
                slides={slides}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
              />
            </div>
          </div>
        </div>
    </div>
    // <div className="">
    //   <div className="w-11/12">
    //     <GalleryPhoto />
    //   </div>
    //   <div className='w-auto bg-red-700 h-20'>
    //   <p>Test</p>
    //   </div>
    // </div>
  );
};

export default Gallery;

{
  /* <div className="w-40 h-48" >
       
        <VerticalCarousel
          slides={slides}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div> */
}
