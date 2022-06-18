import React, { useState } from 'react'
import Onereview from './Onereview'
import "./Review.css"
import profile from './datareview'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Review() {

// test
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
var size ;
var num = getWindowDimensions();
if (num.width < 700)
{
size = 1;
}else{
  size = 2;
}



  const settings = { 
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: 1,
    arrows : true,
    className: "slides"
  };

  return (
    <div className='review' id='testmonials'>
     
  <h2>TESTMONIALS</h2>
  <div className='container-review'>
  <  Slider {...settings} >


  {profile.map(prof => 
  <Onereview 
  key = {prof.id}
   prof={prof.prof} 
   text= {prof.text}
   name={prof.name}
  />
  )}

   </Slider>
   </div>
    </div>
   
  )
}

export default Review