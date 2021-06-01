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

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//  text/plain
//  application/json
// text/xml && application/xml
app.post("/api/randomUser", (req, res) => {
  // console.log(req);
  let database = req.body;
  let data = randomPeople.parseAndExtract(database);
  if (data === null)
    res.status(400).send("Something wrong with the given JSON Data.");
  else if (req.headers.accept === "text/plain") {
    res.set("text/plain").send(randomPeople.jsonToText(data));
  } else if (req.headers.accept === "text/xml")
    res.set("text/xml").send(toXML({ results: data }));
  else if (req.headers.accept === "application/xml")
    res.set("application/xml").send(toXML({ results: data }));
  else res.send({ results: data });
});
