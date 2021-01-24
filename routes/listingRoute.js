const router = require("express").Router();
const listing = require("../models/createListingModel");

router.get("/", (req, res) => {
  listing
    .find() // finds all as no other parameters are specified
    .then((result) => {
      res.send(result);
    })
    .then((req) => {
      console.log(req);
    });
});

router.post("/", async (req, res) => {
  console.log(req.body);

  let isDuplicate = await listing.findOne({
    fullName: req.body.fullName,
    resName: req.body.resName,
    resPostalCode: req.body.resPostalCode,
    resAddress: req.body.resAddress,
    phoneNumber: req.body.phoneNumber,
    image: req.body.image,
  });
  if (isDuplicate) {
    console.log("Duplicate listing.");
    return res
      .status(400)
      .json({ message: "That listing already is already used." });
  }
  // else, create new item in database
  item = new listing({
    fullName: req.body.fullName,
    resName: req.body.resName,
    resPostalCode: req.body.resPostalCode,
    resAddress: req.body.resAddress,
    phoneNumber: req.body.phoneNumber,
    image: req.body.image,
  });
  console.log(item);
  item.save();
  console.log("Created account.");
  return res.status(201).json({ message: "Created." });
});

module.exports = router;
