import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul id="nav">
          <a href="/about" className="navItem">
            About
          </a>
          <li className="navItem">Projects</li>
          <li className="navItem">Technologies</li>
          <li className="navItem">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
