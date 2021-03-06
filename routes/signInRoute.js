const router = require("express").Router();
const signIn = require("../models/signInModel");
const loggedIn = require("../models/loggedIn");
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

const loginUser = async (EMAIL, ORGANIZATION) => {
  let exists;
  console.log(EMAIL);
  console.log(`ORGORGORG${ORGANIZATION}`);
  exists = await loggedIn.findOne({
    email: EMAIL,
  });
  console.log(exists);
  if (!exists) {
    let item = new loggedIn({
      email: EMAIL,
      organization: ORGANIZATION,
    });
    console.log(item);
    item.save();
    console.log("logged in");
  } else {
    // log out
    // await loggedIn.findOneAndDelete({ // delete
    //   email: EMAIL,
    // });
    console.log("logged out");
    router.get("/logged", (req, res) => {
      // signin/logged
      loggedIn
        .find() // finds all as no other parameters are specified
        .then((result) => {
          res.send(result);
        });
      // .then((req) => {
      //   console.log(req);
      // });
    });
  }
};

router.post("/", async (req, res) => {
  let isDuplicate = await signIn.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (isDuplicate) {
    console.log("Found email.");
    console.log(isDuplicate);
    console.log(req.body.password);
    console.log(isDuplicate.password);
    if (!bcrypt.compareSync(req.body.password, isDuplicate.password)) {
      console.log("Incorrect password.");
    } else {
      console.log("Correct password.");
      loginUser(req.body.email, isDuplicate.organization);
    }
    // return res.status(400).json({ message: "That already exists." });
  }
});

module.exports = router;
