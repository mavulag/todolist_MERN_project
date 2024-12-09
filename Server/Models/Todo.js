const mongoose = require('mongoose')

// Create new schema
const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model('todos', TodoSchema)
module.exports = TodoModel