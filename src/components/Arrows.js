import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Arrows = () => {
  return (
    <div>
      <li>
        <div id="begin">
          <ul>In the beginning</ul>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <ul>Check out my technologies</ul>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <ul>View my personal projects</ul>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
        <div id="begin">
          <ul>Get in touch</ul>
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </div>
      </li>
    </div>
  );
};

export default Arrows;
