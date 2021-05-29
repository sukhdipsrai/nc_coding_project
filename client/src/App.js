import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.state.data}</header>
      </div>
    );
  }
}

export default App;
