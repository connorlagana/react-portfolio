import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

import foodstagram1 from "../images/ProjectImages/Foodstagram/foodstagram1.png";
import foodstagram2 from "../images/ProjectImages/Foodstagram/foodstagram2.png";
import instatag1 from "../images/ProjectImages/Instatag/instatag1.png";
import instatag2 from "../images/ProjectImages/Instatag/instatag2.png";
import sendit1 from "../images/ProjectImages/Sendit/sendit1.png";
import sendit2 from "../images/ProjectImages/Sendit/sendit2.png";
import keens1 from "../images/ProjectImages/Keens/keens1.png";
import keens2 from "../images/ProjectImages/Keens/keens2.png";

import IndProj from "./IndProj.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Foodstagram",
          github: "https://github.com/connorlagana/Project-3",
          image1: foodstagram1,
          image2: foodstagram2,
          bio:
            "Foodstagram is a fullstack web app that I created using React for the front end and Node.js/Express for the back end."
        },
        {
          title: "Keens",
          github: "https://github.com/connorlagana/keens",
          image1: keens1,
          image2: keens2,
          bio:
            "Instatag is a fullstack iOS app that I created using Swift and Google's Firebase."
        },
        {
          title: "Sendit",
          github: "https://github.com/connorlagana/project2",
          image1: sendit1,
          image2: sendit2,
          bio:
            "Sendit takes a finance;/stock API and displays the content using React. Other frameworks used in Sendit include Charts.js"
        },
        {
          title: "Instatag",
          github: "https://github.com/connorlagana/instatag",
          image1: instatag1,
          image2: instatag2,
          bio:
            "Instatag is a fullstack iOS app that I created using Swift and Google's Firebase."
        }
      ]
    };
  }
  render() {
    return (
      <div id="projectsPage">
        <div id="projectsTitle">
          <a href="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Projects</h1>
          </a>
        </div>
        <IndProj projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
