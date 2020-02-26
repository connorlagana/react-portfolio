import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Fade from "react-reveal/Fade";

const Arrows = () => {
  return (
    <div>
      <Fade>
        <ul>
          <div id="begin">
            <a href="/about">In the beginning</a>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <a href="/technologies">Check out my technologies</a>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <a href="/projects">View my personal projects</a>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <a href="/contact">Get in touch</a>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
        </ul>
      </Fade>
    </div>
  );
};

export default Arrows;
