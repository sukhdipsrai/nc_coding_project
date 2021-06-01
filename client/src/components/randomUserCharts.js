import React from "react";
import "../stylesheets/homepage.css";
import { Pie } from "react-chartjs-2";

class RandomUserCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.stats.results);
    let { female, firstName, lastName, age, states } = this.props.stats.results;
    let genderData = {
      datasets: [
        {
          label: "% of total population",
          data: [female, 100.0 - female],
          backgroundColor: ["rgba(93, 78, 109,.5)", "rgba(201, 242, 153,0.5"],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Female", "Male"],
    };
    return (
      <div className="charts-container">
        <Pie id="gender" data={genderData}></Pie>
      </div>
    );
  }
}

export default RandomUserCharts;
