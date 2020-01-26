import React, { Component } from "react";
import githubLogo from "../images/ContactPics/github.png";
import linkedin from "../images/ContactPics/linkedin.png";

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
            <a href={pic.link}>
              <img src={pic.image} class="contactPicImage" />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactPic;
