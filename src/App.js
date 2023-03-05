import React, { Component } from "react";
import "./App.css";
import SignupComponet from "./SignupComponent";

class App extends Component {
  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
        <SignupComponet />
      </div>
    );
  }
}

export default App;
