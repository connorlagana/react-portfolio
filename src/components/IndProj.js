import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
                <a id="aWeb" href={proj.deploy}>
                  {proj.title} Website
                </a>
                <a id="aProj" href={proj.github}>
                  Click Here to visit {proj.title}'s Github
                </a>

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
