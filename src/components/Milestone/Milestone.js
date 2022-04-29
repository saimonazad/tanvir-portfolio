import React from "react";
import MilestoneImage from "../../images/milestone.png";

const years = [1, 2, 3, 4, 5, 6];
const Milestone = () => {
  return (
    <div className="md:px-32 md:py-20 md:mt-2 mt-32">
<div className="mx-auto flex items-center flex-col">
      <div className="flex justify-center">
        <img src={MilestoneImage} alt="" className="w-full" />
      </div>
      <div className="overflow-auto grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-6 lg:gap-8 xl:gap-10 md:gap-4 sm:gap-4 sm:px-8  w-full mx-auto auto-rows-max place-items-center">
        {years.map((item, i) => {
          return (
            <>
              <div className="mt-2">
                <p className="text-aboutTitle md:text-base font-Poppins lg:text-2xl text-xl font-semibold ">
                  Year- 0{i + 1}
                </p>
                <div className="w-full">
                  <ul className="list-disc text-milestoneList lg:text-base md:text-xs mt-6 w-auto">
                    <li>milestoneYears</li>
                    <li>milestoneYears</li>
                    <li>milestoneYears</li>
                    <li>milestoneYears</li>
                    <li>milestoneYears</li>
                    <li>milestoneYears</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>

    </div>
    
  );
};

export default Milestone;
