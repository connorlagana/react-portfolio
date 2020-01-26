import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import ContactPic from "../components/ContactPic.js";

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
        <div>
          <h1>Get in touch with me!</h1>
          <ContactPic />
          <p>connor.lagana@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;
