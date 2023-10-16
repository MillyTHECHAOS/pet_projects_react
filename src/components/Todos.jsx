import React, { useState, useEffect } from "react";

import NewTaskForm from "./Buttons/AddTaskBtn";

const T111odosList = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const deleteTask = (todoId) => {
        const updatedTasks = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTasks);
      };
    
    return (
        <div>   
            <header className="btnPanel">
                <NewTaskForm todos={todos} setTodos={setTodos} />
            </header>
        <div>
            {
                todos.map((todo) => (
                    <div className="todo" key={todo.id}>
                        <span>{todo.task}</span>
                        <button className="delete" onClick={() => deleteTask(todo.id)}>Удалить</button>
                    </div>
                ))
            }
        </div>
        </div>
   )
}
 
export default T111odosList;
