const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Port = 3001;

// Import todo model
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

// Create connection with database: MongoDB (mongodb://127.0.0.1:27017/databaseName)
mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Endpoint to add a new task
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Endpoint to update task
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

// Endpoint to delete task
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => {
            if (result) {
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ message: 'Task not found' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(Port, () => {
    console.log(`Server is running: ${Port}`);
});
