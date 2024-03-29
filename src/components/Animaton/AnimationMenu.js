import React, { useState } from "react";
import { scrollTo } from "../Scroll/ScrollTo";
import { Five, Four, One, Six, Three, Two } from "./font";
const AnimationMenu = ({setAnimation, animation,setPage }) => {
  const [hoverEvent, setHoverEvent] = useState(null);
  
  return (
    <div className={`max-w-{1920} relative`}>
      <h1 className="z-50 absolute font-Poppins font-extrabold text-7xl pl-8 pb-4 text-stroke md:top-32 top-8 md:left-16">
        <span>
          <svg
            className="w-11/12 md:w-auto"
            width="595"
            height="74"
            viewBox="0 0 595 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.10419 18.2498L4.10751 18.2432C6.93051 12.6066 10.9383 8.20094 16.0914 5.09204C21.2547 1.91461 27.1298 0.371989 33.6232 0.371989C41.8546 0.371989 48.994 2.75709 54.8398 7.69473C60.6799 12.565 64.4024 19.2051 66.0476 27.4084L66.8683 31.5005H42.6518L41.7958 29.5698C40.928 27.6125 39.7828 26.2463 38.3878 25.3232L38.3697 25.3112L38.3518 25.299C37.0101 24.3842 35.3859 23.8748 33.3628 23.8748C30.2953 23.8748 28.0547 25.0036 26.3249 27.2168C24.6089 29.424 23.586 32.5788 23.586 37.0465C23.586 41.5656 24.6047 44.7881 26.3245 47.0613C28.0438 49.2028 30.284 50.3112 33.3628 50.3112C35.3859 50.3112 37.0101 49.8018 38.3518 48.887L38.3697 48.8748L38.3878 48.8628C39.7828 47.9397 40.928 46.5735 41.7958 44.6162L42.6518 42.6855H66.8683L66.0476 46.7776C64.4019 54.983 60.68 61.6481 54.8478 66.5775L54.8392 66.5847L54.8307 66.5919C48.9838 71.4641 41.8479 73.814 33.6232 73.814C27.1363 73.814 21.2663 72.3057 16.1045 69.1949L16.0916 69.187L16.0786 69.1791C10.9438 66.0158 6.94033 61.6231 4.1152 56.0511L4.10417 56.0293L4.09343 56.0074C1.33787 50.3774 0 44.0293 0 37.0465C0 30.1208 1.33985 23.8288 4.10089 18.2565L4.10419 18.2498ZM23.9016 49.2291C21.5869 46.1912 20.4296 42.1303 20.4296 37.0465C20.4296 32.0247 21.5869 28.0258 23.9016 25.0499C26.2741 22.012 29.4279 20.4931 33.3628 20.4931C35.909 20.4931 38.1368 21.1441 40.0464 22.446C42.0139 23.748 43.5474 25.6389 44.6468 28.1188H62.9617C62.7279 26.9534 62.4495 25.8262 62.1264 24.7371C60.3696 18.8157 57.2918 14.0221 52.8928 10.3564C47.6848 5.95461 41.2616 3.75369 33.6232 3.75369C27.6051 3.75369 22.2813 5.17963 17.652 8.03153C13.0226 10.8214 9.43491 14.7583 6.88877 19.8421C4.4005 24.8639 3.15637 30.5987 3.15637 37.0465C3.15637 43.5563 4.4005 49.3531 6.88877 54.4369C9.43491 59.4587 13.0226 63.3956 17.652 66.2475C22.2813 69.0374 27.6051 70.4323 33.6232 70.4323C41.2616 70.4323 47.6848 68.2624 52.8928 63.9225C57.2924 60.2041 60.3704 55.3795 62.1271 49.4489C62.4499 48.359 62.7281 47.2318 62.9617 46.0672H44.6468C43.5474 48.5471 42.0139 50.438 40.0464 51.74C38.1368 53.0419 35.909 53.6929 33.3628 53.6929C29.4279 53.6929 26.2741 52.205 23.9016 49.2291ZM100.376 69.2907L100.363 69.2831C95.0837 66.08 90.8671 61.6646 87.7515 56.0785L87.74 56.0578L87.7287 56.0368C84.65 50.3333 83.1382 43.9438 83.1382 36.9535C83.1382 29.9637 84.6499 23.598 87.737 17.9478L87.74 17.9423L87.743 17.9369C90.8597 12.2808 95.0857 7.85051 100.389 4.70173C105.68 1.55959 111.476 0 117.716 0C124.005 0 129.806 1.55534 135.051 4.70591C140.354 7.85657 144.554 12.2914 147.613 17.956C150.697 23.6043 152.207 29.9671 152.207 36.9535C152.207 43.9438 150.696 50.3333 147.617 56.0368L147.613 56.0446L147.609 56.0522C144.549 61.6528 140.354 66.0766 135.069 69.2831L135.057 69.2907L135.044 69.2983C129.752 72.4404 123.956 74 117.716 74C111.476 74 105.68 72.4404 100.389 69.2983L100.376 69.2907ZM144.885 19.6561C142.107 14.5103 138.317 10.5114 133.514 7.65955C128.769 4.80765 123.503 3.3817 117.716 3.3817C111.987 3.3817 106.722 4.80765 101.919 7.65955C97.1157 10.5114 93.2965 14.5103 90.461 19.6561C87.6834 24.7399 86.2946 30.5057 86.2946 36.9535C86.2946 43.4013 87.6834 49.1981 90.461 54.3439C93.2965 59.4277 97.1157 63.4266 101.919 66.3405C106.722 69.1924 111.987 70.6183 117.716 70.6183C123.445 70.6183 128.711 69.1924 133.514 66.3405C138.317 63.4266 142.107 59.4277 144.885 54.3439C147.662 49.1981 149.051 43.4013 149.051 36.9535C149.051 30.5057 147.662 24.7399 144.885 19.6561ZM125.598 46.891L125.61 46.8767C127.517 44.6013 128.622 41.416 128.622 36.9535C128.622 32.3386 127.504 29.1509 125.632 26.963L125.609 26.936L125.586 26.9085C123.79 24.716 121.299 23.5028 117.716 23.5028C114.061 23.5028 111.547 24.7262 109.759 26.9085L109.749 26.9215L109.738 26.9344C107.91 29.121 106.811 32.3195 106.811 36.9535C106.811 41.5005 107.898 44.7189 109.749 46.9852C111.529 49.1077 114.047 50.3112 117.716 50.3112C121.299 50.3112 123.79 49.0981 125.586 46.9055L125.598 46.891ZM107.387 49.2291C104.899 46.1912 103.655 42.0993 103.655 36.9535C103.655 31.7457 104.899 27.6538 107.387 24.6779C109.875 21.64 113.318 20.1211 117.716 20.1211C122.056 20.1211 125.47 21.64 127.959 24.6779C130.505 27.6538 131.778 31.7457 131.778 36.9535C131.778 42.0373 130.505 46.0982 127.959 49.1361C125.47 52.174 122.056 53.6929 117.716 53.6929C113.318 53.6929 109.875 52.205 107.387 49.2291ZM233.896 73.349H212.032L194.228 44.555V73.349H170.903V1.02296H192.779L210.57 30.1631V1.02296H233.896V73.349ZM213.727 41.5103L191.072 4.40466H174.059V69.9673H191.072V33.3266L213.727 69.9673H230.74V4.40466H213.727V41.5103ZM307.038 1.02296V22.2938H290.719V73.349H267.394V22.2938H251.249V1.02296H307.038ZM270.55 18.9121V69.9673H287.563V18.9121H303.882V4.40466H254.405V18.9121H270.55ZM367.235 26.3181V46.938H347.705V51.9851H369.839V73.349H324.38V1.02296H369.839V22.3868H347.705V26.3181H367.235ZM344.549 19.0051H366.683V4.40466H327.536V69.9673H366.683V55.3668H344.549V43.5563H364.079V29.6998H344.549V19.0051ZM452.286 73.349H430.422L412.619 44.5549V73.349H389.293V1.02296H411.169L428.961 30.163V1.02296H452.286V73.349ZM432.117 41.5103L409.462 4.40466H392.45V69.9673H409.462V33.3266L432.117 69.9673H449.13V4.40466H432.117V41.5103ZM525.428 1.02296V22.2938H509.11V73.349H485.784V22.2938H469.64V1.02296H525.428ZM488.941 18.9121V69.9673H505.954V18.9121H522.272V4.40466H472.796V18.9121H488.941ZM549.603 67.9422L549.593 67.934C544.186 63.6078 541.344 57.4237 540.952 49.7869L540.769 46.2194H560.868C557.354 44.925 554.389 43.6572 552.006 42.4101L551.966 42.3892L551.927 42.367C549.061 40.7588 546.581 38.4776 544.48 35.5933L544.454 35.5574L544.428 35.5209C542.133 32.1891 541.121 28.0469 541.121 23.376C541.121 18.5795 542.248 14.2788 544.643 10.649C546.984 7.0384 550.201 4.35845 554.174 2.58505C558.09 0.836868 562.447 0 567.192 0C574.786 0 581.215 1.9194 586.151 6.1129C591.244 10.3253 593.888 16.284 594.215 23.5856L594.374 27.1297H573.731C573.836 27.1699 573.943 27.2106 574.05 27.2516C577.996 28.7038 581.33 30.1881 584.008 31.7184C586.978 33.3179 589.498 35.5968 591.558 38.5043C593.927 41.696 595 45.6381 595 50.066C595 54.5684 593.926 58.7046 591.737 62.3776C589.589 66.0798 586.476 68.9264 582.55 70.9614C578.616 73.0308 574.071 74 569.015 74C561.399 74 554.851 72.0704 549.614 67.9504L549.603 67.9422ZM581.167 67.9214C584.639 66.1235 587.272 63.6745 589.066 60.5747C590.918 57.4748 591.844 53.9719 591.844 50.066C591.844 46.2222 590.918 43.0603 589.066 40.5804C587.272 38.0385 585.102 36.0855 582.556 34.7216C580.068 33.2956 576.885 31.8697 573.008 30.4437C570.404 29.4518 568.437 28.6458 567.106 28.0258C565.775 27.3438 564.646 26.5689 563.72 25.7009C562.852 24.7709 562.418 23.686 562.418 22.446C562.418 20.9581 562.823 19.8111 563.634 19.0051C564.444 18.1992 565.485 17.7962 566.758 17.7962C568.437 17.7962 569.796 18.2922 570.838 19.2841C571.938 20.2761 572.516 21.764 572.574 23.748H591.062C591.01 22.5723 590.891 21.4451 590.705 20.3663C589.873 15.5286 587.707 11.665 584.205 8.7755C579.981 5.17963 574.31 3.3817 567.192 3.3817C562.795 3.3817 558.86 4.15667 555.388 5.70661C551.916 7.25656 549.196 9.55048 547.228 12.5884C545.261 15.5643 544.277 19.1601 544.277 23.376C544.277 27.5298 545.174 30.9087 546.968 33.5126C548.82 36.0545 550.961 38.0075 553.391 39.3714C555.879 40.6734 559.12 42.0373 563.113 43.4633C566.874 44.7652 569.594 45.9432 571.272 46.9971C572.95 48.0511 573.789 49.5391 573.789 51.461C573.789 52.9489 573.268 54.1269 572.227 54.9949C571.243 55.8008 569.97 56.2038 568.408 56.2038C566.672 56.2038 565.254 55.6768 564.154 54.6229C563.055 53.5689 562.418 51.895 562.245 49.601H544.104C544.164 50.7751 544.288 51.9023 544.476 52.9827C545.369 58.1215 547.704 62.2021 551.482 65.2245C556.053 68.8204 561.898 70.6183 569.015 70.6183C573.702 70.6183 577.753 69.7193 581.167 67.9214ZM570.3 52.3161C570.52 52.1307 570.633 51.9605 570.633 51.461C570.633 50.8573 570.487 50.4237 569.676 49.9145C568.738 49.3256 567.293 48.6292 565.278 47.8347L565.391 49.3278C565.529 51.1485 565.989 51.8442 566.259 52.1027C566.68 52.5061 567.303 52.8221 568.408 52.8221C569.45 52.8221 569.995 52.5623 570.3 52.3161ZM565.889 23.239C566.538 23.8302 567.369 24.4074 568.417 24.9493C568.726 25.0924 569.075 25.2479 569.465 25.4158L569.419 23.8536C569.381 22.5347 569.033 22.0764 568.805 21.8708L568.773 21.8417L568.741 21.8116C568.39 21.4775 567.829 21.1779 566.758 21.1779C566.153 21.1779 565.919 21.346 565.781 21.4832C565.771 21.4932 565.575 21.6413 565.575 22.446C565.575 22.7103 565.628 22.9368 565.889 23.239Z"
              fill="#2D3038"
            />
          </svg>
        </span>
      </h1>
      <div className="w-full md:flex grid grid-cols-3 md:justify-between md:space-x-4 lg:space-x-8 xl:space-x-14 space-x-5 md:items-stretch lg:pt-20 lg:pb-10 xl:px-14 px-5 md:pt-20 md:pb-24 bg-white min-h-screen">
        <div
          onMouseEnter={() => setHoverEvent("home")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage("home");
            scrollTo({ id: "home" });
            setAnimation(false);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full flex flex-col flex-wrap "
        >
          <div
            className={`${
              hoverEvent === "home" ? "border-2 border-hovercolor" : "border-2"
            } grow bg-itemone w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke justify-start xl:justify-center`}
          >
            <One color={hoverEvent === "home" && "#C4C4C4"}></One>
          </div>
          <span className="text-center font-Poppins font-semibold mt-10">
            HOME
          </span>
        </div>
        
        <div
          onMouseEnter={() => setHoverEvent("about")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage('about');
            setAnimation(true);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full  flex flex-col flex-wrap"
        >
          <div
            className={`${
              hoverEvent === "about" ? "border-2 border-hovercolor" : "border-2"
            } grow bg-itemtwo w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke justify-start xl:justify-center`}
          >
            {/* <img src={two}/> */}
            <Two color={hoverEvent === "about" && "#C4C4C4"}></Two>
          </div>
          <div className=" cursor-pointer text-center font-Poppins font-semibold	 mt-10">
            About
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverEvent("milestone")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage("milestone");
            setAnimation(true);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full  flex flex-col flex-wrap "
        >
          <div
            className={`${
              hoverEvent === "milestone"
                ? "border-2 border-hovercolor"
                : "border-2"
            } grow bg-itemthree w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke justify-start xl:justify-center`}
          >
            <Three color={hoverEvent === "milestone" && "#C4C4C4"} />
          </div>
          <div className="cursor-pointer text-center font-Poppins font-semibold	mt-10">
            Milestone
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverEvent("contribution")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage("contributions");
            setAnimation(true);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full  flex flex-col flex-wrap "
        >
          <div
            className={`${
              hoverEvent === "contribution"
                ? "border-2 border-hovercolor"
                : "border-2"
            } grow bg-itemfour w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke justify-start xl:justify-center`}
          >
            <Four color={hoverEvent === "contribution" && "#C4C4C4"} />
          </div>
          <div className="cursor-pointer text-center font-Poppins font-semibold	mt-10">
            Contribution
          </div>
        </div>

        <div
          onMouseEnter={() => setHoverEvent("gallery")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage("gallery");
            setAnimation(true);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full  flex flex-col flex-wrap "
        >
          <div
            className={`${
              hoverEvent === "gallery"
                ? "border-2 border-hovercolor"
                : "border-2"
            } grow bg-itemfive w-full flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke justify-start xl:justify-center`}
          >
            <Five color={hoverEvent === "gallery" && "#C4C4C4"} />
          </div>
          <div className="cursor-pointer text-center font-Poppins font-semibold	 mt-10">
            Gallery
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverEvent("contact me")}
          onMouseLeave={() => setHoverEvent(false)}
          onClick={() => {
            setPage("contact");
            setAnimation(true);
          }}
          className="hover:text-animationTitle text-aboutSubtitle cursor-pointer w-full flex flex-col flex-wrap "
        >
          <div
            className={`${
              hoverEvent === "contact"
                ? "border-2 border-hovercolor"
                : "border-2"
            } grow bg-itemsix  w-full justify-start xl:justify-center flex items-end font-Poppins font-extrabold text-8xl pl-8 pb-4 text-stroke`}
          >
            <Six color={hoverEvent === "contact" && "#C4C4C4"} />
          </div>
          <div className="cursor-pointer text-center font-Poppins font-semibold lg:mt-10 mt-6">
            Let's get in touch
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationMenu;
