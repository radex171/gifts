const express = require("express");
const app = express();
const { port } = require("./Config/Config");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose

mongoose.connect(
  "mongodb+srv://radex171:radzio171@giftdb.onuptac.mongodb.net/OliwiaGifts"
);

//require route
app.use("/", require("./Routes/Route"));

app.use(express.static(path.resolve(__dirname, "../../build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../build", "index.html"));
});

app.listen(port, () => {
  console.log("serwer słucha localhost:", port);
});
