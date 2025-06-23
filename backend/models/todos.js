const db = require("../db");

function getTodos() {
  return db.table("todos").select("*");
}
function createTodo(todo) {
  return db.table("todos").insert(todo);
}

module.exports = {
  getTodos,
  createTodo,
};
