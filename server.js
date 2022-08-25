const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => console.log(`[🚧 Listenning...!]`));