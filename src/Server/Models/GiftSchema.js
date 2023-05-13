const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let giftSchema = new Schema(
  {
    picture: String,
    name: String,
    price: String,
    missingCash: String,
  },
  { collection: "gifts" }
);

const Gift = mongoose.model("Gift", giftSchema);
module.exports = Gift;
