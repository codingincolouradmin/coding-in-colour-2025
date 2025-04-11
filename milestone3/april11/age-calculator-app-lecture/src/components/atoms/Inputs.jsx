import styles from './Atoms.module.css'

import Arrow from '../../../images/icon-arrow.svg'

export default function Input({ placeholder, value, errorStatus, onChangeHandler }) {
    return (
        <>
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChangeHandler(e, placeholder)}
                className={errorStatus ? styles['input-field-error'] : styles['input-field']}
            />
        </>
    )
}