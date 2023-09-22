import { useState } from 'react'
import './App.css'
import { TodoList } from './components/todoList'
import { AddTodoForm } from './components/AddTodoForm'

function App() {
  const [todosState, setTodosState] = useState([])

  return (
    <main className='main-container'>
      <h1>TODO LIST</h1>
      <AddTodoForm setTodosState={setTodosState} todosState={todosState} />
      <TodoList todosState={todosState} setTodosState={setTodosState} />
    </main>
  )
}

export default App
