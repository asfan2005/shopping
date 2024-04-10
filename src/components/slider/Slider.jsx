import React from "react";
import "./slider.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import dataSlider from "./dataSlider";

function Slider() {
  return (
    <div className="slider-container">
      <Fade>
        {dataSlider.map((item, index) => (
          <div key={index}>
            <div className="divSlider" style={{backgroundImage: `url(${item.img})` }}>
              <p className="p1">{item.text1}</p> <br />
              <p className="p2">{item.text2}</p>
              <button>СМОТРЕТЬ КАТАЛОГ</button>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
