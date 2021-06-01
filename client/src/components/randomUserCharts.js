import React from "react";
import "../stylesheets/randomUserCharts.css";
import { Pie, Bar } from "react-chartjs-2";

class RandomUserCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  parseStateData = (statesTopData) => {
    let stateFemale = [];
    let stateMale = [];
    let stateTotal = [];
    let stateLabels = [];

    statesTopData.forEach((ele) => {
      stateLabels.push(ele.name);
      stateMale.push(100.0 - ele.female);
      stateFemale.push(ele.female);
      stateTotal.push(ele.total);
    });

    let data = {
      labels: stateLabels,
      datasets: [
        {
          type: "line",
          label: "Percentage of Total Population",
          data: stateTotal,
          backgroundColor: "rgba(184, 51, 106,.75",
          borderColor: "rgba(41, 41, 41, 1)",
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
    return data;
  };

  render() {
    console.log(this.props.stats.results);
    let { female, firstName, lastName, age } = this.props.stats.results;
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
          color: "#130405",
        },
      ],
      labels: ageLabels,
    };

    let optionsBar = {
      plugins: {
        title: {
          display: true,
          text: "Add Tittle heare",
          color: "#292929",
          font: {
            size: 18,
          },
        },
        legend: {
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: "Name of State",
            color: "#292929",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
        y: {
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(41, 41, 41, 1)",
          },
          title: {
            display: true,
            text: "Percent %",
            color: "#292929",
            font: {
              size: 14,
              weight: "bold",
            },
          },
        },
      },
    };
    let optionsPie = {
      plugins: {
        title: {
          display: true,
          text: "Add Tittle heare",
          color: "#292929",
          font: {
            size: 18,
          },
        },
        legend: {
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      responsive: true,
    };
    let options1 = optionsBar;
    options1.plugins.title.text = "Top States Ranked by General Population";
    let options2 = optionsBar;
    options2.plugins.title.text = "Top States Ranked by Female Population";
    let options3 = optionsBar;
    options3.plugins.title.text = "Top States Ranked by Male Population";

    let options4 = optionsPie;
    options4.plugins.title.text = "Female Vs. Male Population";
    let options5 = optionsPie;
    options5.plugins.title.text = "First Names that start with A-M Vs. N-Z.";
    let options6 = optionsPie;
    options6.plugins.title.text = "Last Names that start with A-M Vs. N-Z.";
    let options7 = optionsPie;
    options7.plugins.title.text = "Different Age Groups of the Population";

    return (
      <div className="charts-container">
        <Pie
          className="pie gender"
          id="gender"
          data={genderData}
          height="50"
          width="50"
          options={options4}
        ></Pie>
        <Pie
          className="pie firstName"
          id="firstName"
          data={firstNameData}
          height="50"
          width="50"
          options={options5}
        ></Pie>
        <Pie
          className="pie lastName"
          id="lastName"
          data={lastNameData}
          height="50"
          width="50"
          options={options6}
        ></Pie>
        <Pie
          className="pie ageGroup"
          id="ageGroups"
          data={ageGroupData}
          height="50"
          width="50"
          options={options7}
        ></Pie>
        <Bar
          id="topStateTotal"
          className="bar stateTotal"
          data={this.parseStateData(this.props.stats.results.topStatesTotal)}
          options={options1}
        ></Bar>
        <Bar
          id="topStateFemale"
          className="bar stateFemale"
          data={this.parseStateData(this.props.stats.results.topStatesFemale)}
          options={options2}
        ></Bar>
        <Bar
          id="topStateMale"
          className="bar stateMale"
          data={this.parseStateData(this.props.stats.results.topStatesMale)}
          options={options3}
        ></Bar>
      </div>
    );
  }
}

export default RandomUserCharts;
