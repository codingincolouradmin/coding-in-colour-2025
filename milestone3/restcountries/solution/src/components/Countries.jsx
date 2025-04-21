// React imports 
import { useState, useEffect } from 'react'
// Module imports 
// Weather services


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
    country => <div key={country.name}>{country.name}</div>
  )
  if (count == 1) return <div>MATCH</div>

  return <div>No matches found</div>
}

export default Countries;
