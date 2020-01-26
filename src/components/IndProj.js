import React from "react";

const IndProj = props => {
  return (
    <div id="projects">
      {props.projects.map((proj, key) => (
        <div id="indProj">
          <h4 id="projTitle">{proj.title}</h4>
          <div id="indRectangle">
            <div id="indProjUnderlying">
              <a id="aProj" href={proj.github}>Click Here to visit {proj.title}'s Github</a>
              <p id="projBio">{proj.bio}</p>
            </div>
            <img src={proj.image1} id="image1" />
            <img src={proj.image2} id="image2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndProj;
