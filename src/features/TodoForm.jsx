import '../shared/TextInputWithLabel.jsx'
import { useState } from 'react'
import { useRef } from "react"
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx';

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
            <TextInputWithLabel elementId="todoTitle" labelText="Todo" value={workingTodoTitle} ref={todoTitleInput} onChange={(event) => setworkingTodoTitle(event.target.value)} />
            <button type="submit" disabled={!workingTodoTitle}>Add Todo</button>
        </form>
    );
}

export default TodoForm