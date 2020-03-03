import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
};

export default NavBar;
