import React from 'react'
import "./Onereivew.css"
// import About2 from "../img/about2.png"
function Onereview(prop) {
  return (
    <div className='container2'>

    <div className='container-text'>
     <p>{prop.text}</p>
   {/* profile */}
   <div className='container-profile'>
          <img className='profilereviewimg' src={prop.prof} alt='client-img'/>
          <div>
          <h6>{prop.name}</h6>
          <p>Client</p>
          </div>
      </div>
    </div>
      
     
    </div>
  )
}

export default Onereview