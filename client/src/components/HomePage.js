import React from "react";
import "../stylesheets/homepage.css";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container">
        <h2>Random User Data Visualiser</h2>
        <input type="radio" id="text" name="input-type" value="text"></input>
        <label htmlFor="text">Text</label>
        <input type="radio" id="file" name="input-type" value="file"></input>
        <label htmlFor="file">File</label>
        <textarea className="json-text-input"></textarea>
        <input type="file" accept=".json" className="json-file-input"></input>
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
