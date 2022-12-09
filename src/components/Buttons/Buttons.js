function Button({ children, className, title, onClick, disabled = false }) {
  return (
    <button
      className={className}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
