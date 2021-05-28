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
  };
  let states = {};
  let ageGroup = [0, 0, 0, 0, 0, 0];
  let total = 0;
  for (let key in database.results) {
    let value = database.results[key];

    let gender = value.gender;
    let state = value.location.state; //.split(" ").join("_");
    let genderIndex = 1; // used for referencing the array which is keyed to state names in our states hash table
    let firstName = value.name.first;
    let lastName = value.name.last;
    let age = value.dob.age;
    total++; // keeping count of total names
    // if (key === "0") console.log(value); // TODO: DELETE in production

    // female count
    if (gender === "female") {
      res.female++;
      genderIndex = 0;
      // "New York" : [ femaleCount++, maleCount++], see line 45
    } else if (gender !== "male") genderIndex = 2; // documentation says only male and female genders, but that can change so adding small error saftey

    // counting male and females for each state,
    if (states[state] === undefined) states[state] = [0, 0, 0]; // inistialize key,value pair
    states[state][genderIndex]++; // if genderIndex == 0 increment female count, == 1 increment male

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
    statesArr.push([k, v[0] + v[1] + v[2]]);
  });

  // Sort the States Array
  statesArr = statesArr.sort((first, second) => {
    if (first[1] === second[1]) return first[0] < second[0] ? -1 : 1;
    else return first[1] > second[1] ? -1 : 1;
  });

  // Grab upto the first 10 and JSON-fy
  let topState = [];
  for (let i = 0; i < 10 && i < statesArr.length; i++) {
    let k = statesArr[i][0];
    let stateTotal = statesArr[i][1];
    topState.push({
      name: k,
      rank: i + 1,
      female: percentAndRound(states[k][0] / stateTotal),
      male: percentAndRound(states[k][1] / stateTotal),
      total: percentAndRound(statesArr[i][1] / total),
    });
  }
  res.states = topState;

  ageGroup.forEach((ele, i) => {
    let ageGroupStr = "100+";
    if (i === 0) ageGroupStr = `${i * 20}-${(i + 1) * 20}`;
    else if (i !== 5) ageGroupStr = `${i * 20 + 1}-${(i + 1) * 20}`;
    ageGroup[i] = {
      group: ageGroupStr,
      perent: percentAndRound(ageGroup[i] / total),
    };
  });
  res.age = ageGroup;
  // Assign the array elements into our response JSON
  // res.age["_0-20"] = percentAndRound(ageGroup[0] / total);
  // res.age["_21-40"] = percentAndRound(ageGroup[1] / total);
  // res.age["_41-60"] = percentAndRound(ageGroup[2] / total);
  // res.age["_61-80"] = percentAndRound(ageGroup[3] / total);
  // res.age["_81-100"] = percentAndRound(ageGroup[4] / total);
  // res.age["_101-"] = percentAndRound(ageGroup[5] / total);
  return res;
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
    for (key in json.states) {
      let value = json.states[key];
      let stateName = value.name;
      result += `Population rank of ${stateName}: ${value.rank}\n`;
      result += `Percentage of people in ${stateName}: ${value.total}%\n`;
      result += `Percentage of female population in ${stateName}: ${value.female}%\n`;
      result += `Percentage of male population in ${stateName}: ${value.male}%\n`;
    }
  } catch (error) {}

  try {
    const ageStr = "The percentage of people in age range ";
    for (key in json.age) {
      let value = json.age[key];
      result += ageStr + `${value.group} : ${value.perent}%\n`;
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
