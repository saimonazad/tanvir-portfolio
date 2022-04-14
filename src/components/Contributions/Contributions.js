import React, { useState } from "react";
import ContributionIcon from "./ContributionIcon";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Contributions = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="pt-32 sm:px-24 md:px-0 pl-20 md:pl-0">
      {/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        
      </Carousel> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center">
        <div className="flex flex-col items-center space-y-3 text-center dark:bg-gray-800 w-auto sm:min-h-screen max-h-screen px-5 py-3 sm:h-fit">
          <span className="p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500 sm:inline-block hidden">
            <ContributionIcon color="black" />
          </span>
          <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-2xl lg:text-base sm:text-sm text-xs">
            He always believes any problem can be solved if we can all work as
            one and from that idea his belief is “Collaboration is Always Better
            than Competition.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center z-10  bg-aboutSubtitle dark:bg-gray-800 w-auto md:min-h-screen sm:h-fit max-h-screen px-5 py-3">
          <span className="inline-block p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500">
            <ContributionIcon color="#FFFFFF" bcolor="#373737" />
          </span>
          <p className="text-white dark:text-gray-300 uppercase xl:text-2xl lg:text-base sm:text-sm text-xs">
            He always believes any problem can be solved if we can all work as
            one and from that idea his belief is “Collaboration is Always Better
            than Competition.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 text-center dark:bg-gray-800 w-auto min-h-screen px-5 py-3 sm:h-fit">
          <span className="inline-block p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500">
            <ContributionIcon color="#D31459" />
          </span>
          <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-2xl lg:text-base sm:text-sm text-xs">
            He always believes any problem can be solved if we can all work as
            one and from that idea his belief is “Collaboration is Always Better
            than Competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
