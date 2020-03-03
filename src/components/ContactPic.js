import React, { Component } from "react";
import githubLogo from "../images/ContactPics/github.png";
import linkedin from "../images/ContactPics/linkedin.png";
import { Link } from "react-router-dom";

class ContactPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        {
          image: githubLogo,
          title: "Github",
          link: "https://github.com/connorlagana"
        },
        {
          image: linkedin,
          title: "Linkedin",
          link: "https://www.linkedin.com/in/connor-lagana/"
        }
      ]
    };
  }
  render() {
    return (
      <div id="contactPics">
        {this.state.pics.map((pic, key) => (
          <div class="contactPic">
            <Link to={pic.link}>
              <img src={pic.image} class="contactPicImage" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactPic;
