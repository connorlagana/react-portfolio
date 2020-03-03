import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const IndProj = props => {
  return (
    <div id="projects">
      {props.projects.map((proj, key) => (
        <div id="indProj">
          <Fade>
            <h4 id="projTitle">{proj.title}</h4>
          </Fade>
          <div id="indRectangle">
            <Fade left>
              <div id="indProjUnderlying">
                <Link id="aWeb" to={proj.deploy}>
                  {proj.title} Website
                </Link>
                <Link id="aProj" to={proj.github}>
                  Click Here to visit {proj.title}'s Github
                </Link>

                <p id="projBio">{proj.bio}</p>
              </div>
            </Fade>
            <Zoom clear>
              <img src={proj.image1} id="image1" />
            </Zoom>
            <Fade right>
              <img src={proj.image2} id="image2" />
            </Fade>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndProj;
