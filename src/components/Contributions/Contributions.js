import React from "react";
// import { ContributionIcon } from "../../icons";
import ContributionIcon from "./ContributionIcon";

const Contributions = () => {
  return (
    <div classNameName="">
      <div className=" dark:bg-gray-900">
        <div className="container px-20 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-3">
            <div className="flex flex-col items-center md:py-5 xl:py-20 px-6 space-y-3 text-center dark:bg-gray-800">
              <span className="inline-block p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500">
                <ContributionIcon color="black"/>
              </span>
              <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-2xl md:text-base">
                He always believes any problem can be solved if we can all work
                as one and from that idea his belief is “Collaboration is Always
                Better than Competition.
              </p>
            </div>

            <div className="flex flex-col items-center md:py-5 xl:py-20 px-6 space-y-3 text-center z-10  bg-aboutSubtitle dark:bg-gray-800">
              <span className="inline-block p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500">
                <ContributionIcon color="#FFFFFF" bcolor='#373737'/>
              </span>
              <p className="text-white dark:text-gray-300 uppercase xl:text-2xl md:text-base">
                He always believes any problem can be solved if we can all work
                as one and from that idea his belief is “Collaboration is Always
                Better than Competition.
              </p>
            </div>
            <div className="flex flex-col items-center md:py-5 xl:py-20 px-6 space-y-3 text-center dark:bg-gray-800">
              <span className="inline-block p-3 md:mb-4 xl:mb-10 dark:text-white dark:bg-blue-500">
                <ContributionIcon color="#D31459"/>
              </span>
              <p className="text-aboutSubtitle dark:text-gray-300 uppercase xl:text-2xl md:text-base">
                He always believes any problem can be solved if we can all work
                as one and from that idea his belief is “Collaboration is Always
                Better than Competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
