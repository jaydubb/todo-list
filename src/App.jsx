import { useState } from 'react'
import './App.css'
import './TodoList.jsx'
import './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

function App() {
  const [todoList, setToDoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = { title , id: Date.now()};
    setToDoList([...todoList, newTodo])
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList}></TodoList>
    </div>
  )
}

export default App
