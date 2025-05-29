const db = require('../db');

function getTodos() {
    return db.table('todos').select('*')
}

module.exports = {
    getTodos
}
