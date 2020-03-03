import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div id="aboutOuter">
        <div id="about">
          <div id="aboutFirst">
            <Fade>
              <div>About</div>
              <Link to="/">
                <KeyboardBackspace id="backArrow" />
              </Link>
            </Fade>
          </div>
          <Fade cascade left>
            <div className="aboutSecond">
              <div>
                I'm a front end and mobile developer currently working for Odega
                Studios. My role here allows me to work with various designs and
                bring them to life with a creative process.
              </div>
              <div>
                I started learning computer science in highschool with a group
                of friends before getting my B.S. at Manhattan College. My time
                at college allowed me to work on personal projects while learing
                web and mobile development. After finishing my degree in 2019, I
                jumped head first into the digital industry learning all I could
                about the world of front end development.
              </div>
              <div>
                Outside of work, I like to work on full stack web applications
                using React for front end and Ruby on Rails for a backend. This
                allows me play around with new technology and gives me a better
                understanding of the digital industry as a whole. It's also
                incredibly fun! If I'm not desiging or coding something I'll be
                messing around with music production or analyzing stocks!
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
