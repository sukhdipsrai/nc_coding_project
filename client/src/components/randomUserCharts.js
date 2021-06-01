import React from "react";
import "../stylesheets/randomUserCharts.css";
import { Pie, Bar } from "react-chartjs-2";

class RandomUserCharts extends React.Component {
  parseStateData = (statesTopData) => {
    let stateFemale = [];
    let stateMale = [];
    let stateTotal = [];
    let stateLabels = [];
    //  since this is a stacked and line graph, 3 data sets are needs, [male,female, total] and a labels array ["states"]
    statesTopData.forEach((ele) => {
      stateLabels.push(ele._content.name);
      stateMale.push(ele._content.male);
      stateFemale.push(ele._content.female);
      stateTotal.push(ele._content.total);
    });

    // each dataset is grouped with a type "bar,line etc", a label for hover information, and some styling options
    // one set of labels because this is intended for a stacked graph
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
    // Grab JSON slices from props, our stats data
    let { female, firstName, lastName, age } = this.props.stats.results;
    //  chart.js format for dataset, gender pie chart data
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
    // firstName pie chart data
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
    // lastName pie chart data
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
    // arrays to store age group labels and matching values
    let ageLabels = [];
    let ageValues = [];
    // iterate through JSON slice for age data and build our data arrays
    age.forEach((ele) => {
      ageLabels.push(ele._content.group);
      ageValues.push(ele._content.percent);
    });
    // age group pie chart data
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
    // default options param for our bar graphs, changing styling, copies are made where title text is changed
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
            color: "#292929",

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
          ticks: {
            color: "#292929", // this here
          },
        },
        y: {
          stacked: true,
          grid: {
            color: "#292929",
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
          ticks: {
            color: "#292929", // this here
          },
        },
      },
    };
    // our default options params for styling pie charts, copies are made where tittle text is changed
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
            color: "#292929",
            font: {
              size: 14,
            },
          },
        },
      },
      responsive: true,
    };
    // change titles and make copes of options params for pie and bar charts
    let options1 = JSON.parse(JSON.stringify(optionsBar));
    options1.plugins.title.text =
      "Top States Ranked by General Population (Highest to the left)";
    let options2 = JSON.parse(JSON.stringify(optionsBar));
    options2.plugins.title.text =
      "Top States Ranked by Female Population (Highest to the left)";
    let options3 = JSON.parse(JSON.stringify(optionsBar));
    options3.plugins.title.text =
      "Top States Ranked by Male Population (Highest to the left)";

    let options4 = JSON.parse(JSON.stringify(optionsPie));
    options4.plugins.title.text = "Percentage Female Vs. Male Population";
    let options5 = JSON.parse(JSON.stringify(optionsPie));
    options5.plugins.title.text =
      "Percentage First Names that start with A-M Vs. N-Z.";
    let options6 = JSON.parse(JSON.stringify(optionsPie));
    options6.plugins.title.text =
      "Percentage Last Names that start with A-M Vs. N-Z.";
    let options7 = JSON.parse(JSON.stringify(optionsPie));
    options7.plugins.title.text =
      "Percentage Different Age Groups of the Population";

    return (
      <div className="charts-container">
        {/* render chart.js react components, pass data and options built earlier */}
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
        {/* parseStateData, since all three JSON slices are similar, a method is used to create the daataset */}
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
