import { Link } from "gatsby";
import React from "react";
import "./menu.css";
import homeBg from "../../images/animate_menu_bg/1.png";
import bioBg from "../../images/animate_menu_bg/2.png";
import milestoneBg from "../../images/animate_menu_bg/3.png";
import contributionBg from "../../images/animate_menu_bg/4.png";
import galleryBg from "../../images/animate_menu_bg/5.png";
import contactBg from "../../images/animate_menu_bg/6.png";
const menuItem = [
  {
    title: "Home",
    subTitle: "Home",
    link: "/home",
    bgImg: homeBg,
  },
  {
    title: "Bio",
    subTitle: "Bio",
    link: "/bio",
    bgImg: bioBg,
  },
  {
    title: "Milestone",
    subTitle: "Milestone",
    link: "/milestone",
    bgImg: milestoneBg,
  },
  {
    title: "Contributions",
    subTitle: "Contributions",
    link: "/contributions",
    bgImg: contributionBg,
  },
  {
    title: "Gallery",
    subTitle: "Gallery",
    link: "/gallery",
    bgImg: galleryBg,
  },
  {
    title: "Let's get in touch",
    subTitle: "Let's get in touch",
    link: "/contact",
    bgImg: contactBg,
  },
];
const NewAnimationMenu = () => {
  if (typeof window !== `undefined` || typeof document !== "undefined") {
    const wrapper = document.querySelectorAll(".cardWrap");

    wrapper.forEach((element) => {
      let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth,
      };

      element.addEventListener("mousemove", (ele) => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 32;
        const angleY = (state.mouseY / state.height) * -32;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -5;
        const posY = (state.mouseY / state.height) * -5;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
      });

      element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
      });
    });
  }

  return (
    <div>
      {/* md:flex grid grid-cols-3 md:justify-between md:space-x-4 lg:space-x-4 xl:space-x-8 space-x-5 md:items-stretch */}
      <div className="w-full grid grid-cols-6 lg:pt-20 lg:pb-10 xl:px-14 px-5 md:pt-20 md:pb-24 bg-white min-h-screen">
        {menuItem.map((item, i) => (
          <div class="cardWrap" key={i}>
            <Link to={item.link}>
              <div class="card">
                <div
                  class="cardBg"
                  style={{
                    backgroundImage: `url(${item.bgImg})`,
                  }}
                ></div>
                <div class="cardInfo text-center">
                  <h3 class="text-base 2xl:text-3xl lg:text-xl ">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAnimationMenu;
