const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin%40123@cluster0.nuhnpst.mongodb.net/"
);
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
