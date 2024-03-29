import React, { useEffect, useState } from "react";
import { CloseIcon, Facebook, LinkedIn, Twitter, Youtube } from "../../icons";
import ProfilePic from "../../images/hero-image.png";
import AnimationComponent from "../Animaton/AnimationComponent";
import AnimationMenu from "../Animaton/AnimationMenu";
import AnimationMobile from "../Animaton/AnimationMobile";
import { scrollTo } from "../Scroll/ScrollTo";
import TextAnimationLottie from "./TextAnimationLottie";
import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import NewAnimationMenu from "../NewAnimationMenu/NewAnimationMenu";
import Fade from "react-reveal/Fade";

const HeroSection = ({ successMessage, setSuccessMessage, setMobileMenu }) => {
  const [page, setPage] = useState(null);
  const [animation, setAnimation] = useState(false);
  // const [switchPage, setSwitchPage] = useState(null);
  useEffect(() => {
    if (page === "home") {
      window.location.replace("/");
    }
    if (page !== "home" && page !== null) {
      setTimeout(() => {
        window.location.replace(`/${page}`);
        setPage(null);
        setAnimation(false);
        // setSwitchPage(page);
      }, 3400);
    }
  }, [page?.length > 0]);
  // console.log("page", window.location.replace(`/${page}`));
  const news = useStaticQuery(graphql`
    query MyQuery {
      datoCmsNews {
        title {
          value
        }
      }
    }
  `);
  const [snackbar, setSnackbar] = useState(false);
  useEffect(() => {
    if (news?.datoCmsNews?.title && news?.datoCmsNews?.title?.value?.document?.children[0]?.children[0]
        ?.value !== "") {
      setSnackbar(true);
    }
  }, [news]);

  return (
    <div>
      {page === null && animation === false && (
        <>
          {snackbar && (
            <div className="shadow-md px-10 py-2 bg-white w-full md:absolute top-0">
              <p className="w-[60%] mx-auto text-center font-bold font-gotham text-xs text-animationTitle tracking-wider truncate">
                <StructuredText data={news?.datoCmsNews?.title} />
              </p>
              <div
                onClick={() => setSnackbar(false)}
                className="absolute top-1 right-2 cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          )}
          <div className="h-screen flex flex-col" id="home">
            <div className="grow-0 md:absolute md:top-6% md:left-4% top-4% mx-auto flex justify-center my-5 md:my-0">
              <div className="flex gap-5">
                <span>
                  <a href="https://www.facebook.com/dreamerz.tanvir">
                    <Facebook color={"#2D3038"} />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/tanvirkhandll/">
                    <LinkedIn color={"#2D3038"} />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/Tanvir_dreamerz">
                    <Twitter color={"#2D3038"} />
                  </a>
                </span>
                <span>
                  <Youtube color={"#2D3038"} pathColor={"#F6F6F6"} />
                </span>
              </div>
            </div>
            <div
              className={`grow justify-between flex md:justify-around w-auto md:flex-row items-center flex-col md:px-10 text-center md:text-left`}
            >
              <div className="pt-[10%] md:pt-0">
                <Fade left>
                  <TextAnimationLottie />
                  <h1 className="tracking-wide md:text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-black font-impact text-xl text-heroTitle uppercase py-3">
                    Tanvir Hossain Khan
                  </h1>
                  <p className="text-heroTitle font-semibold xl:text-2xl 2xl:text-4xl lg:text-2xl md:text-xl text-sm font-Montserrat uppercase">
                    Entrepreneur
                  </p>
                </Fade>
              </div>

              <Fade right>
                <div className="">
                  <img
                    className="max-h-max md:h-screen w-auto "
                    src={ProfilePic}
                    alt="Profile Pic"
                  />
                </div>
              </Fade>
            </div>
            <div
              className={`absolute md:left-4% bottom-4% cursor-pointer left-4% `}
            >
              <a onClick={() => scrollTo({ id: "animationMenu" })}>
                <svg
                  width="48"
                  height="131"
                  viewBox="0 0 48 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-bounce"
                >
                  <path
                    d="M13.86 77.2H13.82C13.2067 77.2 12.68 77.3 12.24 77.5C11.8 77.6867 11.42 77.9733 11.1 78.36C10.7667 78.7333 10.4867 79.2 10.26 79.76C10.02 80.3067 9.80667 80.9333 9.62 81.64C9.46 82.24 9.32 82.74 9.2 83.14C9.08 83.5267 8.95333 83.8333 8.82 84.06C8.68667 84.2867 8.54 84.4467 8.38 84.54C8.20667 84.62 8.00667 84.66 7.78 84.66H7.74C7.39333 84.66 7.10667 84.5133 6.88 84.22C6.64 83.9133 6.52 83.46 6.52 82.86C6.52 82.26 6.64667 81.66 6.9 81.06C7.14 80.46 7.47333 79.8467 7.9 79.22L5.58 77.62C5.00667 78.34 4.56667 79.1333 4.26 80C3.95333 80.8533 3.8 81.7933 3.8 82.82C3.8 83.54 3.9 84.2 4.1 84.8C4.3 85.4 4.58667 85.92 4.96 86.36C5.33333 86.7867 5.78 87.12 6.3 87.36C6.80667 87.6 7.38 87.72 8.02 87.72H8.06C8.75333 87.72 9.33333 87.6133 9.8 87.4C10.2667 87.1733 10.66 86.86 10.98 86.46C11.2867 86.06 11.5467 85.5733 11.76 85C11.9733 84.4267 12.1667 83.7867 12.34 83.08C12.4867 82.4933 12.6267 82.02 12.76 81.66C12.8933 81.2867 13.0267 81 13.16 80.8C13.2933 80.5867 13.44 80.4467 13.6 80.38C13.7467 80.3 13.92 80.26 14.12 80.26H14.16C14.5733 80.26 14.9 80.44 15.14 80.8C15.3667 81.1467 15.48 81.64 15.48 82.28C15.48 83.08 15.3267 83.82 15.02 84.5C14.7133 85.1667 14.3 85.82 13.78 86.46L15.96 88.28C16.72 87.44 17.2867 86.5067 17.66 85.48C18.02 84.4533 18.2 83.4067 18.2 82.34C18.2 81.58 18.1067 80.8867 17.92 80.26C17.72 79.6333 17.44 79.0933 17.08 78.64C16.7067 78.1867 16.2533 77.8333 15.72 77.58C15.1733 77.3267 14.5533 77.2 13.86 77.2ZM15.74 61.227L13.76 63.187C14.2667 63.7337 14.6667 64.287 14.96 64.847C15.2533 65.3937 15.4 66.067 15.4 66.867C15.4 67.467 15.2867 68.0204 15.06 68.527C14.82 69.0204 14.5 69.447 14.1 69.807C13.7 70.1537 13.2333 70.427 12.7 70.627C12.1667 70.827 11.6 70.927 11 70.927H10.96C10.36 70.927 9.8 70.827 9.28 70.627C8.74667 70.427 8.28 70.147 7.88 69.787C7.48 69.427 7.16667 69.0004 6.94 68.507C6.71333 68.0004 6.6 67.4537 6.6 66.867C6.6 66.1604 6.74 65.527 7.02 64.967C7.3 64.3937 7.68667 63.8337 8.18 63.287L5.92 61.327C5.6 61.647 5.30667 61.9937 5.04 62.367C4.77333 62.7404 4.54667 63.147 4.36 63.587C4.17333 64.027 4.02667 64.5204 3.92 65.067C3.81333 65.6004 3.76 66.1937 3.76 66.847C3.76 67.927 3.95333 68.9137 4.34 69.807C4.71333 70.7004 5.23333 71.467 5.9 72.107C6.55333 72.747 7.32 73.247 8.2 73.607C9.06667 73.967 10 74.147 11 74.147H11.04C12.04 74.147 12.98 73.967 13.86 73.607C14.74 73.247 15.5067 72.747 16.16 72.107C16.8 71.467 17.3067 70.707 17.68 69.827C18.0533 68.947 18.24 67.9937 18.24 66.967C18.24 66.287 18.18 65.6737 18.06 65.127C17.9533 64.5804 17.7933 64.0804 17.58 63.627C17.3533 63.1604 17.0867 62.7337 16.78 62.347C16.4733 61.9604 16.1267 61.587 15.74 61.227ZM18 45.6614L13 49.0814C12.6667 48.1881 12.1467 47.4681 11.44 46.9214C10.72 46.3614 9.79333 46.0814 8.66 46.0814H8.62C7.16667 46.0814 6.03333 46.5481 5.22 47.4814C4.40667 48.4014 4 49.6947 4 51.3614L4 57.7614H18V54.6814H13.52V52.2614L18 49.2614V45.6614ZM8.82 49.2014C9.42 49.2014 9.9 49.4081 10.26 49.8214C10.62 50.2214 10.8 50.8014 10.8 51.5614L10.8 54.6814H6.78V51.6214C6.78 50.8614 6.94667 50.2681 7.28 49.8414C7.61333 49.4147 8.11333 49.2014 8.78 49.2014H8.82ZM11 28.0483H10.96C9.96 28.0483 9.02667 28.2349 8.16 28.6083C7.28 28.9683 6.52 29.4816 5.88 30.1483C5.22667 30.8016 4.71333 31.5816 4.34 32.4883C3.95333 33.3949 3.76 34.3883 3.76 35.4683C3.76 36.5483 3.95333 37.5483 4.34 38.4683C4.71333 39.3749 5.23333 40.1616 5.9 40.8283C6.55333 41.4816 7.32 41.9949 8.2 42.3683C9.06667 42.7416 10 42.9283 11 42.9283H11.04C12.04 42.9283 12.98 42.7483 13.86 42.3883C14.7267 42.0149 15.4867 41.5016 16.14 40.8483C16.78 40.1816 17.2933 39.3949 17.68 38.4883C18.0533 37.5816 18.24 36.5883 18.24 35.5083C18.24 34.4283 18.0533 33.4349 17.68 32.5283C17.2933 31.6083 16.7733 30.8216 16.12 30.1683C15.4533 29.5016 14.6867 28.9816 13.82 28.6083C12.94 28.2349 12 28.0483 11 28.0483ZM11.04 31.2683C11.64 31.2683 12.2067 31.3749 12.74 31.5883C13.26 31.7883 13.72 32.0749 14.12 32.4483C14.52 32.8083 14.8333 33.2483 15.06 33.7683C15.2867 34.2883 15.4 34.8549 15.4 35.4683C15.4 36.0949 15.2867 36.6683 15.06 37.1883C14.82 37.6949 14.5 38.1416 14.1 38.5283C13.7 38.9016 13.2333 39.1949 12.7 39.4083C12.1667 39.6083 11.6 39.7083 11 39.7083H10.96C10.36 39.7083 9.8 39.6083 9.28 39.4083C8.74667 39.1949 8.28 38.9083 7.88 38.5483C7.48 38.1749 7.16667 37.7349 6.94 37.2283C6.71333 36.7083 6.6 36.1349 6.6 35.5083C6.6 34.8949 6.72 34.3283 6.96 33.8083C7.18667 33.2883 7.5 32.8416 7.9 32.4683C8.3 32.0816 8.76667 31.7883 9.3 31.5883C9.83333 31.3749 10.4 31.2683 11 31.2683H11.04ZM18 14.2561H15.2L15.2 21.2361H4V24.3161H18L18 14.2561ZM18 0.873281H15.2V7.85328H4V10.9333H18V0.873281Z"
                    fill="#2D3038"
                  />
                  <path
                    d="M35 74.42H34.96C33.9733 74.42 33.06 74.6 32.22 74.96C31.3667 75.32 30.6267 75.8333 30 76.5C29.3733 77.1533 28.8867 77.94 28.54 78.86C28.18 79.7667 28 80.7667 28 81.86V87.32H42V81.86C42 80.7667 41.82 79.7667 41.46 78.86C41.1 77.94 40.6067 77.1533 39.98 76.5C39.3533 75.8333 38.6133 75.32 37.76 74.96C36.9067 74.6 35.9867 74.42 35 74.42ZM35.04 77.64C35.6667 77.64 36.2333 77.7467 36.74 77.96C37.2467 78.16 37.6867 78.4467 38.06 78.82C38.4333 79.18 38.72 79.62 38.92 80.14C39.12 80.66 39.22 81.2333 39.22 81.86V84.24H30.78V81.86C30.78 81.2333 30.8867 80.66 31.1 80.14C31.3 79.62 31.5867 79.18 31.96 78.82C32.3333 78.4467 32.78 78.16 33.3 77.96C33.82 77.7467 34.3867 77.64 35 77.64H35.04ZM35 56.4155H34.96C33.96 56.4155 33.0267 56.6021 32.16 56.9755C31.28 57.3355 30.52 57.8488 29.88 58.5155C29.2267 59.1688 28.7133 59.9488 28.34 60.8555C27.9533 61.7621 27.76 62.7555 27.76 63.8355C27.76 64.9155 27.9533 65.9155 28.34 66.8355C28.7133 67.7421 29.2333 68.5288 29.9 69.1955C30.5533 69.8488 31.32 70.3621 32.2 70.7355C33.0667 71.1088 34 71.2955 35 71.2955H35.04C36.04 71.2955 36.98 71.1155 37.86 70.7555C38.7267 70.3821 39.4867 69.8688 40.14 69.2155C40.78 68.5488 41.2933 67.7621 41.68 66.8555C42.0533 65.9488 42.24 64.9555 42.24 63.8755C42.24 62.7955 42.0533 61.8021 41.68 60.8955C41.2933 59.9755 40.7733 59.1888 40.12 58.5355C39.4533 57.8688 38.6867 57.3488 37.82 56.9755C36.94 56.6021 36 56.4155 35 56.4155ZM35.04 59.6355C35.64 59.6355 36.2067 59.7421 36.74 59.9555C37.26 60.1555 37.72 60.4421 38.12 60.8155C38.52 61.1755 38.8333 61.6155 39.06 62.1355C39.2867 62.6555 39.4 63.2221 39.4 63.8355C39.4 64.4621 39.2867 65.0355 39.06 65.5555C38.82 66.0621 38.5 66.5088 38.1 66.8955C37.7 67.2688 37.2333 67.5621 36.7 67.7755C36.1667 67.9755 35.6 68.0755 35 68.0755H34.96C34.36 68.0755 33.8 67.9755 33.28 67.7755C32.7467 67.5621 32.28 67.2755 31.88 66.9155C31.48 66.5421 31.1667 66.1021 30.94 65.5955C30.7133 65.0755 30.6 64.5021 30.6 63.8755C30.6 63.2621 30.72 62.6955 30.96 62.1755C31.1867 61.6555 31.5 61.2088 31.9 60.8355C32.3 60.4488 32.7667 60.1555 33.3 59.9555C33.8333 59.7421 34.4 59.6355 35 59.6355H35.04ZM28 32.5233V35.7433L37.48 38.6433L27.96 41.7833V44.4233L37.48 47.5633L28 50.4633V53.7633L42.1 48.9833V46.3033L32.94 43.1433L42.1 39.9833V37.3033L28 32.5233ZM42 16.8019H28V19.8419H36.62L28 26.4019V29.2419H42V26.2019H33.1L42 19.4219V16.8019Z"
                    fill="#2D3038"
                  />
                  <path
                    d="M12 101L24 113L36 101"
                    stroke="#2D3038"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="" id="animationMenu">
            <div className="md:hidden block h-screen">
              <AnimationMobile
              // setPage={setPage}
              // animation={animation}
              // setAnimation={setAnimation}
              // setSwitchPage={setSwitchPage}
              // switchPage={switchPage}
              />
            </div>
            <div className="md:block hidden mt-5">
              {/* <AnimationMenu
                setPage={setPage}
                animation={animation}
                setAnimation={setAnimation}
              /> */}
              <NewAnimationMenu
                setPage={setPage}
                animation={animation}
                setAnimation={setAnimation}
              />
            </div>
          </div>
        </>
      )}
      {animation && <AnimationComponent />}
    </div>
  );
};

export default HeroSection;
