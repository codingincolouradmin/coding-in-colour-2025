import styles from './Molecules.module.css'

import Button from "../atoms/Button"

export default function InteractionPanel({ handleButtonClick }) {
    return (
        <>
            <div className={styles["interaction-panel"]}>
                <hr />
                <Button handleButtonClick={handleButtonClick} />
            </div>
        </>
    )
}