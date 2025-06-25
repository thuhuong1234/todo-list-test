const todosModel = require("../models/todos");
async function getTodos(req, res) {
  try {
    const { is_completed, page = 1, limit = 10, search = "" } = req.query;
    const offset = (page - 1) * limit;
    let todos = todosModel.getTodos();

    if (is_completed === "0" || is_completed === "1") {
      todos = todos.where("is_completed", parseInt(is_completed));
    }
    if (search) {
      todos = todos.andWhere(function () {
        this.where("title", "like", `%${search}%`).orWhere(
          "description",
          "like",
          `%${search}%`
        );
      });
    }

    const result = todos
      .clone()
      .select("*")
      .limit(limit)
      .offset(offset)
      .orderBy("due_date", "asc");
    const total = todos.clone().count("* as total");

    const [data, totalResult] = await Promise.all([result, total]);

    res.status(200).json({
      message: "Todos fetched successfully",
      todos: data,
      total: totalResult[0].total,
      page: parseInt(page),
      limit: parseInt(limit),
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching todos",
      error: error.message,
    });
  }
}
async function getTodoById(req, res) {
  try {
    const todo = await todosModel.getTodoById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching todo",
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
async function deleteTodo(req, res) {
  try {
    const todo = await todosModel.deleteTodo(req.params.id, res);
    res.status(200).json({
      message: "Todo deleted successfully",
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting todo",
      error: error.message,
    });
  }
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
