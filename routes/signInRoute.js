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
  let isDuplicate = await signIn.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (isDuplicate) {
    console.log("authenticate user");
    // return res.status(400).json({ message: "That already exists." });
  }
});

module.exports = router;
