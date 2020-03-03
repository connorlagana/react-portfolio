import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import IndTech from "./IndTech.js";
import { Link } from "react-router-dom";

class Technologies extends Component {
  render() {
    return (
      <div id="projectsPage">
        <div id="projectsTitle">
          <Link to="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Technologies</h1>
          </Link>
        </div>
        <div id="IndT">
          <IndTech />
        </div>
      </div>
    );
  }
}

export default Technologies;
