const { fs } = require("fs");
let inputJSON = require("./input.json");

// let database = JSON.parse(fs.readFileSync("input.json", "utf-8"));
let res = {
  female: 0,
  firstName: {
    "a-m": 0,
  },
  lastName: {
    "a-m": 0,
  },
  age: {
    "0-20": 0,
    "21-40": 0,
    "41-60": 0,
    "61-80": 0,
    "81-100": 0,
    "100+": 0,
  },
};
function parseAndExtract(database) {
  let states = {};
  let ageGroup = [0, 0, 0, 0, 0, 0];
  let total = 0;
  for (let key in database.results) {
    let value = database.results[key];

    let gender = value.gender;
    let state = value.location.state;
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

  // Assign the array elements into our response JSON
  res.age["0-20"] = ageGroup[0];
  res.age["21-40"] = ageGroup[1];
  res.age["41-60"] = ageGroup[2];
  res.age["61-80"] = ageGroup[3];
  res.age["81-100"] = ageGroup[4];
  res.age["100+"] = ageGroup[5];

  // TODO: sort state by population and access hastable to get the top 10, and gender stats, create JSON and add to res

  statesArr = [];
  Object.keys(states).forEach((k) => {
    let v = states[k];
    statesArr.push([k, v[0] + v[1] + v[2]]);
  });

  statesArr = statesArr.sort((first, second) => {
    if (first[1] === second[1]) return first[0] < second[0] ? -1 : 1;
    else return first[1] > second[1] ? -1 : 1;
  });
  let topState = {};

  for (let i = 0; i < 10 && i < statesArr.length; i++) {
    let k = statesArr[i][0];
    let stateTotal = statesArr[i][1];
    topState[k] = {
      female: percentAndRound(states[k][0] / stateTotal),
      male: percentAndRound(states[k][1] / stateTotal),
      total: percentAndRound(statesArr[i][1] / total),
    };
  }
  res.states = topState;
  return res;
}

function charA_M(char) {
  // if (typeof char !== "string") return false; use before input
  let code = char[0].toLowerCase().charCodeAt(0);
  return code >= 97 && code <= 109;
}

function percentAndRound(value) {
  return Number((value * 100).toFixed(2));
}

console.log(parseAndExtract(inputJSON));
