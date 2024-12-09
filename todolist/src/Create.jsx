import React, { useState } from 'react';
import axios from 'axios';

function Create({ addTodo }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                console.log(result);
                addTodo(result.data); // Add the new task to the state
                setTask(''); // Clear the input field
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='create_form'>
            <input
                type="text"
                placeholder='Enter task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
