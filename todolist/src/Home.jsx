// ./todolist/src/Home.jsx
import React, { useState } from "react";
import Create from './Create';

function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create addTodo={addTodo} />
            {
                todos.length === 0 ?
                    <div><h3>No Record</h3></div> :
                    todos.map((todo, index) => (
                        <div key={index}>
                            {todo}
                        </div>
                    ))
            }
        </div>
    );
}

export default Home;
