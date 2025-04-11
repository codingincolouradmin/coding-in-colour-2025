import Image from '../atoms/Image'
import OrderCard from '../organisms/OrderCard'
import './App.css'

import Hero from '../../../images/illustration-hero.svg'

const App = () => {
  return (
    <div className='main-container'>
      <div className="order-summary-container">    
       <Image src={Hero} className={'hero-image'}/>  
       <OrderCard/>
     
    </div>

    </div>
    
  )
}

export default App