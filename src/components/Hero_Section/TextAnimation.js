import React, { Component } from "react";
import $ from "jquery";
import Vara from "vara";
import font from "../../styles/font.json";

export default class TextAnimation extends Component {
  state = {
    textAllign: "left",
  };

  componentDidMount() {
    //we ready baby
    var vara = new Vara(
      "#animatedFont",
      "https://cdn.jsdelivr.net/npm/vara@1.4.0/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Hello I am",
          y: 0,
          x: 0,
          fromCurrentPosition: { y: false },
          duration: 4000,
        },
      ],
      {
        strokeWidth: 2,
        color: "#326aff",
        fontSize: window.innerWidth < 768 ? "25" : "40",
        textAlign: window.innerWidth < 768 ? "center" : "left",
      }
    );
  }

  render() {
    return <div id="animatedFont"></div>;
  }
}
