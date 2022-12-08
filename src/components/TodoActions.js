import { FiRefreshCcw, FiCheckCircle } from 'react-icons/fi'
import Button from './Buttons/Buttons'
import './TodoActions.css'

function TodoActions({ resetTodosHandler }) {
  return (
    <div className="TodoActions">
      <Button title="Reset Todo's" onClick={resetTodosHandler}>
        <FiRefreshCcw />
      </Button>
      <Button title="Reset completed Todo's">
        <FiCheckCircle />
      </Button>
    </div>
  )
}

export default TodoActions
