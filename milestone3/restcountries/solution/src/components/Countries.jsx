// React imports 
import { useState, useEffect } from 'react'
// Module imports 
import weatherServices from '../services/weather'

const Country = ({ country, defaultVisibility }) => {
  const [ visibility, setVisibility ] = useState(defaultVisibility)
  const [ weather, setWeather ] = useState(null)

  useEffect(() => {
    if (visibility) {
      console.log('api request made...')
      const latlng = country.latlng
      weatherServices
        .getWeatherData(latlng[0], latlng[1])
        .then(weather => {
          setWeather(weather)
        })
    }
  }, [visibility])

  console.log(weather)

  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  // Render Languages 
  const renderLanguages = () => {
    if (Array.isArray(country.languages) && country.languages.length > 0) {
      return (
        <ul>
          {country.languages.map(language => <li key={language}>{language}</li>)}
        </ul>
      )
    } else {
      return <div>No known languages</div>
    }
  }

  // Render Flag
  const renderFlag = () => {
    if (country?.flag?.png) {
      return <img src={country.flag.png} alt={country.flag.alt || "No description for country flag found"} />
    } else {
      return <div>No known flags</div>
    }
  }

  if (visibility) {
    return (
      <div>
        <h1>{country.name}</h1>
        <div>
          <div>Capital {country.capital}</div>
          <div>Area {country.area}</div>
        </div>
        <h2>Languages</h2>
        {renderLanguages()}
        {renderFlag()}
        {weather && 
        <div>
          <h2>Weather in {country.capital}</h2>
          <div>Temperature {weather.temperature} Celsius</div>
          <img src={weather.icon} alt={weather.description} />
          <div>Wind {weather.wind} m/s</div>
        </div>
        }
        <button onClick={toggleVisibility}>Hide</button>
      </div>
    )
  } else {
    return (
      <div>
        {country.name}
        <button onClick={toggleVisibility}>Show</button>
      </div>
    )
  }
}

const Countries = ({ countries, filter })  => {
  // Conditional rendering
  /**
   * If we have 1 show the actual Country with all the details
   * If we have more than 10, tell us something is wrong
   * If we have between 1 and 10 (including 10) give us the list of names
   */

  if (filter === '') return null;

  const filterCountries = countries.filter(country => 
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  // Determine count
  const count = filterCountries.length

  // Handle render cases 
  if (count > 10) return <div>Too many matches, please specify another filter</div>
  if (count > 1) return filterCountries.map(
    country => <Country key={country.name || ""} country={country} defaultVisibility={false}/>
  )
  if (count == 1) return <Country country={filterCountries[0]} defaultVisibility={true}/>

  return <div>No matches found</div>
}

export default Countries;
