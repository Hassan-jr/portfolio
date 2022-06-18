import React from 'react'
import "./about.css"
import About2 from "../img/about2.png"
function About() {
  return (
   <div className='about' id='about'>
      <h3 className='abouttext'>ABOUT ME</h3>
      <p className='who'><strong>Who am I</strong></p>
   <div className='aboutme'>
     <div className='imgdiv'>
       <img className='aboutimg' src={About2} alt= " myimg"/>
     </div>
     <div className='aboutinfo'>
   <p> Full stack web and mobile developer with background knowledge of MERN stacks with redux,</p>

   <p>along with a knack of building applications with utmost efficiency. 
     <br/>Strong professional with a BSC willing to be an asset for an organization.

   </p>
   <ul className='highlights'>
     <h3 className='ulhight'>Here are a Few Highlights:</h3>
     <li>Full Stack web development</li>
     <li>Interactive Front End as per the design</li>
     <li>Back-end development</li>
     <li>Building REST API</li>
     <li>Managing database</li>

   </ul>
   </div>
   </div>
    </div>
  )
}

export default About
