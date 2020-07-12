import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul id="nav">
        <Link to="/" className="navItem">
          Home
        </Link>
        <Link to="/about" className="navItem">
          About
        </Link>
        <Link to="/technologies" className="navItem">
          Technologies
        </Link>
        <Link to="/projects" className="navItem">
          Projects
        </Link>
        <Link to="/contact" className="navItem">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
