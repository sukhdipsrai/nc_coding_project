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
      labels: ["Female", "Male"],
    };
    let firstNameData = {
      datasets: [
        {
          label: "% of total population",
          data: [firstName["a-m"], 100.0 - firstName["a-m"]],
          backgroundColor: ["rgba(93, 78, 109,.5)", "rgba(201, 242, 153,0.5"],
        },
      ],
      labels: ["A-M", "N-Z"],
    };
    let lastNameData = {
      datasets: [
        {
          label: "% of total population",
          data: [lastName["a-m"], 100.0 - lastName["a-m"]],
          backgroundColor: ["rgba(93, 78, 109,.5)", "rgba(201, 242, 153,0.5"],
        },
      ],
      labels: ["A-M", "N-Z"],
    };
    let ageLabels = [];
    let ageValues = [];
    age.forEach((ele) => {
      ageLabels.push(ele.group);
      ageValues.push(ele.percent);
    });
    let ageGroup = {
      datasets: [
        {
          label: "% of total population",
          data: [lastName["a-m"], 100.0 - lastName["a-m"]],
          backgroundColor: ["rgba(93, 78, 109,.5)", "rgba(201, 242, 153,0.5"],
        },
      ],
      labels: ["A-M", "N-Z"],
    };
    return (
      <div className="charts-container">
        <Pie id="gender" data={genderData}></Pie>
        <Pie id="firstName" data={firstNameData}></Pie>
        <Pie id="lastName" data={lastNameData}></Pie>
      </div>
    );
  }
}

export default RandomUserCharts;
