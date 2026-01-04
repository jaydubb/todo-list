import { useState } from 'react'
import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';

const TodoListItem = ({todo, onUpdateTodo, onCompleteTodo}) => {
    const [isEditing , setisEditing] = useState(false);
    const [workingTitle , setworkingTitle] = useState(todo.title);

    const handleCancel = () => {
        setworkingTitle(todo.title);
        setisEditing(false);
    }

    const handleEdit = (event) => {
        setworkingTitle(event.target.value);
    }

    const handleUpdate = (event) => {
        if (isEditing === false){
            return;
        } else {
            event.preventDefault();
            onUpdateTodo({...todo, title: workingTitle});
            setisEditing(false);
        }
    }
        
    return (
        <form onSubmit={handleUpdate}>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={()=>onCompleteTodo(todo.id)}
            />
            {isEditing==true ? 
                <>
                    <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="button" onClick={handleUpdate}>Update</button>
                </>
            :
                <span onClick={() => setisEditing(true)}>{todo.title}</span>
            }            
        </form>
    );
}

export default TodoListItem