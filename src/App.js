import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
      </div>
    );
  }
}

export default App;
