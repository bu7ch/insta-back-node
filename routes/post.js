const postRouter = require("express").Router();
const postController = require("../controllers/postController");
const { hasName } = require("../validations/validators")


postRouter.get("/", postController.index);
postRouter.post("/", hasName, postController.store)

module.exports = postRouter;
