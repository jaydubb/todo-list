import { useState } from 'react'
import './App.css'
import './features/TodoList/TodoList.jsx'
import './features/TodoForm.jsx'
import TodoList from './features/TodoList/TodoList.jsx'
import TodoForm from './features/TodoForm.jsx'

function App() {
  const [todoList, setToDoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = { title , id: Date.now(), isCompleted: false};
    setToDoList([...todoList, newTodo])
  };

  const updateTodo = (editedTodo) => {
    const updatedTodos = todoList.map( todo => {
      return todo.id === editedTodo.id ? { ...todo, title: editedTodo.title } : todo;
    });
    setToDoList(updatedTodos)
  }

  const completeTodo = (id) => {
    const updatedTodos = todoList.map( todo => {
      return todo.id === id ? { ...todo, isCompleted: true } : todo;
    });
    setToDoList(updatedTodos)
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} onUpdateTodo={updateTodo} onCompleteTodo={completeTodo}></TodoList>
    </div>
  )
}

export default App
