import { graphql, useStaticQuery } from "gatsby";
import React from "react";
// import MilestoneImage from "../../images/milestone.png";
const years = [1, 2, 3, 4, 5, 6];
const Milestone = () => {
  const res = useStaticQuery(graphql`
    query MilestoneQuery {
      datoCmsMilestone {
        id
        milestoneImage {
          url
        }
        items {
          id
          title
          milestones {
            title
          }
        }
      }
    }
  `);

  const { items, milestoneImage } = res?.datoCmsMilestone;
  return (
    <div>
      <div className="flex justify-center ">
        <img src={milestoneImage?.url} alt="" className="w-full" />
      </div>
      <div className="grid grid-cols-2 md:flex justify-center md:gap-4 gap-3 gap-y-5 md:gap-y-0 mt-10 md:mt-0">
        {items.map((item) => {
          return (
            <>
              <div className="md:w-[15%] w-[98%] mx-auto">
                <p className="text-aboutTitle md:text-base font-Poppins 2xl:text-2xl font-semibold text-left ">
                  {item.title}
                </p>
                <div className="w-full">
                  <ul className="list-disc text-milestoneList lg:text-base md:text-xs md:mt-3 mt-2  w-auto pl-5">
                    {item.milestones.map((value) => {
                      return <li>{value.title}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Milestone;
