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

module.exports = router;
