const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todos");
const { createTodoSchema, updateTodoSchema } = require("../validators/todos");
const validate = require("../middlewares/validate");

router.get("/todos", todosController.getTodos);
router.post("/todos", validate(createTodoSchema), todosController.createTodo);
router.get("/todos/:id", todosController.getTodoById);
router.put(
  "/todos/:id",
  validate(updateTodoSchema),
  todosController.updateTodo
);
router.delete("/todos/:id", todosController.deleteTodo);

module.exports = router;
