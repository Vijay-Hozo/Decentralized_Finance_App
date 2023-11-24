const express = require("express");

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.listen("5000", () => {
  console.log("Server running on Port 5000");
});
