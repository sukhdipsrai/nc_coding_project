const fs = require("fs");

let database = JSON.parse(fs.readFileSync("input.json", "utf-8")).toArray();

console.log(typeof database);
