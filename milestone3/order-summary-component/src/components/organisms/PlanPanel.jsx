import styles from './PlanPanel.module.css'
import ClickableChip from '../atoms/ClickableChip.jsx'
import PlanCost from '../molecules/PlanCost.jsx'

const PlanPanel = () => {
    return (
        <div className={styles['plan-panel-container']}>
            <PlanCost/>
            <ClickableChip label = {'Change'}/>
          

        </div>
        
    )
}

export default PlanPanel