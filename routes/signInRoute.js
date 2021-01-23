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
  //
});

module.exports = router;
