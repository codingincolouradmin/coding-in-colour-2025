import styles from './Molecules.module.css'

import Chip from "../atoms/Chip";

export default function AgeDisplay({ age }) {
    return (
        <>
            <div className={styles['age-display']}>
                <Chip label={'years'} type={'age'} value={age.years} />
                <Chip label={'months'} type={'age'} value={age.months} />
                <Chip label={'days'} type={'age'} value={age.days} />
            </div>
        </>
    )
}