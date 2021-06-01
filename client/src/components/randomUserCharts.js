import React from "react";
import "../stylesheets/homepage.css";
import { Pie, Bar } from "react-chartjs-2";

class RandomUserCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.stats.results);
    let { female, firstName, lastName, age, topStatesTotal } =
      this.props.stats.results;
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
    let ageGroupData = {
      datasets: [
        {
          label: "% of total population",
          data: ageValues,
          backgroundColor: [
            "rgba(131, 182, 146,.75)",
            "rgba(184, 51, 106,.75",
            "rgba(249, 98, 125,.75",
            "rgba(173, 252, 146,.75",
            "rgba(91, 55, 88,.75",
            "rgba(71, 49, 152,.75)",
          ],
        },
      ],
      labels: ageLabels,
    };

    let stateFemale = [];
    let stateMale = [];
    let stateTotal = [];
    let stateLabels = [];
    topStatesTotal.forEach((ele) => {
      stateLabels.push(ele.name);
      stateMale.push(100.0 - ele.female);
      stateFemale.push(ele.female);
      stateTotal.push(ele.total);
    });

    let stateData = {
      labels: stateLabels,
      datasets: [
        {
          type: "bar",
          label: "Percentage of Total Population",
          data: stateTotal,
          backgroundColor: "rgba(184, 51, 106,.75",
        },
        {
          type: "bar",
          label: "Percentage of Females in the State",
          data: stateFemale,
          backgroundColor: "rgba(93, 78, 109,.75)",
        },
        {
          type: "bar",
          label: "Percentage of Males in the State",
          data: stateMale,
          backgroundColor: "rgba(201, 242, 153,0.75",
        },
      ],
    };
    return (
      <div className="charts-container">
        <Pie id="gender" data={genderData}></Pie>
        <Pie id="firstName" data={firstNameData}></Pie>
        <Pie id="lastName" data={lastNameData}></Pie>
        <Pie id="ageGroups" data={ageGroupData}></Pie>
        <Bar id="stateData" data={stateData}></Bar>
      </div>
    );
  }
}

export default RandomUserCharts;
