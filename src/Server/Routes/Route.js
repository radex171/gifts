const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");

//
router.route("/register").post((req, res) => {
  const { username, password, email } = req.body;
  const newUser = new User({
    username,
    password,
    email,
  });

  newUser.save();
});

router.route("/login").get((req, res) => {
  console.log(req.query);
  const { username, password } = req.query;
  console.log("tu sprawdz", username);
  User.find({ username: username, password: password }).then((foundUser) => {
    res.json(foundUser);
    console.log(foundUser);
  });
});

module.exports = router;
