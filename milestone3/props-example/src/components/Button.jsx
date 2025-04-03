/** Styling imports **/
import styles from './Button.module.css'

const Button = ({ children, extra }) => {
  console.log('The child is', children)
  return (
    <button className={styles[children.class]}>
      {children.label}
      { extra ? 
      <p>{extra}</p> 
      : null }
    </button>
  )
}

export default Button