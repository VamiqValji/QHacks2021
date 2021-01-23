const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema (like a blueprint)
let signInSchema = new Schema({
  email: String,
  password: String,
});

let signIn = mongoose.model("signIn", signInSchema);

module.exports = signIn;
