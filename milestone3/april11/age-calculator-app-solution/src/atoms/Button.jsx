/* Styling imports */
import styles from './Button.module.css'

import Arrow from '../../assets/images/icon-arrow.svg'

const Button = ({ onClickHandler }) => {
  return (
    <div className={styles['button-container']}>
      <img 
        src={Arrow}
        onClick={onClickHandler}
      />
    </div>
  )
}

export default Button