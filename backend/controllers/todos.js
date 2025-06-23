const todosModel = require("../models/todos");
async function getTodos(req, res) {
  try {
    const todos = await todosModel.getTodos(req, res);
    res.status(200).json({
      message: "Todos fetched successfully",
      todos: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching todos",
      error: error.message,
    });
  }
}
async function createTodo(req, res) {
  try {
    const todo = await todosModel.createTodo(req.body, res);
    res.status(200).json({
      message: "Todo created successfully",
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating todo",
      error: error.message,
    });
  }
}

async function updateTodo(req, res) {
  try {
    const todo = await todosModel.updateTodo(req.params.id, req.body, res);
    res.status(200).json({
      message: "Todo updated successfully",
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating todo",
      error: error.message,
    });
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
};
