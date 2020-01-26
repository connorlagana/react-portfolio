import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Arrows = () => {
  return (
    <div>
      <ul>
        <div id="begin">
          <a href="/about">In the beginning</a>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <a>Check out my technologies</a>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <a href="/projects">View my personal projects</a>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <a>Get in touch</a>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
      </ul>
    </div>
  );
};

export default Arrows;
