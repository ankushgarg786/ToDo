const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(
  "mongodb+srv://admin:admin%40123@cluster0.nuhnpst.mongodb.net/ToDo"
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
