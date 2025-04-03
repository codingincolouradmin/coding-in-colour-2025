/** Styling imports **/
import styles from './Button.module.css'

const Button = ({ label, className }) => {
  <button className={styles[className]}>
    {label}
  </button>
}

export default Button