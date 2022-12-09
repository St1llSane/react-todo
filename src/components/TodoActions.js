import { FiRefreshCcw, FiCheckCircle } from 'react-icons/fi'
import Button from './Buttons/Buttons'
import './TodoActions.css'

function TodoActions({ resetTodosHandler, resetCompletedTodosHandler, completedTodosCount }) {
  return (
    <div className="TodoActions">
      <Button className="Button" title="Reset Todo's" onClick={resetTodosHandler}>
        <FiRefreshCcw />
      </Button>
      <Button className="Button" disabled={!completedTodosCount} title="Reset completed Todo's" onClick={resetCompletedTodosHandler}>
        <FiCheckCircle />
      </Button>
    </div>
  )
}

export default TodoActions
