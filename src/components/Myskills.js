import React from 'react'
import Line from './Line';
import "./Myskills.css"
//impor all images



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
      <p><strong>SOLIDITY</strong></p>
      <Line  range="195"/>
      <p><strong>ETHERS JS</strong></p>
      <Line  range="185"/>
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
      <p><strong>WEB3 MORALIS </strong></p>
      <Line  range="195"/>
      <p><strong>HARDHAT</strong></p>
      <Line  range="185"/>
       </div>
     
      
       
    </div>

     

       </div>
        </div>    
        
        
      
    
  )
}

export default Myskills;
