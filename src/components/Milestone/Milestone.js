import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import MilestoneImage from "../../images/milestone.png";
const years = [1, 2, 3, 4, 5, 6];
const Milestone = () => {
  const res = useStaticQuery(graphql`
    query MilestoneQuery {
      datoCmsMilestone {
        id
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

  const { items } = res?.datoCmsMilestone;
  return (
    // <div
    //   className=""
    //   // lg:-mt-28 2xl:-mt-10 mt-32
    // >

    // </div>
    <div>
      <div className="flex justify-center ">
        <img src={MilestoneImage} alt="" className="w-full" />
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 justify-items-center md:gap-4 gap-3 gap-y-5 md:gap-y-0 mt-10 md:mt-0">
        {items.map((item) => {
          return (
            <>
              <div className="">
                <p className="text-aboutTitle md:text-base font-Poppins 2xl:text-2xl text-xl font-semibold text-left ">
                  {item.title}
                </p>
                <div className="w-full">
                  <ul className="list-disc text-milestoneList lg:text-base md:text-xs md:mt-4 mt-2  w-auto pl-5">
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
