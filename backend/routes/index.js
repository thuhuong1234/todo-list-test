const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todos");
const { createTodoSchema } = require("../validators/todos");
const validate = require("../middlewares/validate");

router.get("/todos", todosController.getTodos);
router.post("/todos", validate(createTodoSchema), todosController.createTodo);
// router.put('/todos/:id')
// router.delete('/todos/:id')

module.exports = router;
