const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema (like a blueprint)
let loggedInSchema = new Schema({
  email: String,
  organization: String,
});

let loggedIn = mongoose.model("loggedIn", loggedInSchema);

module.exports = loggedIn;
