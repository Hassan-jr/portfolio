import React from "react";
import { Link } from "react-router-dom";
import "./Bodynav.css";

function Bodynav() {
  return (
    <div id="resume">
      <h2 className="resume">RESUME</h2>
      <div className="bodynav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5>WORK HISTORY</h5>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none" }}>
          <h5>SKILLS</h5>
        </Link>

        <Link to="/interest" style={{ textDecoration: "none" }}>
          <h5>INTERESTS</h5>
        </Link>
        <Link to="/edu" style={{ textDecoration: "none" }}>
          <h5>EDUCATION BACKGROUND</h5>
        </Link>
      </div>
    </div>
  );
}

export default Bodynav;
