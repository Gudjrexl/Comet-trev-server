const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: String,
  uid: { type: String, unique: true },
  ucode: { type: String, unique: true },
  name: String,
  isVerified: { type: Boolean, default: false },
  avatar: String,
  about: String,
  status: String
});

module.exports = mongoose.model("userdet", userSchema);