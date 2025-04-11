import styles from './OrderCard.module.css'
import PlanPanel from './PlanPanel.jsx'
import OrderSummary from '../molecules/OrderSummary.jsx'
import ButtonGroup from '../molecules/ButtonGroup.jsx'

const OrderCard = () => {
    return (
        <div className={styles['order-card-container']}>
            <OrderSummary/>
            <PlanPanel/>
            <ButtonGroup/>
        </div>
        
    )
}

export default OrderCard