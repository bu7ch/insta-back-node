const authRouter = require("express").Router();

const passportJWT = require("../middlewares/passportJWT")();
const authController = require("../controllers/authController");

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);
authRouter.get("/me", passportJWT.authenticate(), authController.me);

module.exports = authRouter;
