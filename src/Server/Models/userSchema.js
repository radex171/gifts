const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  {
    collection: "user",
  }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
