import React, { useState } from 'react'
import './App.css';
import { dataBase } from './Firebase/firebase'
import Todos from './components/Todos'

function App() {
  // const [todos, setTodos] = useState([{ task: "task 1", id: 1 }, { task: "task 2", id: 2 }])
  const [input, setInput] = useState(null)
  const addTodo = () => {
    if (input === '') {

    } else {
      const todoRef = dataBase.ref('todos')
      const todo = {
        task: input,
        isCompleted: false
      }
      todoRef.push(todo)
      setInput('')
    }
  }
  return (
    <div className="App">
      <h1>Todo App With Firebase</h1>
      <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" />
      <button onClick={addTodo}>Add</button>
      <Todos />
    </div>
  );
}

export default App;
