import './TodoListItem.css'
import { GrTrash, GrCheckmark } from 'react-icons/gr'

function TodoListItem({ todo, deleteTodoHandler, toggleTodoHandler }) {
  return (
    <>
      <li className={`TodoListItem ${todo.isCompleted ? 'completed' : ''}`}>
        <p className="TodoListItem__text">{todo.value}</p>
        <div className="TodoListItem__btns">
          <button
            className="TodoListItem__btn"
            onClick={() => deleteTodoHandler(todo.id)}
          >
            <GrTrash />
          </button>
          <button
            className="TodoListItem__btn"
            onClick={() => toggleTodoHandler(todo.id)}
          >
            <GrCheckmark />
          </button>
        </div>
      </li>
    </>
  )
}

export default TodoListItem
