const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db/dbconnect");

router.get("/", authorize, async (req, res) => {
  // console.log(req.user)
  try {
    const user = await pool.query(

      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user] 
    ); 
     res.json(user.rows[0])
  //  console.log(res.json(user.rows[0]))

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;