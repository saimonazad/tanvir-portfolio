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
const PhotoGallery = ({ switchPage, setSwitchPage, setAnimation }) => {
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
  const [year, setYear] = useState({
    key: 1,
    content: "2016",
  });

  useEffect(() => {
    if (res?.datoCmsGallery?.gallery?.length > 0) {
      let c = res?.datoCmsGallery?.gallery.map((item, index) => {
        console.log(index);
        return {
          key: index + 1,
          content: item?.year,
        };
      });
      if (!equal(c, slides)) {
        setslides(c);
        setYear(c[0]);
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

  const [photos, setPhotos] = useState();

  React.useEffect(() => {
    let b = res?.datoCmsGallery?.gallery.filter(
      (item) => item.year == year?.content
    );
    if (b?.length > 0 && b[0]?.imagesgallery?.length > 0) {
      let c = b[0].imagesgallery.map((item) => {
        return {
          height: item.height,
          width: item.width,
          src: item.image.url,
        };
      });
      console.log("c", c);
      if (!equal(c, photos)) {
        console.log("yesssss");
        setPhotos(c);
      }
    }
  }, [year]);

  let isMobile;
  if (typeof window !== `undefined`) {
    isMobile = window.innerWidth < 640 ? true : false;
  }
  console.log("photos", photos);
  return (
    <div className="grid grid-cols-6 lg:h-[calc(100vh-16rem)] md:place-items-center md:items-start space-x-10 lg:space-x-0 gallery overflow-x-hidden ">
      <div className="md:col-span-5 col-span-5 sm:h-auto h-[80%] w-full gallery">
        <GalleryMasonary photos={photos} year={year} />
      </div>
      <div
        class=" col-span-1 2xl:flex my-auto justify-center top-[50%] lg:top-[30%] fixed 2xl:right-[5%] lg:right-[10%] right-[3%]"
        id="custom-gallery"
      >
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
  );
};

export default PhotoGallery;
