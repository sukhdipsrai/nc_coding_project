const randomPeople = require("./randomPeopleParser");
const { toXML } = require("jstoxml");
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
  let data = randomPeople.parseAndExtract(database);
  if (req.headers.accept === "text/plain") {
    // convert to text and output
  } else if (req.headers.accept === "text/xml")
    res.set("text/xml").send(toXML({ results: data }));
  else if (req.headers.accept === "application/xml")
    res.set("application/xml").send(toXML({ results: data }));
  else res.send({ results: data });

  // TODO: if text, do txt format,  if xml do xml format, else return as is (JSON)
});
