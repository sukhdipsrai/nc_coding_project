const database = require("./input.json");

// let database = JSON.parse(fs.readFileSync("input.json", "utf-8"));

for (let key in database.results) {
  let value = database.results[key];
  console.log(key, value);
}
