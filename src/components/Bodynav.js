import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bodynav.css";

function Bodynav() {
  const [click, setClick] = useState({
    work: true,
    skill: false,
    interest: false,
    edu: false,
  });

  const handleClick = (nav) => {
   
    setClick((prev) => {
      if (nav === "work") {
        return {
          ...prev,
          work: true,
          skill: false,
          interest: false,
          edu: false,
        };
      } else if (nav === "interest") {
        return {
          ...prev,
          work: false,
          skill: false,
          interest: true,
          edu: false,
        };
      } else if (nav === "skill") {
        return {
          ...prev,
          work: false,
          skill: true,
          interest: false,
          edu: false,
        };
      } else if (nav === "edu") {
        return {
          ...prev,
          work: false,
          skill: false,
          interest: false,
          edu: true,
        };
      }
    });
  };



  return (
    <div id="resume">
      <h2 className="resume">RESUME</h2>
      <div className="bodynav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5
            className={click.work ? "test3" : ""}
            onClick={() => handleClick("work")}
          >
            WORK HISTORY
          </h5>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none" }}>
          <h5
            className={click.skill ? "test3" : ""}
            onClick={() => handleClick("skill")}
          >
            SKILLS
          </h5>
        </Link>

        <Link to="/interest" style={{ textDecoration: "none" }}>
          <h5
            className={click.interest ? "test3" : ""}
            onClick={() => handleClick("interest")}
          >
            INTERESTS
          </h5>
        </Link>
        <Link to="/edu" style={{ textDecoration: "none" }}>
          <h5
            className={click.edu ? "test3" : ""}
            onClick={() => handleClick("edu")}
          >
            EDUCATION BACKGROUND
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Bodynav;
