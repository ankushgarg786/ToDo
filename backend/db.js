const mongoose = require("mongoose");
const { MONGO_DB_URL } = require("./config");
mongoose.connect(MONGO_DB_URL);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
