import TodoListItem from './TodoListItem'
import './TodoList.css'

function TodoList({ todos, deleteTodoHandler, toggleTodoHandler }) {
  return (
    <div>
      <ul className="TodoList">
        {todos.map((todo) => {
          return (
            <TodoListItem
              todo={todo}
              key={todo.id}
              deleteTodoHandler={deleteTodoHandler}
              toggleTodoHandler={toggleTodoHandler}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
