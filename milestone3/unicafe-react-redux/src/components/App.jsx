import { useState } from 'react';


/* Component Imports */
import ButtonPanel from "./ButtonPanel"
import Statistics from './Statistics'
import { useSelector } from 'react-redux'

const App = () => {
  
  

  return (
    <div>
      <h2>Unicafe</h2>
      <ButtonPanel />
      <Statistics />
    </div>
  )
}

export default App
