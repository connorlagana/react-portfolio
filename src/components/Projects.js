import React, { Component } from "react";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

import { Link } from "react-router-dom";

import foodstagram1 from "../images/ProjectImages/Foodstagram/foodstagram1.png";
import foodstagram2 from "../images/ProjectImages/Foodstagram/foodstagram2.png";
import instatag1 from "../images/ProjectImages/Instatag/instatag1.png";
import instatag2 from "../images/ProjectImages/Instatag/instatag2.png";
import sendit1 from "../images/ProjectImages/Sendit/sendit1.png";
import sendit2 from "../images/ProjectImages/Sendit/sendit2.png";
import keens1 from "../images/ProjectImages/Keens/keens1.png";
import keens2 from "../images/ProjectImages/Keens/keens2.png";
import tesla1 from "../images/ProjectImages/Tesla/tesla1.png";
import tesla2 from "../images/ProjectImages/Tesla/tesla2.png";
import stockify1 from "../images/ProjectImages/Stockify/stockify1.png";
import stockify2 from "../images/ProjectImages/Stockify/stockify2.png";
import mapit1 from "../images/ProjectImages/Mapit/mapit1.png";
import mapit2 from "../images/ProjectImages/Mapit/mapit2.png";
import soundflex1 from "../images/ProjectImages/Soundflex/soundflex1.png";
import soundflex2 from "../images/ProjectImages/Soundflex/soundflex2.png";
import hawaii1 from "../images/ProjectImages/HawaiiRadar/Hawaii1.png";
import hawaii2 from "../images/ProjectImages/HawaiiRadar/Hawaii2.png";

import IndProj from "./IndProj.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Hawaii Radar",
          github: "https://github.com/connorlagana/hawaiiradar",
          deploy: "https://apps.apple.com/bz/app/hawaii-radar/id1548343424#?platform=iphone",
          image1: hawaii1,
          image2: hawaii2,
          bio:
            "Before you head on over to the beach, make sure you check out our extensive beach safety data at Hawaii Radar!",
        },
        {
          title: "SoundFlex",
          github: "https://github.com/connorlagana/sf_real",
          deploy: "https://soundflex.io",
          image1: soundflex1,
          image2: soundflex2,
          bio:
            "SoundFlex lets users mash up their favorite songs into a 1-hour long mix!",
        },
        {
          title: "Map It!",
          github: "https://github.com/connorlagana/SwiftUIMap",
          deploy: "https://github.com/connorlagana/SwiftUIMap",
          image1: mapit1,
          image2: mapit2,
          bio:
            "Map It! is an iOS app made using Apple's MapKit and the Google Maps SDK.",
        },
        {
          title: "Tesla Remix",
          github: "https://github.com/connorlagana/TeslaPretend",
          deploy: "http://tesla-remix.surge.sh",
          image1: tesla1,
          image2: tesla2,
          bio:
            "My personal remake of Tesla's website. Using React as a frontend and Ruby on Rails as a backend, users are able to create an account and add customized vehicles to their account",
        },
        {
          title: "Foodstagram",
          github: "https://github.com/connorlagana/Project-3",
          deploy: "http://raysp3.surge.sh",
          image1: foodstagram1,
          image2: foodstagram2,
          bio:
            "Foodstagram is a fullstack web app that I created using React for the front end and Node.js/Express for the back end.",
        },
        {
          title: "Keen's Steakhouse",
          github: "https://github.com/connorlagana/keens",
          deploy: "http://keens.surge.sh",
          image1: keens1,
          image2: keens2,
          bio:
            "Instatag is a fullstack iOS app that I created using Swift and Google's Firebase.",
        },
        {
          title: "Sendit",
          github: "https://github.com/connorlagana/project2",
          deploy: "http://senditt.surge.sh",
          image1: sendit1,
          image2: sendit2,
          bio:
            "Sendit takes a finance;/stock API and displays the content using React. Other frameworks used in Sendit include Charts.js",
        },
        {
          title: "Instatag",
          github: "https://github.com/connorlagana/instatag",
          deploy: "https://github.com/connorlagana/instatag",
          image1: instatag1,
          image2: instatag2,
          bio:
            "Instatag is a fullstack iOS app that I created using Swift and Google's Firebase.",
        },
        {
          title: "Stockify",
          github: "https://github.com/connorlagana/project_1",
          deploy: "http://stockify.surge.sh",
          image1: stockify1,
          image2: stockify2,
          bio:
            "Sendit takes a finance/stock market API and displays the content using React. Other frameworks used in Sendit include Charts.js",
        },
      ],
    };
  }
  render() {
    return (
      <div id="projectsPage">
        <div id="projectsTitle">
          <Link to="/" id="projectsTitle">
            <KeyboardBackspace id="backArrow" />
            <h1 id="projectsH1">Projects</h1>
          </Link>
        </div>
        <IndProj projects={this.state.projects} />
      </div>
    );
  }
}

export default Projects;
