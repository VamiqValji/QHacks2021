const router = require("express").Router();
const signIn = require("../models/signInModel");

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
  console.log(req.body.email);
  console.log(req.body.password);

  let isDuplicate = await signIn.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (isDuplicate) {
    return res.status(400).json({ message: "That already exists." });
  }
  // else, create new item in database
  item = new signIn({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(item);
  item.save();
  return res.status(201).json({ message: "Created." });
});

module.exports = router;
