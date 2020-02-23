import React from "react";
import connor from "../images/connor1.jpg";
import Arrows from "../components/Arrows.js";
import bruceJenner from "../images/bruceJenner.jpeg";

const Intro = () => {
  return (
    <div id="bigIntro">
      <div id="leftIntro">
        <div id="intro">
          <h1>Hey! I'm Connor.</h1>
          <h3>Welcome to my portfolio!</h3>
          <h5>
            I'm a Software Engineer who's passionate about creating flawless web
            applications with unique designs.
          </h5>
          <Arrows />
        </div>
      </div>
      <div id="rightIntro">
        {/* <img id="profPic" src={connor}></img> */}
        <a href="https://www.youtube.com/watch?v=bo2m4eTrKQ4">
          <img src={bruceJenner}></img>
        </a>
      </div>
    </div>
  );
};

export default Intro;
