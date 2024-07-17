const express = require("express");
const { createTodo, updateTodo } = require("./type");
const app = express();
const { todo } = require("./db");

app.use(express().json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});
//
app.get("/todods", async (res, res) => {
  const todos = await todo.find({});
  res.json({
    todos: todos,
  });
});
//
app.put("/completed", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.updateMany(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});
