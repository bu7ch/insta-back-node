const { body } = require("express-validator/check");

exports.hasDescription = body("description")
  .isLength({ min: 5 })
  .withMessage("Name is required.minimum length 5 characters");
