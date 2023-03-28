// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("../db/dbconnect");
const app = express();

app.use(cors());
dotenv.config

//Get all users
router.get("/", async (req, res) => {
  try {
    const results = await database.query("SELECT * FROM users");
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;