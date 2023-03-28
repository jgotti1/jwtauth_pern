// Postgress DB connect
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

//db connect the pool PG option automatcily will look in the .env file to connect
const pool = new Pool();



module.exports = {
  query: (text, params) => pool.query(text, params),
};
