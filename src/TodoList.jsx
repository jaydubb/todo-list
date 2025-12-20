import './TodoListItem.jsx'
import TodoListItem from './TodoListItem.jsx'

const TodoList = ({todoList, onCompleteTodo}) => {

  const filteredTodoList = todoList.filter (todo => !todo.isCompleted);

  return (
    filteredTodoList.length<1 ? <p>Add todo above to get started</p> : <ul>{filteredTodoList.map(todo => <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />)}</ul>
  );
}

export default TodoList