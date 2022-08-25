const { body } = require("express-validator/check");

exports.hasName = body("name")
  .isLength({ min: 5 })
  .withMessage("Name is required.minimum length 5 characters");
