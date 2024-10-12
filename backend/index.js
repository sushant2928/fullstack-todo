const express = require("express");
require("dotenv").config();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

app.post("/todo", async (req, res) => {
  const { body } = req;
  const payload = createTodo.safeParse(body);
  if (!payload.success) {
    return res.status(411).json({
      msg: "Invalid Data!",
    });
  }
  const { title, description } = payload?.data || {};
  try {
    await todo.create({
      title,
      description,
      completed: false,
    });
    return res.status(200).json({
      msg: "Todo Created!",
    });
  } catch (e) {
    return res.status(500).json({
      msg: e?.message || "Something went wrong!",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    return res.status(200).json({
      todos,
    });
  } catch (e) {
    return res.status(500).json({
      msg: e?.message || "Something went wrong!",
    });
  }
});

app.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const payload = updateTodo.safeParse(body);
  if (!id || !payload?.data) {
    return res.status(411).json({
      msg: "Invalid Data!",
    });
  }
  try {
    const result = await todo.updateOne({ _id: id }, { ...payload.data });
    if (result.nModified === 0) {
      return res
        .status(404)
        .json({ message: "Todo not found or no changes made" });
    }
    return res.status(204).send();
  } catch (e) {
    res.status(500).json({
      msg: e?.message || "Something went wrong!",
    });
  }
});

app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(411).json({
      msg: "Invalid Data!",
    });
  }
  try {
    const result = await todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(204).send();
  } catch (e) {
    return res.status(500).json({
      msg: e?.message || "Something went wrong!",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
