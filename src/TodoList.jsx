import './TodoListItem.jsx'
import TodoListItem from './TodoListItem.jsx'

const TodoList = ({todoList}) => {

  return (
    <ul>
      {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList