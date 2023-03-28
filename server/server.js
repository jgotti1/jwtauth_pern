const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config()

//Default Route
app.get("/", async (req, res) => {
  res.send("Welcome to JWT AUTH");
});

//Routes to controllers
app.use("/users", require("./controllers/usercontroller"));
app.use("/auth", require("./controllers/jwtAuth"));
app.use("/dashboard", require("./controllers/dashboard"));


const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});