import * as React from "react";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@splidejs/react-splide/css";
import Home from "../components/Layout/Home";
import Helmet from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Home | Tanvir Hossain Khan | XR Solution Expert | Game Industry
          Enthusiast
        </title>
        <meta
          name="title"
          content="Home | Tanvir Hossain Khan | XR Solution Expert | Game Industry Enthusiast"
        />
        <meta
          name="description"
          content="Lets connect if you are interested to learn, collaborate, sharing knowledge regarding XR Industry, Gaming Industry & Real Time 3D Render Industry with Dreamerz Lab"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/Fab-Icon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tanvirhossainkhan.com/" />
        <meta
          property="og:title"
          content="Home | Tanvir Hossain Khan | XR Solution Expert | Game Industry Enthusiast"
        />
        <meta
          property="og:description"
          content="Lets connect if you are interested to learn, collaborate, sharing knowledge regarding XR Industry, Gaming Industry & Real Time 3D Render Industry with Dreamerz Lab"
        />
        <meta property="og:image" content="/tanvirOG.webp" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tanvirhossainkhan.com/"
        />
        <meta
          property="twitter:title"
          content="Home | Tanvir Hossain Khan | XR Solution Expert | Game Industry Enthusiast"
        />
        <meta
          property="twitter:description"
          content="Lets connect if you are interested to learn, collaborate, sharing knowledge regarding XR Industry, Gaming Industry & Real Time 3D Render Industry with Dreamerz Lab"
        />
        <meta property="twitter:image" content="/tanvirOG.webp"></meta>
      </Helmet>
      <Home />
    </>
  );
};

export default IndexPage;
