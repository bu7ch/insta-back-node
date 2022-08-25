const postRouter = require("express").Router();
const postController = require("../controllers/postController");
const { hasDescription } = require("../validations/validators");
const uploadImage = require("../middlewares/multer");

postRouter.get("/", postController.index);
postRouter.post(
  "/",
  uploadImage("posts").single("image"),
  hasDescription,
  postController.store
);

module.exports = postRouter;
