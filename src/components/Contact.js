import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import ContactPic from "../components/ContactPic.js";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div id="contactPage">
        <div id="projectsTitle">
          <Link to="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Contact</h1>
          </Link>
        </div>
        <div id="contactsBottomPage">
          <h1>Get in touch with me!</h1>
          <ContactPic />
          <p id="emailBlock">
            Or shoot me an email at <b>connor.lagana@gmail.com</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
