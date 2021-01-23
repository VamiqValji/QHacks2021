const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./env");
const app = express();
// const signInModel = require("./models/signInModel");
// const request = require("request");
const cors = require("cors");
const signInRoute = require("./routes/signInRoute");
const signUpRoute = require("./routes/signUpRoute");
// const passport = require("passport");
// const initializePassport = require("./passport-config");

// initializePassport(passport, email => {
// });

app.use(express.json());

app.use(cors({}));

app.use("/signin", signInRoute);
app.use("/signup", signUpRoute);

// connect to database
port = 3001;
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(port, () => console.log("Listening to port " + port))
  )
  .catch((err) => {
    console.log(err);
  });
