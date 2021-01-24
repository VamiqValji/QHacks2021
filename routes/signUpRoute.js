const router = require("express").Router();
const signIn = require("../models/signInModel");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  signIn
    .find() // finds all as no other parameters are specified
    .then((result) => {
      res.send(result);
    })
    .then((req) => {
      console.log(req);
    });
});

router.post("/", async (req, res) => {
  // console.log(req.body.email);
  // console.log(req.body.password);
  console.log(req.body);
  let hashedPass = await bcrypt.hash(req.body.password, 10); //lvl of encryption

  let isDuplicate = await signIn.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (isDuplicate) {
    console.log("Duplicate email.");
    return res.status(400).json({ message: "That email is already used." });
  }
  // else, create new item in database
  item = new signIn({
    email: req.body.email,
    password: hashedPass,
    organization: req.body.organization,
  });
  console.log(item);
  item.save();
  console.log("Created account.");
  return res.status(201).json({ message: "Created." });
});

module.exports = router;
