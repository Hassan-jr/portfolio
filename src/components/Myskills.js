import React from 'react'
import Line from './Line';
import "./Myskills.css"
//impor all images
import Image1 from "../img/skill/html.png"
import Image2 from "../img/skill/css3.png"
import Image3 from "../img/skill/javascript.png"
import Image4 from "../img/skill/react.png"
import Image5 from "../img/skill/node.png"
import Image6 from "../img/skill/mongodb.png"
import Image7 from "../img/skill/express.png"
import Image8 from "../img/skill/bootstrap.png"
import Image9 from "../img/skill/c++.png"
import Image10 from "../img/skill/c.png"


function Myskills() {
  
  return (
    <div >
      {/* <h1 className='head'>My Skills</h1> */}
    <div className='maindiv'>

     <div className='allskills'>
     <div className='skills'>
      <p><strong>HTML</strong></p>
      <Line  range="195"/>
      <p><strong>CSS</strong></p>
      <Line  range="190"/>
      <p><strong>JAVASCRIPT</strong></p>
      <Line  range="185"/>
      <p><strong>NODE JS</strong></p>
      <Line  range="180"/>
      <p><strong>REACT JS</strong></p>
      <Line  range="175"/>
      </div>
      {/* the sencond skill */}

      <div className='skills'>
     <p><strong>MONGO DB</strong></p>
      <Line  range="175"/>
       <p><strong>MONGOOSE</strong></p>
      <Line  range="175"/>
      <p><strong>EXPRESS</strong></p>
      <Line  range="185"/>
      <p><strong> BOOTSTTRAB</strong></p>
      <Line  range="180"/>
      <p><strong>REACT NATIVE</strong></p>
      <Line  range="190"/>
       </div>
     
      
       
    </div>

       <div className='skillimg'>
       <img className='oneimg' src={Image1}alt='skillimg' />
       <img className='oneimg' src={Image2}alt='skillimg' />
       <img className='oneimg' src={Image3}alt='skillimg' />
       <img className='oneimg' src={Image4}alt='skillimg' />
       <img className='oneimg' src={Image5}alt='skillimg' />
       <img className='oneimg' src={Image6}alt='skillimg' />
       <img className='oneimg' src={Image7}alt='skillimg' />
       <img className='oneimg' src={Image8}alt='skillimg' />
       <img className='oneimg' src={Image9}alt='skillimg' />
       <img className='oneimg' src={Image10}alt='skillimg' />
       </div>

       </div>
        </div>    
        
        
      
    
  )
}

export default Myskills;
