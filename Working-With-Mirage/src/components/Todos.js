import React, { useEffect, useState } from 'react'
import './Todos.css';

const Todos = () => {
    const [todo, setTodo] = useState('');
    const [isEmpty, setIsEmpty] = useState(false)
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/todos');
            const data = await response.json();
            setTodos(data);
        }
        setInterval(() => {
            fetchData();
        }, 1000);
    }, [])



    const onChange = (e) => {
        setIsEmpty(false)
        setTodo(e.target.value)
    }

    const addTodos = (e) => {
        e.preventDefault()
        if (!todo) {
            setIsEmpty(true)
        }
        else {
            setIsEmpty(false)
            fetch('/api/addTodos', {
                method: "POST",
                body: JSON.stringify({ task: todo })
            })
                .then(res => {
                    setTodo('')
                    res.json()
                })
                .catch(err => console.log("error=>", err))

        }
    }
    return (
        <div>
            <h1>My Todos</h1>
            <form onSubmit={addTodos}>
                <input className={isEmpty ? "empty" : ""} value={todo} onChange={(e) => onChange(e)} />
                <button type="submit">Add Todo</button>
            </form>
            {!todos.length ?
                <>
                    <h2>You's List is Empty</h2>
                </> :
                <>
                    <ul>
                        {todos.map((todo, index) => {
                            return (<li key={index + 1}>{todo.task}</li>)
                        })}
                    </ul>
                </>
            }
        </div>
    )
}

export default Todos
