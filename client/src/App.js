import React, { Component } from "react";
import { Switch } from "react-router";
import HomePage from "./components/HomePage";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage}></Route>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
