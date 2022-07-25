import React from "react";
import "./project.css";

import Project from "./project";
import Data from "./ProjectData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {

  const settings = { 
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    className: "slides"
  };

  return (
    <div className="container">
      <h2>Recent Projects</h2>
      <  Slider {...settings} >
      {Data.map((item, index) => <Project key={index} {...item} />)}
      </Slider>
      
    </div>
  );
}

export default Projects;
