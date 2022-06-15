import React from "react";
import Lottie from "react-lottie";
import animationData from "../../fonts/Animation.json";

export default function TextAnimationLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMinYMin slice",
    },
    className: "lottie-animation",
  };

  return (
    <div className="animatedText">
      <Lottie options={defaultOptions} height={30} width={150} />
    </div>
  );
}
