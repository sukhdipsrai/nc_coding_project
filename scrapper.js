const { fs } = require("fs");
const database = require("./input.json");

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

let states = {};

for (let key in database.results) {
  let value = database.results[key];
  let gender = value.gender;
  let state = value.location.state;
  let genderIndex = 1;
  // let total = database.results.size();
  if (key === "0") console.log(value);

  if (gender === "female") {
    res.female++;
    genderIndex = 0;
  }

  if (states[state] === undefined) states[state] = [0, 0];
  states[state][genderIndex]++;
}

console.log(states);
