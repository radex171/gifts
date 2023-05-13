const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const Gift = require("../Models/GiftSchema");

//get all gift
router.route("/gifts").get((req, res) => {
  Gift.find().then((findGift) => {
    res.json(findGift);
  });
});

//register new user
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
  const { username, password } = req.query;

  User.find({ username: username, password: password }).then((foundUser) => {
    res.json(foundUser);
  });
});

module.exports = router;
