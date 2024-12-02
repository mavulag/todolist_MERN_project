const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Port = 3001;

const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task: task })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.listen(Port, () => {
    console.log(`Server is running: ${Port}`);
});
