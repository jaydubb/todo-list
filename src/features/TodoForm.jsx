import { useState } from 'react'
import { useRef } from "react"

const TodoForm = ({onAddTodo}) =>{
    const todoTitleInput = useRef("");
    const [workingTodoTitle , setworkingTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(workingTodoTitle);
        setworkingTodoTitle('');
        todoTitleInput.current.focus();
    };

    return (
        <form name="add_todo" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input type="text" name="title" value={workingTodoTitle} ref={todoTitleInput} onChange={(event) => setworkingTodoTitle(event.target.value)}></input>
            <button type="submit" disabled={!workingTodoTitle}>Add Todo</button>
        </form>
    );
}

export default TodoForm