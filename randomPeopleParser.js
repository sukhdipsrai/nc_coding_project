// const { fs } = require("fs");
// let inputJSON = require("./input.json");
// let database = JSON.parse(fs.readFileSync("input.json", "utf-8"));

// console.log(parseAndExtract(inputJSON));
function parseAndExtract(database) {
  let res = {
    female: 0,
    firstName: {
      "a-m": 0,
    },
    lastName: {
      "a-m": 0,
    },
    topStatesTotal: [],
    topStatesFemale: [],
    topStatesMale: [],
    age: [],
  };
  let states = {};
  let ageGroup = [0, 0, 0, 0, 0, 0];
  let total = 0;
  for (let key in database.results) {
    let value = database.results[key];

    let gender = value.gender;
    let state = value.location.state; //.split(" ").join("_");
    let genderIndex = null; // used for referencing the array which is keyed to state names in our states hash table
    let firstName = value.name.first;
    let lastName = value.name.last;
    let age = value.dob.age;
    total++; // keeping count of total names

    // female count
    if (gender === "female") {
      res.female++;
      genderIndex = 0;
      // "New York" : [ femaleCount++, maleCount++, state total++], see line 45
    } else if (gender === "male") genderIndex = 1; // documentation says only male and female genders

    // counting male and females for each state,
    if (states[state] === undefined) states[state] = [0, 0]; // initialize key,value pair
    states[state][genderIndex]++; // if genderIndex == 0 increment female count, == 1 increment male, index 2 is state total

    // check first letter of firstname, a-m , n-z conditions
    if (typeof firstName === "string" && charA_M(firstName[0]))
      res.firstName["a-m"]++;

    // check first letter of lastname, a-m , n-z conditions
    if (typeof lastName === "string" && charA_M(lastName[0]))
      res.lastName["a-m"]++;

    // Sort Ages into the ageGroup Array
    if (age > 100) ageGroup[5]++;
    else ageGroup[Math.ceil(age / 20) - 1]++;
  } // end loop through database JSON

  // convert current stats into percent
  res.female = percentAndRound(res.female / total);
  res.firstName["a-m"] = percentAndRound(res.firstName["a-m"] / total);
  res.lastName["a-m"] = percentAndRound(res.lastName["a-m"] / total);

  // Create and Array of states and their total population
  statesArr = [];
  Object.keys(states).forEach((k) => {
    let v = states[k];
    statesArr.push([k, v[0], v[1], v[0] + v[1]]);
  });

  // State
  // Sort the States Array for top total population
  statesArr.sort((first, second) => {
    if (first[3] === second[3]) return first[0] < second[0] ? -1 : 1;
    else return first[3] > second[3] ? -1 : 1;
  });
  // Grab upto the first 10 and JSON-fy
  for (let i = 0; i < 10; i++) {
    if (statesArr[i] !== undefined) {
      let name = statesArr[i][0];
      let x = statesArr[i][1];
      let y = statesArr[i][2];
      let z = statesArr[i][3];
      res.topStatesTotal.push({
        _name: "state",
        _content: {
          name: name,
          rank: i + 1,
          female: percentAndRound(x / z),
          male: percentAndRound(y / z),
          total: percentAndRound(z / total),
        },
      });
    }
  }
  // console.log(statesArr);
  // Female
  // Sort the States Array for top femlale population
  statesArr.sort((first, second) => {
    if (first[1] === second[1]) return first[0] < second[0] ? -1 : 1;
    else return first[1] > second[1] ? -1 : 1;
  });
  // console.log(statesArr);

  // Grab upto the first 10 and JSON-fy
  for (let i = 0; i < 10; i++) {
    if (statesArr[i] !== undefined) {
      let name = statesArr[i][0];
      let x = statesArr[i][1];
      let y = statesArr[i][2];
      let z = statesArr[i][3];
      res.topStatesFemale.push({
        _name: "state",
        _content: {
          name: name,
          rank: i + 1,
          female: percentAndRound(x / z),
          male: percentAndRound(y / z),
          total: percentAndRound(z / total),
        },
      });
    }
  }

  // Sort the States Array for top male population
  statesArr.sort((first, second) => {
    if (first[2] === second[2]) return first[0] < second[0] ? -1 : 1;
    else return first[2] > second[2] ? -1 : 1;
  });
  // Grab upto the first 10 and JSON-fy
  for (let i = 0; i < 10; i++) {
    if (statesArr[i] !== undefined) {
      let name = statesArr[i][0];
      let x = statesArr[i][1];
      let y = statesArr[i][2];
      let z = statesArr[i][3];
      res.topStatesMale.push({
        _name: "state",
        _content: {
          name: name,
          rank: i + 1,
          female: percentAndRound(x / z),
          male: percentAndRound(y / z),
          total: percentAndRound(z / total),
        },
      });
    }
  }

  ageGroup.forEach((ele, i) => {
    let ageGroupStr = "100+";
    if (i === 0) ageGroupStr = `${i * 20}-${(i + 1) * 20}`;
    else if (i !== 5) ageGroupStr = `${i * 20 + 1}-${(i + 1) * 20}`;
    ageGroup[i] = {
      _name: "ageGroup",
      _content: {
        group: ageGroupStr,
        percent: percentAndRound(ageGroup[i] / total),
      },
    };
  });
  res.age = ageGroup;
  res.total = total;
  return total === 0 ? null : res;
}

// true only if character is A-M
function charA_M(char) {
  // if (typeof char !== "string") return false; use before input
  let code = char[0].toLowerCase().charCodeAt(0);
  return code >= 97 && code <= 109;
}

// Takes a Decimal Number, multiply 100 to percent-fy and then round
function percentAndRound(value) {
  return Number((value * 100).toFixed(2));
}

function jsonToText(json) {
  let result = "";
  try {
    result += `Percentage female versus male: ${json.female}%\n`;
  } catch (error) {}
  try {
    result += `Percentage of first names that start with A-M versus N-Z: ${json.firstName["a-m"]}%\n`;
  } catch (error) {}
  try {
    result += `Percentage of last names that start with A-M versus N-Z: ${json.lastName["a-m"]}%\n`;
  } catch (error) {}

  try {
    for (key in json.topStatesTotal) {
      let value = json.topStatesTotal[key]._content;
      let stateName = value.name;
      result += `${stateName} rank in total population is: ${value.rank}, with a total population percentage of: ${value.total}%, with a state percentage of female versus male: ${value.female}%\n`;
    }
    for (key in json.topStatesFemale) {
      let value = json.topStatesFemale[key]._content;
      let stateName = value.name;
      result += `${stateName} rank in male population is: ${value.rank}, with a total population percentage of: ${value.total}%, with a state percentage of female versus male: ${value.female}%\n`;
    }
    for (key in json.topStatesMale) {
      let value = json.topStatesTotal[key]._content;
      let stateName = value.name;
      result += `${stateName} rank in female population is: ${value.rank}, with a total population percentage of: ${value.total}%, with a state percentage of female versus male: ${value.female}%\n`;
    }
  } catch (error) {}

  try {
    const ageStr = "The percentage of people in age range ";
    for (key in json.age) {
      let value = json.age[key]._content;
      result += ageStr + `${value.group} : ${value.percent}%\n`;
    }
  } catch (error) {}
  return result;
}

// const { toXML } = require("jstoxml");

// let data = parseAndExtract(inputJSON);
// console.log(data);
// let xml = toXML(data);

// console.log(xml);

module.exports = {
  parseAndExtract,
  jsonToText,
};
