const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  "addtodo": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
