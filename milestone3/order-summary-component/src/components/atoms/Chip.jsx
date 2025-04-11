import styles from './Chip.module.css'

const Chip = ({label , className}) => {
    return (
        <div className={styles[className]} >
            {label}
        </div>
    )
}

export default Chip