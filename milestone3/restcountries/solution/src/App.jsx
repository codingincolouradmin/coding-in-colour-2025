// React imports 
import { useState, useEffect } from 'react'
// Module imports 
import countryServices from './services/countries'
import countries from './services/countries'

const App = () => {
  const [ search, setSearch ] = useState('')

  // API request and countries update
  useEffect(() => {
    countryServices
      .getAll()
      .then(countries => console.log(countries))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
    </div>
  )
}

export default App

