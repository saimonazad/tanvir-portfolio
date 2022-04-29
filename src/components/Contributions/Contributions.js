import React, { useState } from "react";
import ContributionIcon from "./ContributionIcon";
import { Splide, SplideSlide } from '@splidejs/react-splide';
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
const ContributionsData = [
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
    {
      text: 'He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.'
    },
]
const Contributions = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  
  return (
    <div className="md:px-40">


<Splide
      options={ {
        rewind: true,
        // gap   : '1rem',
        perPage: 3,
        // type:"loop",
        perMove: 1,
        pagination: false,
        arrows: true,
        trimSpace:true,
        focus: 'center',
        slideFocus: true,
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',      
          breakpoints: {
          768: {
            perPage: 2,
          },
          540: {
            perPage: 1,
          },
        }
      } }
      aria-label="My Favorite Images"
    >
      {
        ContributionsData.map((item, i) => {
          return (
              <>
              <SplideSlide>
                <div className="flex flex-col px-5 text-center justify-center items-center py-5 h-screen">
                  <span className="p-3 md:mb-4 xl:mb-10 ">
                      <ContributionIcon color="black" />
                    </span>
                    <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-xl lg:text-base sm:text-sm text-xs">
                      {item.text}
                    </p>
                </div>
              </SplideSlide>
              </>
          )
        })
        
      }
      {/* <SplideSlide>
        
      <div className="flex flex-col items-center space-y-3 text-center dark:bg-gray-800 w-auto sm:min-h-screen max-h-screen px-10 py-3 sm:h-fit">
          <span className="p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500 sm:inline-block hidden">
            <ContributionIcon color="black" />
          </span>
          <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-xl lg:text-base sm:text-sm text-xs">
            He always believes any problem can be solved if we can all work as
            one and from that idea his belief is “Collaboration is Always Better
            than Competition.
          </p>
        </div>
      </SplideSlide> */}
      
    </Splide>




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



    </div>
  );
};

export default Contributions;
