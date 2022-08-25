const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  // user:
  createAt: { type: Date, default: Date.now() },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
