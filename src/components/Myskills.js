import React from "react";
import Line from "./Line";
import "./Myskills.css";
//impor all images

function Myskills() {
  return (
    <div>
      {/* <h1 className='head'>My Skills</h1> */}
      <div className="maindiv">
        <div className="allskills">
          <div className="skills">
            <h2 className="skillHead">FRONTEND</h2>
            <p>
              <strong>JAVASCRIPT</strong>
            </p>
            <Line range="185" />
            <p>
              <strong>NEXT JS</strong>
            </p>
            <Line range="180" />
            <p>
              <strong>REACT JS</strong>
            </p>
            <Line range="175" />
            <p>
              <strong>REACT NATIVE</strong>
            </p>
            <Line range="190" />
           
          </div>
          {/* the sencond skill */}

          <div className="skills">
          <h2 className="skillHead">BACKEND</h2>
            <p>
              <strong>NODE JS</strong>
            </p>
            <Line range="180" />
            <p>
              <strong>MONGO DB</strong>
            </p>
            <Line range="175" />
            <p>
              <strong>MONGOOSE</strong>
            </p>
            <Line range="175" />
            <p>
              <strong>EXPRESS</strong>
            </p>
            <Line range="185" />
          </div>
          {/* Third line */}
          <div className="skills">
          <h2 className="skillHead">BLOCKCHAIN</h2>
            <p>
              <strong>SOLIDITY</strong>
            </p>
            <Line range="195" />
            <p>
              <strong>ETHERS JS</strong>
            </p>
            <Line range="185" />
            <p>
              <strong>WEB3 MORALIS </strong>
            </p>
            <Line range="195" />
            <p>
              <strong>HARDHAT</strong>
            </p>
            <Line range="185" />
          </div>
          {/* Forth  Line */}
          <div>
          <h2 className="skillHead">OTHERS</h2>
          <p>
              <strong> REDUX</strong>
            </p>
            <Line range="180" />
            <p>
              <strong> GIT & GITHUB</strong>
            </p>
            <Line range="180" />
            <p>
              <strong> TAILWINDCSS</strong>
            </p>
            <Line range="180" />
            <p>
              <strong> BOOTSRAB</strong>
            </p>
            <Line range="180" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
