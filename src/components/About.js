import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Fade from "react-reveal/Fade";

class About extends Component {
  render() {
    return (
      <div id="aboutOuter">
        <div id="about">
          <div id="aboutFirst">
            <Fade>
              <div>About</div>
              <a href="/">
                <KeyboardBackspace id="backArrow" />
              </a>
            </Fade>
          </div>

          <div id="aboutSecond">
            <Fade cascade left>
              <p>
                I'm a front end and mobile developer currently working for Odega
                Studios. My role here allows me to work with various designs and
                bring them to life with a creative process.
              </p>
              <p>
                I started learning computer science in highschool with a group
                of friends before getting my B.S. at Manhattan College. My time
                at college allowed me to work on personal projects while learing
                web and mobile development. After finishing my degree in 2019, I
                jumped head first into the digital industry learning all I could
                about the world of front end development.
              </p>
              <p>
                Outside of work, I like to work on full stack web applications
                using React for frontend and Ruby on Rails for a backend. This
                allows me play around with new technology and gives me a better
                understanding of the digital industry as a whole. It's also
                incredibly fun! If I'm not desiging or coding something I'll be
                messing around with music production or analyzing stocks!
              </p>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
