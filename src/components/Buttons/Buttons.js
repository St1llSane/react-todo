import './Buttons.css'

function Button({ children, title, onClick }) {
  return <button className="Button" title={title} onClick={onClick}>{children}</button>
}

export default Button
