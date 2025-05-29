const todosModel = require('../models/todos');

async function getTodos(req, res) {
    try {
        const todos = await todosModel.getTodos(req, res);
        res.status(200).json({
            message: "Todos fetched successfully",
            todos: todos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching todos",
            error: error.message
        });
    }
}

module.exports = {
    getTodos
}
