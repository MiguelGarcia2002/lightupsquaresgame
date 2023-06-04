const mongoose = require("mongoose");

const userModelTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("mytable", userModelTemplate);
