const Post = require("../models/post");
const validationHandler = require("../validations/validationHandler");

exports.index = async(req, res) => {
  try {
    const posts = await Post.find().sort({ createAt: -1});
    res.json(posts);
  } catch (err) {
    next(err)
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.description = req.body.description;
    post.image = req.file.path;
    post = await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};
