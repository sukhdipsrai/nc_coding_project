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
        <input type="text" className="json-text-input"></input>
        <input type="file" className="json-file-input"></input>
      </div>
    );
  }
}

export default HomePage;
