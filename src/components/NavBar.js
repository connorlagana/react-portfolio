import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul id="nav">
          <a href="/about" className="navItem">
            About
          </a>
          <a href="/technologies" className="navItem">
            Technologies
          </a>
          <a href="/projects" className="navItem">
            Projects
          </a>
          <a href="/contact" className="navItem">
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
