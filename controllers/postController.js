const Post = require("../models/post");
const validationHandler = require("../validations/validationHandler");

exports.index = async (req, res) => {
  try {
    const posts = await Post.find().populate('user').sort({ createAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};
exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.description = req.body.description;
    post.image = req.file.filename;
    post.user = req.user
    post = await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};
exports.show = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id }).populate('user');
    res.json(post);
  } catch (err) {
    next(err);
  }
};
exports.update = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = await Post.findById(req.params.id);
    if(!post || post.user != req.user.id){
      const error = new Error("Wrong request")
      error.statusCode = 400;
      throw error;
    }
    post.description = req.body.description;
    post = await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};
exports.delete = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);
    if(!post || post.user != req.user.id){
      const error = new Error("Wrong request")
      error.statusCode = 400;
      throw error;
    }
    await post.delete();
    res.json({message: "Post successfuly deleted!"})
  } catch (err) {
    next(err)
  }
}