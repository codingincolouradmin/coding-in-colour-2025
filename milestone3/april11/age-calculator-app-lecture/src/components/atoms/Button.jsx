import styles from './Atoms.module.css'

import Arrow from '../../../images/icon-arrow.svg'

export default function Button({ handleButtonClick }) {
    return (
        <>
            <div className={styles["button-container"]}>
                <img src={Arrow}
                    onClick={handleButtonClick}
                />
            </div>
        </>
    )
}