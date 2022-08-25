const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const volleyball = require("volleyball");

const port = process.env.PORT || 4000;

const mongoose = require("mongoose");

const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/insta-node", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log(`[MongoDB is connected!!]`);
});

app.use(cors());
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/post", postRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`[🚧 Listenning...!]`));
