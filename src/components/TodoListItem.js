import './TodoListItem.css'

function TodoListItem({ todo, deleteTodoHandler }) {
  return (
    <>
      <li className="TodoListItem">
        <p>{todo}</p>
        <button className="TodoListItem__remove" onClick={deleteTodoHandler}>
          Remove
        </button>
      </li>
    </>
  )
}

export default TodoListItem
