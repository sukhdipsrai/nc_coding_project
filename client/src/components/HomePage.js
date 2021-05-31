import React from "react";
import "../stylesheets/homepage.css";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.switchInput = this.switchInput;
    this.state = { text: false };
  }

  switchInput = function () {
    this.setState({ text: !this.state.text });
  };

  render() {
    return (
      <div className="homepage-container">
        <h2>Random User Data Visualiser</h2>
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

        <textarea
          className="json-text-input"
          disabled={this.state.text}
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
        ></input>
      </div>
    );
  }
}

export default HomePage;
