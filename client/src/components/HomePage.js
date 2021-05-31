import React from "react";
import "../stylesheets/homepage.css";
var sampleData = require("../input.json");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: false };
  }

  switchInput = function () {
    this.setState({ text: !this.state.text });
  };

  clearErrors = function () {
    this.setState({ errors: "", jsonErrors: "", textErrors: "" });
  };

  visualize = function (e) {
    console.log("visualize");
    this.clearErrors();
    let data = null;

    if (!this.state.text) {
      // Use Text Input
      try {
        data = JSON.parse(
          document.getElementsByClassName("json-text-input")[0].value
        );
        // send the api request here
      } catch (error) {
        this.setState({ textErrors: "Malformed JSON in Text Box, try again." });
      }
    } else {
      // use file input
      try {
        let file =
          document.getElementsByClassName("json-file-input")[0].files[0];
        let reader = new FileReader();
        reader.readAsText(file);

        // event fired when file is read
        reader.addEventListener("load", function (e) {
          // contents of the file
          let text = e.target.result;
          document.getElementsByClassName("json-text-input")[0].value = text;
          try {
            data = JSON.parse(text);
          } catch (error) {
            this.setState({ jsonErrors: "Malformed JSON in File, try again." });
          }
          // send the api request here
        });

        // event fired when file reading failed
        reader.addEventListener("error", function () {
          this.setState({ errors: "Error in Reading File, try again." });
        });
      } catch (error) {
        this.setState({ errors: "Error in Reading File, try again." });
      }
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
            type="button"
            className="json-visualize"
            value="Visualize"
            onClick={(e) => this.visualize(e)}
          ></input>
          <div className="form-errors">{this.state.jsonErrors}</div>
          <div className="form-errors">{this.state.errors}</div>
          <div className="form-errors">{this.state.textErrors}</div>
        </form>
      </div>
    );
  }
}

export default HomePage;
