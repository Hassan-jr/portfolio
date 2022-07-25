import React from 'react'



function Project(prop) {
  return (
    <div>
       <div className="projects">
       
        {/* <h3>1. Responsive Amazon-clone Website </h3> */}
        <h3>{prop.title}</h3>

        <div className="project_div">
          {/* project img */}
          <div className="project_img_div">
            <a href={prop.link}>
              <img className="project_img" src={prop.image} alt="amazon project" />
            </a>
          </div>

          {/* project des */}
          <div className="project_des">
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
              <li>{prop.hosting} </li>
             
            </ul>
            <h5>Project Link</h5>
            <ul>
              <li>
                <a href={prop.link}>
                 {prop.link}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project