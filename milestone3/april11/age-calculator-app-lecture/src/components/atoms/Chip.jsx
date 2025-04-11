import styles from './Atoms.module.css'

export default function Chip({ label, value, type, errorStatus }) {

    const renderInputLabel = (label) => {
        return (
            <div className={errorStatus ? styles['input-label-error'] : styles['input-label']}>
                {label}
            </div>
        )
    }

    const renderErrorLabel = (label) => {
        return (
            <div className={styles['error-label']}>
                {label}
            </div>
        )
    }

    const renderAgeLabel = (label, value) => {
        return (
            <div className={styles['age-label-container']}>
                <span className={styles['age-value']}>{value == '' ? '--' : value}</span>
                <span className={styles['age-label']}>{label}</span>
            </div>
        )
    }


    return (
        <>
            {type === 'input' && renderInputLabel(label, errorStatus)}
            {type === 'error' && renderErrorLabel(label)}
            {type === 'age' && renderAgeLabel(label, value)}
        </>
    )
}