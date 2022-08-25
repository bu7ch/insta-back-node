const followRouter = require("express").Router();
const followController = require("../controllers/followController");
followRouter.post("/:id", followController.follow);


module.exports = followRouter;