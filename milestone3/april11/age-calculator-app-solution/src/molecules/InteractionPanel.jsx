/* Styling imports */
import styles from './InteractionPanel.module.css'

/* Component Imports */
import Button from '../atoms/Button'

const InteractionPanel = ({ onClickHandler }) => {
  return (
    <div className={styles['interaction-panel']}>
      <hr />
      <Button
        onClickHandler={onClickHandler}
      />
    </div>
  )
}

export default InteractionPanel