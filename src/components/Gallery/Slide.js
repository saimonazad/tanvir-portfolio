import React from "react";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
  getYearData,
  isMobile
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = (i) => {
    console.log("i", i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }
 

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 60 : 50 + (offsetFromMiddle * (isMobile ? 35 : 40)) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <div
          className=" absolute h-4/6 top-4/5 flex items-center justify-center origin-[50%_50%]"
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <div
            onClick={() => getYearData()}
            className=" cursor-pointer absolute max-w-2/4 w-auto h-full lg:text-6xl md:text-4xl text-2xl font-PT_Serif flex items-center justify-center origin-[50%_50%]"
            // onClick={() => {moveSlide(offsetFromMiddle)}}
          >
            {content}
          </div>
        </div>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
