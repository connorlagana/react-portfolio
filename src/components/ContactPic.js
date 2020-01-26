import React, { Component } from "react";
import githubLogo from "../images/ContactPics/github.png";

class ContactPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        {
          image: githubLogo,
          title: "Github",
          link: "https://github.com/connorlagana"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.pics.map((pic, key) => (
          <div id="contactPic">
            <a href={pic.link}>
              <img src={pic.image} />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactPic;
