import React from "react";
import "../stylesheets/homepage.css";

class RandomUserCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="charts-container">{console.log(this.props)}</div>;
  }
}

export default RandomUserCharts;
