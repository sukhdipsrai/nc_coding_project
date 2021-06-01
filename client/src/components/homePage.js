import React from "react";
import "../stylesheets/homepage.css";
import axios from "axios";
import RandomUserCharts from "./randomUserCharts";
var sampleData = require("../input.json");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: false, stats: null };
    this.visualize = this.visualize.bind(this);
  }

  switchInput = () => {
    this.setState({ text: !this.state.text });
  };

  visualize = (e) => {
    // save error message as string, saved to state JSON.parse errors will arise
    let invalidStr = `Malformed JSON in Text Box, try again.\nSee https://randomuser.me/documentation for sample data.`;
    // init vars and our request to bring back statistical data by sending our JSON data
    let data = null;
    var config = {
      method: "post",
      url: "/api/randomUser",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    // conditional branch to use text from either the input box or file upload
    if (!this.state.text) {
      // Use Text Input

      // try catch block used to intially validate JSON, will fail only with basic synxtax errors like mismatch quotes, curly braces etc
      try {
        let data = document.getElementsByClassName("json-text-input")[0].value;
        // where errors would be thrown if the input is a bad JSON
        config["data"] = JSON.parse(JSON.stringify(data));
        // send data to backend for statistics
        axios(config)
          .then((response) => {
            let stats = JSON.stringify(response.data);
            this.setState({ stats: JSON.parse(stats), errors: "" });
          })
          .catch((error) => {
            this.setState({ errors: invalidStr });
          });
      } catch (error) {
        this.setState({ errors: invalidStr });
      }
    }
    // Use File Input
    else {
      // first try catch block attempts to read the user input file
      // catching errors in reading the file and the JSON within, any basic syntax issues
      // error is thrown before sending to the backend
      try {
        let file =
          document.getElementsByClassName("json-file-input")[0].files[0];
        let reader = new FileReader();
        reader.readAsText(file);

        // event fired when file is read
        reader.addEventListener("load", (e) => {
          // contents of the file
          let text = e.target.result;
          document.getElementsByClassName("json-text-input")[0].value = text;
          // second try catch, attempt to parse JSON, check for validity
          try {
            data = text;
            config["data"] = JSON.parse(JSON.stringify(data));
            // send data to backend for statistics
            axios(config)
              .then((response) => {
                let stats = JSON.stringify(response.data);
                this.setState({ stats: JSON.parse(stats), errors: "" });
              })
              .catch((error) => {
                this.setState({
                  errors: invalidStr,
                });
              });
          } catch (error) {
            // save erros to state if JSON cannot be parsed
            this.setState({ errors: invalidStr });
          }
        });

        // event fired when file reading failed
        reader.addEventListener("error", () => {
          // this.setState({ errors: "Error in Reading File, try again." });
          throw "Error in Reading File";
        });
      } catch (error) {
        // save erros to state if file cannot be read
        this.setState({ errors: "Error in Reading File, try again." });
      }
    }
  };

  render() {
    // RandUserCharts receive all stats data from the backend as props, uses it to display charts
    let charts =
      this.state.stats === null ? null : (
        <RandomUserCharts stats={this.state.stats} />
      );

    return (
      <div className="homepage-container">
        <h2>Random User Data Visualiser</h2>
        {/* data input form */}
        <form className="data-input-form">
          <div className="radio-container">
            {/* radio selector between file and text input */}
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
          {/* text area input */}
          <textarea
            className="json-text-input"
            disabled={this.state.text}
            defaultValue={JSON.stringify(sampleData)}
            spellCheck="false"
          ></textarea>
          {/* file upload button */}
          <input
            type="file"
            accept=".json"
            className="json-file-input"
            disabled={!this.state.text}
          ></input>
          {/* Submit button that processes input when clicked */}
          <input
            type="button"
            className="json-visualize"
            value="Visualize"
            onClick={(e) => this.visualize(e)}
          ></input>
          <div className="form-errors">{this.state.errors}</div>
        </form>
        {/* render charts, default null */}
        {charts}
      </div>
    );
  }
}

export default HomePage;
