const db = require("../db");

function getTodos() {
  return db.table("todos");
}
function getTodoById(id) {
  return db.table("todos").where({ id });
}
function createTodo(todo) {
  return db.table("todos").insert(todo);
}
function updateTodo(id, todo) {
  return db.table("todos").where({ id }).update(todo);
}
function deleteTodo(id) {
  return db.table("todos").where({ id }).del();
}

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
