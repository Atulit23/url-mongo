const connectToMongo = require("./connections");
const express = require("express");
var cors = require("cors");
const axios = require("axios");
const UserDetails = require("../Models/UserDetails");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

connectToMongo();
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.post("/add-result", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  await UserDetails.insertMany({
    result: data,
  })
    .then(() => {
      res.send({ message: "Added!" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app