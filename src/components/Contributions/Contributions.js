import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

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
  const res = useStaticQuery(graphql`
    query ContributionQuery {
      datoCmsContribution {
        contributions {
          categoryName
          contents {
            content
            image {
              url
            }
          }
        }
      }
    }
  `);
  console.log(res.datoCmsContribution.contributions);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [contributions, setContributions] = useState(
    res.datoCmsContribution.contributions
  );
  const chevronWidth = 40;
  console.log("contributions", contributions);
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation]}
        className="h-full mt-[15%] lg:mt-0"
        id="customSwiper"
      >
        {contributions?.map((contribution, i) => (
          <SwiperSlide>
            <div className=" w-full h-full flex flex-col lg:flex-row text-center">
              {
                <p className="text-black text-2xl text-center lg:hidden block w-3/5 mx-auto">
                  {contribution.categoryName}
                </p>
              }
              {
                <p className="text-black text-2xl absolute 2xl:w-[12%] 2xl:right-[2%] lg:right-[5%] lg:block hidden category">
                  {contribution.categoryName}
                </p>
              }
              {contribution?.contents.map((item, i) => (
                <div
                  className={` ${
                    i == 1 ? "bg-aboutSubtitle" : ""
                  }  lg:w-[33.5%] flex flex-col items-center justify-center px-5 py-4`}
                >
                  <span className="p-3 md:mb-4 xl:mb-10 ">
                    {/* {i == 2 ? (
                      <LastContributionIcon />
                    ) : (
                      <ContributionIcon
                        bcolor={`${i == 1 ? "#373737" : "white"} `}
                        color={`${i == 1 ? "white" : "#373737"} `}
                      />
                    )} */}
                    <img className="w-20 h-32" src={item.image.url} />
                  </span>
                  <p
                    className={`${
                      i == 1 ? "text-white" : "text-contributeFont"
                    } uppercase 2xl:text-2xl sm:text-sm text-sm`}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    // <Swiper
    //   cssMode={true}
    //   navigation={true}
    //   // pagination={true}
    //   mousewheel={true}
    //   keyboard={true}
    //   modules={[Navigation]}
    //   className=""
    // >

    //   <div className="flex h-full">
    //     <p className="bg-red-600 w-[33%]">Test...</p>
    //     <p className="bg-blue-600 w-[33%]">Test...</p>
    //     <p className="bg-red-600 w-[33%]">Test...</p>
    //     {/* <Swiper
    //     cssMode={true}
    //     navigation={true}
    //     // pagination={true}
    //     mousewheel={true}
    //     keyboard={true}
    //     modules={[Navigation]}
    //     className=""
    //   >

    //     {contributions?.map((contribution, i) => (
    //       <SwiperSlide>
    //         <div className="px-0 font-medium ">
    //           <div className="flex items-center">
    //             {contribution?.contents.map((item, i) => (
    //               <div
    //                 className={`flex flex-col 2xl:px-20 px-5 text-center justify-center items-center py-5 ${
    //                   i == 1 ? "bg-aboutSubtitle" : ""
    //                 }`}
    //               >
    //                 <span className="p-3 md:mb-4 xl:mb-10 ">
    //                   {i == 2 ? (
    //                     <LastContributionIcon />
    //                   ) : (
    //                     <ContributionIcon
    //                       bcolor={`${i == 1 ? "#373737" : "white"} `}
    //                       color={`${i == 1 ? "white" : "#373737"} `}
    //                     />
    //                   )}
    //                 </span>
    //                 <p
    //                   className={`${
    //                     i == 1 ? "text-white" : "text-contributeFont"
    //                   } uppercase 2xl:text-2xl sm:text-sm text-xs`}
    //                 >
    //                   {item.content}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper> */}
    //   </div>
    // </Swiper>
  );
};

export default Contributions;
