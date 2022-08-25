const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
  name: { type: String, required: true },
});
userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
userSchema.methods.validPassword = async (candidatePassword) => {
  const result = await bcrypt.compare(candidatePassword, this.password);
  return result;
};

const User = mongoose.model("User", userSchema);
