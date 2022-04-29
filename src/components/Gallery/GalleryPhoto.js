import React, { useCallback, useState } from "react";
import Imgix from "react-imgix";
// import { photos } from "./photos";

function GalleryPhoto() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      srcSet: [
        "https://source.unsplash.com/2ShvY8Lf6l0/500x375 20w",
        "https://source.unsplash.com/2ShvY8Lf6l0/800x600 20w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1024x768 304w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 30w",
      ],
      sizes: ["(min-width: 480px) 20vw,(min-width: 1024px) 20.3vw,20vw"],
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      srcSet: [
        "https://source.unsplash.com/2ShvY8Lf6l0/500x375 20w",
        "https://source.unsplash.com/2ShvY8Lf6l0/800x600 20w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1024x768 304w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 30w",
      ],
      sizes: ["(min-width: 480px) 20vw,(min-width: 1024px) 20.3vw,20vw"],
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
      srcSet: [
        "https://source.unsplash.com/Dm-qxdynoEc/500x500 500w",
        "https://source.unsplash.com/Dm-qxdynoEc/800x800 800w",
        "https://source.unsplash.com/Dm-qxdynoEc/1024x1024 1024w",
        "https://source.unsplash.com/Dm-qxdynoEc/1600x1600 1600w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
      srcSet: [
        "https://source.unsplash.com/qDkso9nvCg0/375x500 375w",
        "https://source.unsplash.com/qDkso9nvCg0/600x800 600w",
        "https://source.unsplash.com/qDkso9nvCg0/768x1024 768w",
        "https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
      srcSet: [
        "https://source.unsplash.com/iecJiKe_RNg/375x500 375w",
        "https://source.unsplash.com/iecJiKe_RNg/600x800 600w",
        "https://source.unsplash.com/iecJiKe_RNg/768x1024 768w",
        "https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
      srcSet: [
        "https://source.unsplash.com/epcsn8Ed8kY/375x500 375w",
        "https://source.unsplash.com/epcsn8Ed8kY/600x800 600w",
        "https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w",
        "https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
      srcSet: [
        "https://source.unsplash.com/NQSWvyVRIJk/500x375 500w",
        "https://source.unsplash.com/NQSWvyVRIJk/800x600 800w",
        "https://source.unsplash.com/NQSWvyVRIJk/1024x768 1024w",
        "https://source.unsplash.com/NQSWvyVRIJk/1600x1200 1600w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
      srcSet: [
        "https://source.unsplash.com/zh7GEuORbUw/375x500 375w",
        "https://source.unsplash.com/zh7GEuORbUw/600x800 600w",
        "https://source.unsplash.com/zh7GEuORbUw/768x1024 768w",
        "https://source.unsplash.com/zh7GEuORbUw/1200x1600 1200w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
      srcSet: [
        "https://source.unsplash.com/PpOHJezOalU/500x375 500w",
        "https://source.unsplash.com/PpOHJezOalU/800x600 800w",
        "https://source.unsplash.com/PpOHJezOalU/1024x768 1024w",
        "https://source.unsplash.com/PpOHJezOalU/1600x1200 1600w",
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3,
    },
  ];

  return (
    <div className='w-full'>
      {/* <Gallery photos={photos} onClick={openLightbox} direction="row"/> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {photos.map((image, i) => {
          const stylename = i
          return(
            <Imgix
          sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={image.src}
          imgixParams={{
            fit: "crop",
            fm: "jpg",
          }}
          srcset={image.srcset}
          className={`${i == 1 ? 'col-start-2 col-span-2 ' : i == 2 ? 'col-start-2 col-end-2' : i == 3 ? 'col-start-3 col-end-2' : ''} w-full lg:h-48 xl:h-60 md:h-16 h-auto` }
        />
          )
          
          
})}
        
      </div>
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
      <div className="cursor-pointer text-center mx-auto mt-5">
          <p className='uppercase font-Open_Sans text-animationTitle text-2xl'>Show More</p>
        </div>
    </div>
  );
}

export default GalleryPhoto;
