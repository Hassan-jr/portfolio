import React from 'react'
import "./project.css"
import Image1 from "../img/amazon.png"


function Projects() {
  
  return (
    <div  className='container'>
      <h2>Recent Projects</h2>

      <div  className = "projects">
      <h3>1. Responsive Amazon-clone Website </h3>

      <div className = "project_div">

      {/* project img */}
      <div  className="project_img_div">
        <a href="http://amazonbyhassan.herokuapp.com/">
         <img className="project_img" src={Image1} alt="amazon project"/>
         </a>
      </div>

              {/* project des */}
        <div  className="project_des">
                {/* fronend */}
              <h5>Frontend</h5>
              <ul>
                <li>React js</li>
                <li>Redux</li>
              </ul>
              {/* backend */}
              <h5>Backend</h5>
              <ul>
                <li>Node js</li>
                <li>Express js</li>
                <li>Mongo DB</li>
              </ul>
              {/* hosting */}
              <h5>Hosting</h5>
              <ul>
                <li>Frontend - Heroku </li>
                <li>Backend  - Heroku</li>
              </ul>
              <h5>Project Link</h5>
               <ul>
                <li><a href="http://amazonbyhassan.herokuapp.com/">http://amazonbyhassan.herokuapp.com</a></li>
               </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects;