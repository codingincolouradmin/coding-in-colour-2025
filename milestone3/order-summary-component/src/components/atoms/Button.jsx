import styles from './Button.module.css'

const Button = ({label , className}) => {
    return (
        <button
          className={styles[className]}
        >
            {label}
        </button>
    )
}

export default Button