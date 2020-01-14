import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div id="intro">
          <h1>Hey! I'm Connor.</h1>
          <h3>Welcome to my portfolio!</h3>
          <h5>
            I'm a Software Engineer who's passionate about creating flawless web
            applications with unique designs.
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
