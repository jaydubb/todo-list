import { useState } from 'react'
import './App.css'
import './TodoList.jsx'
import './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'

function App() {
  const [newTodo, setNewTodo] = useState("This is a test");

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm></TodoForm>
      <p>{newTodo}</p>
      <TodoList></TodoList>
    </div>
  )
}

export default App
