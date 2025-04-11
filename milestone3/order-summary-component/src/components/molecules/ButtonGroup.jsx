import styles from './ButtonGroup.module.css'
import Button from '../atoms/Button.jsx'

const ButtonGroup = () => {
    return (
        <div className={styles['button-group-container']}>
            <Button
              label={'Proceed to Payment'}
              className={'payment-button'}
            />
            <Button
            label={'Cancel Order'}
            className={'cancel-button'}
            />

        </div>
        
    )
}

export default ButtonGroup