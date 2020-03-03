import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Arrows = () => {
  return (
    <div className="arrows">
      <Fade>
        <ul>
          <div id="begin">
            <Link to="/about">In the beginning</Link>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <Link to="/technologies">Check out my technologies</Link>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <Link to="/projects">View my personal projects</Link>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
          <div id="begin">
            <Link to="/contact">Get in touch</Link>
            <KeyboardArrowRight color="secondary" id="arrowRight" />
          </div>
        </ul>
      </Fade>
    </div>
  );
};

export default Arrows;
