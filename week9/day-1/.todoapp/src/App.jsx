import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    description: 'Learn React basics',
    completed: false
  }])

  function addtodo() {
    const newArray = [...todos]
    
    newArray.push({
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      completed: false
    })
    setTodos(newArray)
    }


  return (
   <div>
    <input id='title' type="text" placeholder='title' />
    <input id='description' type="text" placeholder='description' />
    <button onClick={addtodo}> add todo</button>
    <br />
    {todos.map((todo) => (
    <Todo title={todo.title} description={todo.description} completed={todo.completed} />))}
    {/* {JSON.stringify(todos)} */}
    <br />
   </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.completed ? 'completed' : 'not completed'}</h3>
    </div>
  )
}

