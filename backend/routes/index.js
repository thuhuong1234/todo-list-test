const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todos')

router.get('/todos', todosController.getTodos)
// router.post('/todos')
// router.put('/todos/:id')
// router.delete('/todos/:id')

module.exports = router;
