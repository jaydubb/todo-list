import './TodoListItem.jsx'
import TodoListItem from './TodoListItem.jsx'

const TodoList = () => {
    let todos = [
        {id: 1, title: "Review resources"},
        {id: 2, title: "Take notes"},
        {id: 3, title: "Code out app"}
    ]

    return (
      <ul>
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    );
}

export default TodoList