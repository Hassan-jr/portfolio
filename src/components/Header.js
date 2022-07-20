import React from 'react'
import { Link } from 'react-scroll';
import './header.css'
import Imagepro from '../img/about.png'
import mypic from '../img/mypic.png'
import Typical from "react-typical";
// import Wave from "../img/wave.png"


function Header() {
  return (
  <div id='home'>
    <div className='header'>
     <div className='headertext'>
       <h3><strong>Empowering Your Web Identity,</strong></h3>
       <span>I am,  <span className='name'> Abdiladif Hassan </span> </span> 
       <h2 className='changingtext'> <strong>
         
         <Typical
          loop = {Infinity}
          steps = {[
            "Cross Platform Developer",
            1000,
            "Full Stack Engineer",
            1000,
            "MERN Stack Developer",
            1000,
            "Mobile App Developer",
            1000,
            "Web Developer",
            1000,
          ]}
          />
          </strong>
       </h2>
       <Link to ="contacts" spy={true} smooth={true} offset={0} duration={500}  ><button className='button'>Hire Me</button></Link>
       
       <h3>I Develop Websites And Mobile Apps That Ignite Your Business</h3>
       
      </div>
      <div className='headerimgparent'>
      < img  className='headerimg' src={mypic} alt = 'profile' />
      </div>
     
    </div>
    {/* <div>
      <img className='wave' src={Wave} alt = "wave"/>
    </div> */}
  </div>
  )
}

export default Header
