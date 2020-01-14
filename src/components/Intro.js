import React from "react";
import connor from "../images/connor1.jpg";
import Arrows from "../components/Arrows.js"

const Intro = () => {
  return (
    <div>
      <div id="intro">
        <h1>Hey! I'm Connor.</h1>
        <h3>Welcome to my portfolio!</h3>
        <h5>
          I'm a Software Engineer who's passionate about creating flawless web
          applications with unique designs.
        </h5>
        <Arrows />
      </div>
      <div id="prof">
        {/* <img id="profPic" src={connor}></img> */}
      </div>
    </div>
  );
};

export default Intro;
