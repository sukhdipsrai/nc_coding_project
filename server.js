const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get("/express_backend", (req, res) => {
  console.log(req.headers.accept);
  res.send({ express: "EXPRESS WORKING" });
});

//  text/plain
//  application/json
// text/xml && application/xml
app.post("/api/randomUser", (req, res) => {
  res.send("test");
});
