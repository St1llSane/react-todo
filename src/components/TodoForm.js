import { useState } from 'react'
import './TodoForm.css'

function TodoForm({ addTodoHandler }) {
  const [value, setValue] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (value.length < 3) return

    addTodoHandler(value)
    setValue('')
  }

  return (
    <div className="TodoForm-body">
      <form className="TodoForm-form" action="#" onSubmit={onSubmitHandler}>
        <div className="TodoForm-wrapper">
          <input
            className="TodoForm-wrapper__input"
            type="text"
            placeholder="Todo...(min 3 symbols)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="TodoForm-wrapper__button">Add</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
