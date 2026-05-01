const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  rollNumber: String,
  amount: Number,
  month: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;