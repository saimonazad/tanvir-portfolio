import React, { useEffect, useState, useRef } from "react";
import { config } from "react-spring";
import GalleryPhoto from "./GalleryPhoto";
import VerticalCarousel from "./VerticalCarousel";
import Gallery from "react-photo-gallery";
import { graphql, useStaticQuery } from "gatsby";
import GalleryMasonary from "./GalleryMasonary";
import equal from "fast-deep-equal";
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
const PhotoGallery = () => {
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
      console.log("slides", slides);
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
  console.log("year", year);
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


  return (

    <div>
      <div class="flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <div className="relative">
          <GalleryMasonary photos={photos} year={year} />
        </div>
        <div className="lg:h-48 h-20 md:block hidden ml-28">
          {slides?.length > 0 && (
            <VerticalCarousel
              slides={slides}
              offsetRadius={state.offsetRadius}
              showNavigation={state.showNavigation}
              animationConfig={state.config}
              setYear={setYear}
            />
          )}
        </div>
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
