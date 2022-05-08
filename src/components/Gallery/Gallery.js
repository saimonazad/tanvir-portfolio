import React, { useEffect, useState } from "react";
import { config } from "react-spring";
import GalleryPhoto from "./GalleryPhoto";
import VerticalCarousel from "./VerticalCarousel";
import Gallery from "react-photo-gallery";
const fakeFetch = url => new Promise(resolve => {
  setTimeout(() => resolve([
    `https://picsum.photos/id/10/400`,
    `https://picsum.photos/id/20/400`,
    `https://picsum.photos/id/30/400`,
    `https://picsum.photos/id/40/400`,
    `https://picsum.photos/id/50/400`,
    `https://picsum.photos/id/60/400`,
    `https://picsum.photos/id/70/400`,
  ]), 2000)
})
const PhotoGallery = () => {
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

  const onClick = event => {
    alert(event.target.src)
  }
  const [year, setYear] = useState({})
  console.log('year', year);
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fakeFetch(`/photos`)
      .then(urls => urls.map(url => ({src: url, width: 150, height: 150})))
      .then(setPhotos)
  }, [])

  return (
    <div className="px-52 py-32 h-screen overflow-auto">
      <div className="flex items-center gap-10 md:justify-between justify-center">
        <div className="md:w-4/5 w-full">
        <Gallery
      photos={photos}
      onClick={onClick}
    />
    {/* <p>Test................</p> */}
        </div>
        <div className="lg:h-48 h-20 md:block hidden">
        <VerticalCarousel
            slides={slides}
            offsetRadius={state.offsetRadius}
            showNavigation={state.showNavigation}
            animationConfig={state.config}
            setYear={setYear}
          />
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
