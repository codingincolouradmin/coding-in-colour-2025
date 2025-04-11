/* Styling imports */
import styles from './AgeDisplay.module.css'

/* Component Imports */
import Chip from '../atoms/Chip'

const AgeDisplay = ({ age }) => {
  return (
    <div className={styles['age-display']}>
      <Chip
        label={'years'}
        value={age.years}
        type={'age'}
      />
      <Chip
        label={'months'}
        value={age.months}
        type={'age'}
      />
      <Chip
        label={'days'}
        value={age.days}
        type={'age'}
      />
    </div>
  )
}

export default AgeDisplay