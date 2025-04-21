import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const processCountries = (rawData) => {
  const processed = rawData.map(item => (
    {
      name: item.name?.common || "Unknown",
      capital: item.capital?.[0] || "No capital",
      area: item.area || 0,
      languages: item.languages ? Object.values(item.languages) : "None",
      flag: item.flags || None,
      latlng: item.latlng || [0, 0]
    }
  ))
  return processed;
}

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => processCountries(response.data))
}

export default { getAll } 