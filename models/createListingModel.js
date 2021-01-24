const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema (like a blueprint)
let listingSchema = new Schema({
  fullName: String,
  resName: String,
  resPostalCode: String,
  resAddress: String,
  phoneNumber: String,
  pickUpTime: String,
  image: String,
});

let listing = mongoose.model("listing", listingSchema);

module.exports = listing;
