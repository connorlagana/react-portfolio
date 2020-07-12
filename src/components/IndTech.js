import React, { Component } from "react";

import jsLogo from "../images/logos/javascriptLogo.png";
import htmlLogo from "../images/logos/htmlLogo.png";
import cssLogo from "../images/logos/cssLogo.png";
import swiftLogo from "../images/logos/swiftLogo.png";
import reactLogo from "../images/logos/reactLogo.png";
import reactNativeLogo from "../images/logos/reactNativeLogo.png";
import angularLogo from "../images/logos/angularLogo.png";
import nodeLogo from "../images/logos/nodeLogo.png";
import pythonLogo from "../images/logos/pythonLogo.png";
import rubyLogo from "../images/logos/rubyLogo.png";
import railsLogo from "../images/logos/railsLogo.png";
import gitLogo from "../images/logos/gitLogo.png";
import githubLogo from "../images/logos/githubLogo.png";
import jsonLogo from "../images/logos/jsonLogo.png";

import Fade from "react-reveal/Fade";

class IndProj extends Component {
  constructor(props) {
    super(props);

    this.state = {
      techs: [
        {
          name: "JavaScript",
          image: jsLogo,
        },
        {
          name: "Swift",
          image: swiftLogo,
        },
        {
          name: "HTML",
          image: htmlLogo,
        },
        {
          name: "CSS",
          image: cssLogo,
        },

        {
          name: "React",
          image: reactLogo,
        },
        {
          name: "React Native",
          image: reactNativeLogo,
        },
        {
          name: "Angular",
          image: angularLogo,
        },
        {
          name: "Node.js",
          image: nodeLogo,
        },

        {
          name: "Python",
          image: pythonLogo,
        },
        {
          name: "Ruby",
          image: rubyLogo,
        },
        {
          name: "Ruby On Rails",
          image: railsLogo,
        },
        {
          name: "Git",
          image: gitLogo,
        },
        {
          name: "Github",
          image: githubLogo,
        },
        {
          name: "JSON",
          image: jsonLogo,
        },
      ],
    };
  }
  render() {
    return (
      <div id="technologies">
        {this.state.techs.map((tech, key) => (
          <div id="indTech">
            <Fade left cascade>
              <h3>{tech.name}</h3>
            </Fade>
            <Fade>
              <img src={tech.image} id="techLogo" alt="contact" />
            </Fade>
          </div>
        ))}
      </div>
    );
  }
}

export default IndProj;
