const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = async (req, res, next) => {
  // Get token from header
  const jwtToken = req.header("jwt_token");
  // Check if not token
  if (!jwtToken) {
    return res.status(403).json({ msg: "authorization denied" });
  }
  // Verify token
  try {
  
    const payload= jwt.verify(jwtToken, process.env.jwtSecret);

    req.user = payload.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};