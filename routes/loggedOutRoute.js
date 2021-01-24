// const router = require("express").Router();
// const loggedIn = require("../models/loggedIn");

// router.get("/", (req, res) => {
//     let exists;
//     let EMAIL = req.body.email;
//     exists = await loggedIn.findOne({
//       email: EMAIL,
//     });
//     console.log(exists);
//     if (!exists) {
//       let item = new loggedIn({
//         email: EMAIL,
//       });
//       console.log(item);
//       item.save();
//       console.log("logged in");
//     } else {
//       // log out
//       await loggedIn.findOneAndDelete({
//         email: EMAIL,
//       });
//       console.log("logged out");
//       router.get("/logged", (req, res) => {
//         // signin/logged
//         loggedIn
//           .find() // finds all as no other parameters are specified
//           .then((result) => {
//             res.send(result);
//           });
//         // .then((req) => {
//         //   console.log(req);
//         // });
//       });
//     }
// });

// const loginUser = async (EMAIL) => {

// };

// router.post("/", async (req, res) => {
//   let isDuplicate = await signIn.findOne({
//     email: req.body.email,
//     // password: req.body.password,
//   });
//   if (isDuplicate) {
//     console.log("Found email.");
//     if (!bcrypt.compareSync(req.body.password, isDuplicate.password)) {
//       console.log("Incorrect password.");
//     } else {
//       console.log("Correct password.");
//       loginUser(req.body.email);
//     }
//     // return res.status(400).json({ message: "That already exists." });
//   }
// });

// module.exports = router;
