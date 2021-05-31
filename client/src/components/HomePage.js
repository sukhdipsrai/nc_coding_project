import React from "react";
import "../stylesheets/homepage.css";
var sampleData = require("../input.json");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.switchInput = this.switchInput;
    this.visualize = this.visualize;
    this.state = { text: false };
  }

  switchInput = function () {
    this.setState({ text: !this.state.text });
  };

  visualize = function (e) {
    console.log("visualize");
    // debugger;
    if (!this.state.text) {
      // Use Text Input
    } else {
      // use file input
      let file = document.getElementsByClassName("json-file-input")[0].files[0];
      debugger;
    }
  };

  render() {
    return (
      <div className="homepage-container">
        <h2>Random User Data Visualiser</h2>
        <form className="data-input-form">
          <div className="radio-container">
            <input
              type="radio"
              id="text"
              name="input-type"
              value="text"
              defaultChecked="checked"
              onChange={(e) => this.switchInput()}
            ></input>
            <label htmlFor="text">Text</label>
            <input
              type="radio"
              id="file"
              name="input-type"
              value="file"
              selected={this.state.text}
              onChange={(e) => this.switchInput()}
            ></input>
            <label htmlFor="file">File</label>
          </div>

          <textarea
            className="json-text-input"
            disabled={this.state.text}
            defaultValue={JSON.stringify(sampleData)}
            spellCheck="false"
          ></textarea>
          <input
            type="file"
            accept=".json"
            className="json-file-input"
            disabled={!this.state.text}
          ></input>
          <input
            type="submit"
            className="json-visualize"
            value="Visualize"
            onClick={(e) => this.visualize(e)}
          ></input>
        </form>
      </div>
    );
  }
}

export default HomePage;
