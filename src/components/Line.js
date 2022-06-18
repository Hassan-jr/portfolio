import React from 'react'
import "./Line.css"

function Line(prop) {
const main2={
        width: prop.range +"px",
        height: "10px",
        backgroundColor: "#FC4F4F"
    }
  return (
    <div className='main'>
        <div style={main2}>

        </div>
      
    </div>
  )
}

export default Line
