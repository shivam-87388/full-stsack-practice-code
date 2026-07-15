const mongoose = require("mongoose");
const todo = new mongoose.Schema({
  addtodo: {
    type: String,
    required: true,
  },
});

module.exports = todo;
