const randomPeople = require("./randomPeopleParser");

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000 }));
app.use(express.json({ limit: "50mb", parameterLimit: 500000000 }));

app.get("/express_backend", (req, res) => {
  console.log(req.headers.accept);
  res.send({ express: "EXPRESS WORKING" });
});

//  text/plain
//  application/json
// text/xml && application/xml
app.get("/api/randomUser", (req, res) => {
  let database = req.body;
  // console.log(randomPeople.parseAndExtract(database));
  console.log(req.headers.accept === "text/plain");
  console.log(
    req.headers.accept === "text/xml" ||
      req.headers.accept === "application/xml"
  );
  // TODO: if text, do txt format,  if xml do xml format, else return as is (JSON)
  res.send("test");
});
