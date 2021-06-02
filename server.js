const randomPeople = require("./randomPeopleParser");
const { toXML } = require("jstoxml");
const express = require("express");
// const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(
  express.json({ limit: "50mb", parameterLimit: 500000000, extended: true })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    parameterLimit: 500000000,
    extended: true,
  })
);
app.listen(port, () => console.log(`Listening on port ${port}`));

// serve the index.html react client
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//  text/plain
//  application/json
//  text/xml && application/xml
//  accepting the above accept headers
app.post("/api/randomUser", (req, res) => {
  // console.log(req);
  let database = req.body;
  // first create JSON statisitics
  let data = randomPeople.parseAndExtract(database);
  // 400 response, failed to parse and/or extract values from JSON, or empty data set
  if (data === null)
    res.status(400).send("Something wrong with the given JSON Data.");
  // convert JSON to human readable text
  else if (req.headers.accept === "text/plain")
    res.set("text/plain").send(randomPeople.jsonToText(data));
  // convert JSON to XML
  else if (req.headers.accept === "text/xml")
    res.set("text/xml").send(toXML({ results: data }));
  // convert JSON to XML
  else if (req.headers.accept === "application/xml")
    res.set("application/xml").send(toXML({ results: data }));
  // otherwise send as JSON, application/json
  else res.send({ results: data });
});
