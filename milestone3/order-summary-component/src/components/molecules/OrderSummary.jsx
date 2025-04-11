import styles from './OrderSummary.module.css'
import Chip from '../atoms/Chip.jsx'

const OrderSummary = () => {
    return (
        <div className={styles['order-summary-container']}>
            <Chip
              label={'Order Summary'}
              className={'header-text'}
            />
            <Chip
            label={'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'}
            className={'regular-text'}
            />

        </div>
        
    )
}

export default OrderSummary