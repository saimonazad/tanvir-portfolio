import React from "react";
import MilestoneImage from "../../images/milestone.png";
import { useStaticQuery, graphql } from "gatsby";
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
  
  const {items} = res?.datoCmsMilestone
  return (
    <div className="">
      <div>
        <div className="flex justify-center">
          <img src={MilestoneImage} alt="" className="w-full" />
        </div>
        <div className="grid grid-cols-6 gap-5">
            {
              items.map((item) => {
                return (
                  <>
                    <div className="">
                      <p className="text-aboutTitle md:text-base font-Poppins 2xl:text-2xl text-xl font-semibold text-left">
                        {item.title}
                      </p>
                      <div className="w-full">
                        <ul className="list-disc text-milestoneList lg:text-base md:text-xs mt-4  w-auto">
                          {
                            item.milestones.map((value) => {
                              return (<li>{value.title}</li>)
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </>
                )
              })
            }
        </div>
      </div>

    </div>
  );
};

export default Milestone;
