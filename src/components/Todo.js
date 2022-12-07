import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'

function Todo() {
  const [todos, setTodos] = useState([])

  const handlerAddTodo = (value) => {
    setTodos([...todos, value])
  }

  const deleteTodoHandler = (e) => {
    e.target.parentElement.remove()
  }

  return (
    <div className="Todo">
      <TodoForm handlerAddTodo={handlerAddTodo} />
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  )
}

export default Todo
