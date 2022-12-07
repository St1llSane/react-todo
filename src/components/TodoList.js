import TodoListItem from './TodoListItem'
import './TodoList.css'

function TodoList({ todos, deleteTodoHandler }) {
  return (
    <div>
      <ul className="TodoList">
        {todos.map((todo, index) => {
          return <TodoListItem todo={todo} key={index} deleteTodoHandler={deleteTodoHandler} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
