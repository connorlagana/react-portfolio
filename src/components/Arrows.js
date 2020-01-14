import React from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Arrows = () => {
  return (
    <div>
      <li>
      <ul id="begin">
          In the beginning{" "}
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </ul>
        <ul id="begin">
          My Projects{" "}
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </ul>
        <ul id="begin">
          View my tech{" "}
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </ul>
        <ul id="begin">
          Get in touch{" "}
          <KeyboardArrowRight color="secondary" id="arrowRight" />
        </ul>
      </li>
    </div>
  );
};

export default Arrows;
