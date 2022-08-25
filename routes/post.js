const postRouter = require("express").Router();
const postController = require("../controllers/postController");

postRouter.get("/", postController.index);

module.exports = postRouter;
