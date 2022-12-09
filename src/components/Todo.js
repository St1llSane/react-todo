import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css'
import TodoActions from './TodoActions'

function Todo() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (value) => {
    const newTodo = {
      value,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const completedTodosCount = todos.filter(
    (todo) => todo.isCompleted === true
  ).length

  const resetCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false))
  }

  return (
    <div className="Todo">
      <TodoForm addTodoHandler={addTodoHandler} />
      {todos.length > 0 && (
        <TodoActions
          resetTodosHandler={resetTodosHandler}
          resetCompletedTodosHandler={resetCompletedTodosHandler}
          completedTodosCount={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
      />
    </div>
  )
}

export default Todo
