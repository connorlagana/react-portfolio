import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Intro from "./components/Intro.js";
import About from "./components/About.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Intro} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
