import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import ContributionIcon from "./ContributionIcon";
import LastContributionIcon from "./LastContributionIcon";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ContributionsData = [
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
  {
    text: "He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.",
  },
];
const Contributions = () => {
  const res = useStaticQuery(graphql`
    query ContributionQuery {
      datoCmsContribution {
        id
        contributions {
          id
          text
          image {
            size
            width
            height
            path
            format
            isImage
            notes
            author
            copyright
            filename
            basename
            exifInfo
            mimeType
            blurhash
            originalId
            url
            createdAt
            gatsbyImageData
            alt
            title
            customData
          }
        }
      }
    }
  `);
  console.log(res);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <div className="px-0 font-medium md:mt-[25%] lg:mt-0">
        <div className="xl:h-screen grid md:grid-cols-3 2xl:-mt-32 xl:-mt-36 lg:h-4/5 mt-24 md:mt-0 overflow-auto md:h-fit">
            <div className="flex flex-col 2xl:px-20 px-5 text-center justify-center items-center lg:py-8 py-7 ">
                  <span className="p-3 md:mb-4 xl:mb-10 ">
                    <ContributionIcon color="#373737" bcolor="white" />
                  </span>
                  <p className="text-contributeFont uppercase 2xl:text-2xl sm:text-sm text-xs">
                    He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.”
                  </p>
            </div>
            <div className="flex flex-col 2xl:px-20 px-5 text-center justify-center items-center lg:py-8 py-7 bg-aboutSubtitle ">
                  <span className="p-3 md:mb-4 xl:mb-10 ">
                    <ContributionIcon color="white" bcolor="#373737"/>
                  </span>
                  <p className="text-white uppercase 2xl:text-2xl sm:text-sm text-xs">
                    He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.”
                  </p>
            </div>
            <div className="flex flex-col 2xl:px-20 px-5 text-center justify-center items-center lg:py-8 py-7 ">
                  <span className="p-3 md:mb-4 xl:mb-10 ">
                    <LastContributionIcon/>
                  </span>
                  <p className="text-contributeFont uppercase 2xl:text-2xl sm:text-sm text-xs">
                    He always believes any problem can be solved if we can all work as one and from that idea his belief is “Collaboration is Always Better than Competition.”
                  </p>
            </div>
           
        </div>
    </div>
  );
};

export default Contributions;
