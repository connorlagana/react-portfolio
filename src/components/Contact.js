import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

class Contact extends Component {
  render() {
    return (
      <div id="projectsPage">
        <div id="projectsTitle">
          <a href="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Contact</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
