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
    <div className="px-52">
      <div className="flex items-center gap-10 md:justify-between justify-center">
        <div className="md:w-4/5 w-full">
          <GalleryPhoto />
        </div>
        <div className="lg:h-48 h-20 md:block hidden">
        <VerticalCarousel
            slides={slides}
            offsetRadius={state.offsetRadius}
            showNavigation={state.showNavigation}
            animationConfig={state.config}
          />
        </div>
      </div>
    </div>
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
