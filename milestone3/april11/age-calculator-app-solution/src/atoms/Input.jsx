/* Styling imports */
import styles from './Input.module.css'

const Input = ({ placeholder, value, errorStatus, onChangeHandler }) => {
  return (
    <input 
      className={errorStatus ? styles['input-field-error'] : styles['input-field']}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeHandler(e, placeholder)}
    />
  )
}

export default Input