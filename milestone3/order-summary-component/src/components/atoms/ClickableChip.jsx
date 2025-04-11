import styles from './ClickableChip.module.css'

const ClickableChip = ({label}) => {
    return (
        <div
          className={styles['change-clickable']}
        >
            {label}
        </div>
    )
}

export default ClickableChip