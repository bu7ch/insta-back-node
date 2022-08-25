const postRouter = require("express").Router();
const postController = require("../controllers/postController");
const { hasDescription } = require("../validations/validators");
const uploadImage = require("../middlewares/multer");

postRouter.get("/", postController.index);
postRouter.get("/:id", postController.show);
postRouter.post(
  "/",
  uploadImage("posts").single("image"),
  hasDescription,
  postController.store
);
postRouter.patch("/:id",hasDescription, postController.update); //FIXME: bug w/ errorHandler

module.exports = postRouter;
