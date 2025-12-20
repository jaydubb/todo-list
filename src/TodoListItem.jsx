const TodoListItem = ({todo, onCompleteTodo}) => {
    return (
        <form>
            <input type="checkbox" checked={todo.isCompleted} onChange={()=>onCompleteTodo(todo.id)}/>
            {todo.title}
        </form>
    );
}

export default TodoListItem