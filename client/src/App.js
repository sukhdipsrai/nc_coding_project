import React, { Component } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./components/homePage";
import "./App.css";

// Routes structure implemented for future use, not fully used currently
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage}></Route>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
