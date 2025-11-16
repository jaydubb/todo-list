import './App.css'

let todos = [
  {id: 1, title: "Review resources"},
  {id: 2, title: "Take notes"},
  {id: 3, title: "Code out app"}
]

function App() {

  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
