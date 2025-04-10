const Button = ({ label, handleClick }) => {
  return (
    <button onClick={(e) => handleClick(e, label)}>
      {label}
    </button>
  )
}

export default Button