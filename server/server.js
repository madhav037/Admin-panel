const express = require("express");
const cors = require("cors");
const { checkDataWithDb } = require("./database.js");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("HEllo");
  console.log("listening on port 5000");
});

app.post("/", async (req, res) => {
  const emailNumber = req.body.emailNumber;
  const password = req.body.password;
  if (await checkDataWithDb(emailNumber, password)) {
    res.json("success");
  } else {
    res.status(400).json("error login in");
  }
});
app.listen(5000);
