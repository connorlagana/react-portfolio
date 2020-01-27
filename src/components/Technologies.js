import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import IndTech from "./IndTech.js";

class Technologies extends Component {
  render() {
    return (
      <div id="projectsPage">
        <div id="projectsTitle">
          <a href="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Technologies</h1>
          </a>
        </div>
        <div id="IndT">
          <IndTech />
        </div>
      </div>
    );
  }
}

export default Technologies;
