// React imports 
import { useState, useEffect } from 'react'
// Module imports 
import countryServices from './services/countries'
import countries from './services/countries'

const App = () => {

  // API request and countries update
  useEffect(() => {
    countryServices
      .getAll()
      .then(countries => console.log(countries))
  }, [])

  return (
    <div>
      <p> Hello </p>
    </div>
  )
}

export default App

