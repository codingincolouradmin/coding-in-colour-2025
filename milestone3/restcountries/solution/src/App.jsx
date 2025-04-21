// React imports 
import { useState, useEffect } from 'react'
// Module imports 
import countryServices from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ countries, setCountries ] = useState([])

  // API request and countries update
  useEffect(() => {
    countryServices
      .getAll()
      .then(countries => setCountries(countries))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchChange} />
      </div>
      {countries.length == 0 ? <div> Loading... </div>
      : <Countries countries={countries} filter={search} />}
    </div>
  )
}

export default App

