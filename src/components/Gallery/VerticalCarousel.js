import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import Slide from "./Slide";

const NavBtn = styled.div`
  border-radius: 3px;
  cursor: pointer;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
  };

  componentDidMount = () => {
    document.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
    });
  };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object,
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 },
  };

  modBySlidesLength = (index) => {
    return mod(index, this.props.slides.length);
  };

  getYearData = (e, action) => {
    const { slides } = this.props;
    const { index } = this.state;
    const { setYear } = this.props;
    const newData = slides.find(
      (item, i) => this.modBySlidesLength(this.state.index + action) === i
    );
    setYear(newData);
  };
  moveSlide = (direction) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation, isMobile } = this.props;
    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <div className=" cursor-pointer  flex flex-col flex-nowrap md:gap-20 lg:gap-52  z-50 mx-auto justify-between">
          <NavBtn
            onClick={(e) => {
              this.getYearData(e, 1);
              this.moveSlide(1);
            }}
          >
            <svg
              width={isMobile ? '55' : '104'}
              height="45"
              viewBox="0 0 104 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 0L103.962 45C63.2217 26.7623 40.4814 26.8839 0.0384521 45L52 0Z"
                fill="#326AFF"
              />
            </svg>
          </NavBtn>
          <NavBtn
            onClick={(e) => {
              this.getYearData(e, -1);
              this.moveSlide(-1);
            }}
          >
            <svg
              width={isMobile ? '55' : '104'}
              height="45"
              viewBox="0 0 104 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.9999 45L0.0383759 0C40.7781 18.2377 63.5185 18.1161 103.961 0L51.9999 45Z"
                fill="#326AFF"
              />
            </svg>
          </NavBtn>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="relative flex justify-center w-full h-full">
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              onClick={(e) => console.log("e", e.target.value)}
              content={slide.content}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
              getYearData={this.getYearData}
            />
          ))}
          {navigationButtons}
        </div>
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;
