import equal from "fast-deep-equal";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { config } from "react-spring";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import Nav from "../Nav/Nav";
import GalleryMasonary from "./GalleryMasonary";
import VerticalCarousel from "./VerticalCarousel";
const fakeFetch = (url) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          `https://picsum.photos/id/10/400`,
          `https://picsum.photos/id/20/400`,
          `https://picsum.photos/id/30/400`,
          `https://picsum.photos/id/40/400`,
          `https://picsum.photos/id/50/400`,
          `https://picsum.photos/id/60/400`,
          `https://picsum.photos/id/70/400`,
        ]),
      2000
    );
  });
const PhotoGallery = ({switchPage,setSwitchPage,setAnimation}) => {
  const ref = useRef(null);

  const res = useStaticQuery(graphql`
    query GalleryQuery {
      datoCmsGallery {
        gallery {
          year
          imagesgallery {
            height
            width
            image {
              url
            }
          }
        }
      }
    }
  `);
  console.log(res?.datoCmsGallery?.gallery);

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });
  const [slides, setslides] = useState();
  useEffect(() => {
    if (res?.datoCmsGallery?.gallery?.length > 0) {
      let c = res?.datoCmsGallery?.gallery.map((item, index) => {
        console.log(index);
        return {
          key: index + 1,
          content: item.year,
        };
      });
      if (!equal(c, slides)) {
        setslides(c);
      }
    }
  }, [slides]);

  // let slides = [
  //   {
  //     key: 1,
  //     content: "2021",
  //   },
  //   {
  //     key: 2,
  //     content: "2022",
  //   },
  //   {
  //     key: 3,
  //     content: "2020",
  //   },
  // ];

  const onClick = (event) => {
    alert(event.target.src);
  };

  const [year, setYear] = useState({
    key: 1,
    content: "2022",
  });
  const [photos, setPhotos] = useState();
  React.useEffect(() => {
    let b = res?.datoCmsGallery?.gallery.filter(
      (item) => item.year == year.content
    );
    // console.log(b);
    if (b?.length > 0 && b[0]?.imagesgallery?.length > 0) {
      let c = b[0].imagesgallery.map((item) => {
        return {
          height: item.height,
          width: item.width,
          src: item.image.url,
        };
      });
      console.log(c);
      if (!equal(c, photos)) {
        console.log("yesssss");
        setPhotos(c);
      }
    }
  }, [year]);

  const isMobile = window.innerWidth < 640 ? true : false;
  return (

    <div>
        <div className={`${switchPage === "about" ? "hidden" : "block lg:px-28 lg:py-2 absolute top-5% md:top-5% mt-2 lg:mt-0 w-full md:relative"} `}>
                            <h1
                              className={` lg:text-3xl tracking-widest flex items-center justify-center lg:justify-start text-lg font-impact font-black text-heroTitle  md:z-50 px-2 md:px-2 uppercase lg:bg-inherit bg-white w-full  md:text-left text-center lg:py-5 pt-9 md:pt-0`}
                            >
                              {switchPage}
                            </h1>
      </div>
      
      
    <div class="md:h-[calc(100vh-5rem)] h-screen flex md:pb-[10%] xl:pb-[6%] md:px-10 xl:px-0 px-3 lg:pt-0 pt-[33%]">
                            <div class=" w-1/5 my-auto justify-center md:flex hidden ">
                              <div className="items-center flex-col lg:gap-10 gap-7 md:flex hidden">
                                          <span>
                                            <Facebook color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <LinkedIn color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <Twitter color={"#326AFF"} />
                                          </span>
                                          <span>
                                            <Youtube color={"#326AFF"} pathColor={"#F6F6F6"} />
                                          </span>
                              </div>
                            </div>
        <div class="w-4/5 flex overflow-hidden ">
          <div class="overflow-y-scroll gallery">
          <GalleryMasonary photos={photos} year={year} />
          </div>
        </div>
        <div class=" w-1/5 flex my-auto justify-center">
          {slides?.length > 0 && (
                <VerticalCarousel
                  slides={slides}
                  offsetRadius={state.offsetRadius}
                  showNavigation={state.showNavigation}
                  animationConfig={state.config}
                  setYear={setYear}
                  isMobile={isMobile}
                />
              )}
        </div>
    </div>
    <div>
      <Nav switchPage={switchPage} setSwitchPage={setSwitchPage} setAnimation={setAnimation}/>
    </div>
  </div>
  );
};

export default PhotoGallery;

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
