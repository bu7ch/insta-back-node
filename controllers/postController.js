const validationHandler = require("../validations/validationHandler");

exports.index = (req, res) => {
  res.json({ message: "coucou" });
};

exports.store = (req, res, next) => {
  try {
    validationHandler(req);
    res.send({message: ` The name is ${req.body.name}`});
  } catch (err) {
    next(err);
  }
};
