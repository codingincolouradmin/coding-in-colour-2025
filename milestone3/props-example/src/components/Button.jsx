/** Styling imports **/
import styles from './Button.module.css'

const Button = ({ children }) => {
  console.log('The child is', children)
  return (
    <button className={styles[children.class]}>
      {children.label}
    </button>
  )
}

export default Button