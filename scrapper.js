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

const alpha1 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];
const alpha2 = [
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let states = {
  Alaska: [0, 0],
  Alabama: [0, 0],
  Arkansas: [0, 0],
  "American Samoa": [0, 0],
  Arizona: [0, 0],
  California: [0, 0],
  Colorado: [0, 0],
  Connecticut: [0, 0],
  "District of Columbia": [0, 0],
  Delaware: [0, 0],
  Florida: [0, 0],
  Georgia: [0, 0],
  Guam: [0, 0],
  Hawaii: [0, 0],
  Iowa: [0, 0],
  Idaho: [0, 0],
  Illinois: [0, 0],
  Indiana: [0, 0],
  Kansas: [0, 0],
  Kentucky: [0, 0],
  Louisiana: [0, 0],
  Massachusetts: [0, 0],
  Maryland: [0, 0],
  Maine: [0, 0],
  Michigan: [0, 0],
  Minnesota: [0, 0],
  Missouri: [0, 0],
  Mississippi: [0, 0],
  Montana: [0, 0],
  "North Carolina": [0, 0],
  "North Dakota": [0, 0],
  Nebraska: [0, 0],
  "New Hampshire": [0, 0],
  "New Jersey": [0, 0],
  "New Mexico": [0, 0],
  Nevada: [0, 0],
  "New York": [0, 0],
  Ohio: [0, 0],
  Oklahoma: [0, 0],
  Oregon: [0, 0],
  Pennsylvania: [0, 0],
  "Puerto Rico": [0, 0],
  "Rhode Island": [0, 0],
  "South Carolina": [0, 0],
  "South Dakota": [0, 0],
  Tennessee: [0, 0],
  Texas: [0, 0],
  Utah: [0, 0],
  Virginia: [0, 0],
  "Virgin Islands": [0, 0],
  Vermont: [0, 0],
  Washington: [0, 0],
  Wisconsin: [0, 0],
  "West Virginia": [0, 0],
  Wyoming: [0, 0],
};

for (let key in database.results) {
  let value = database.results[key];

  if (key === "0") console.log(key, value);

  if (value.gender === "male") male++;
  else female++;
}

console.log(male, female);
