import React, { useState, useEffect } from 'react'
import { dataBase } from '../Firebase/firebase'

const Todos = () => {
    const [myTodos, setMyTodos] = useState()
    useEffect(() => {
        const ref = dataBase.ref('todos')
        ref.on('value', (res) => {
            const todo = res.val()
            const todos = []
            for (let id in todo) {
                todos.push({ id, ...todo[id] })
            }
            setMyTodos(todos)
        })
    }, [])
    const deleteTodo = (id) => {
        const ref = dataBase.ref('todos').child(id)
        ref.remove()
    }
    const todoComplete = (todo) => {
        const ref = dataBase.ref('todos').child(todo.id)
        ref.update({
            isCompleted: !todo.isCompleted
        })
    }
    return (
        <div>
            <ul>
                {myTodos ? myTodos.map((todo) => <li key={todo.id}><button onClick={() => todoComplete(todo)}>Completed</button>    {todo.task}  <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>) : ''}
            </ul>
        </div>
    )
}

export default Todos
