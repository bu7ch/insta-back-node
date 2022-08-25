const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const port = process.env.PORT || 4000;

const errorHandler = require('./middlewares/errorHandler')
const postRoutes = require("./routes/post");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/post", postRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`[🚧 Listenning...!]`));
