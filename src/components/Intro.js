import React from "react";
import connor from "../images/connor1.jpg";
import Arrows from "../components/Arrows.js";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <div id="bigIntro">
      <div id="leftIntro">
        <div id="intro">
          <Fade left>
            <h1>Hey! I'm Connor.</h1>
          </Fade>
          <Fade cascade left>
            <h3>Welcome to my portfolio!</h3>
            {/* <h5>
              I'm a Software Engineer who's passionate about creating flawless
              web applications with unique designs.
            </h5> */}
          </Fade>
          <Arrows />
        </div>
      </div>
      <div id="rightIntro">
        <Fade>
          <img id="profPic" src={connor}></img>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
