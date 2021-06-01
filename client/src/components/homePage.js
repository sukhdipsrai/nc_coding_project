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
    let invalidStr = `Malformed JSON in Text Box, try again.\nSee https://randomuser.me/documentation for sample data.`;
    console.log("visualize");
    let data = null;
    var config = {
      method: "post",
      url: "/api/randomUser",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (!this.state.text) {
      // Use Text Input
      try {
        let data = document.getElementsByClassName("json-text-input")[0].value;
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
              .catch(function (error) {
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
          this.setState({ errors: "Error in Reading File, try again." });
        });
      } catch (error) {
        // save erros to state if file cannot be read
        this.setState({ errors: "Error in Reading File, try again." });
      }
    }
  };

  render() {
    let charts =
      this.state.stats === null ? null : (
        <RandomUserCharts stats={this.state.stats} />
      );

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
          <div className="form-errors">{this.state.errors}</div>
        </form>
        {charts}
      </div>
    );
  }
}

export default HomePage;