import React, { Component } from "react";
import "./App.css";
import Addingdetail from "./Addingdetail.js";
import { store } from "./todoredux.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo list</h2>
        </div>
        <div class="Product-manager">
          <Addingdetail />
        </div>
      </div>
    );
  }
}

export default App;
