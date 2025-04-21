import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_API_KEY

/**
 * Instructions
 *  - Make an account on openweather
 *  - Get your API key
 *  - Add a .env with VITE_API_KEY = "..."
 */

const processWeather = (rawData) => {
  return {
    temperature: Math.round(rawData.main.temp - 273.15, 2),
    icon: `https://openweathermap.org/img/wn/${rawData.weather[0].icon}@2x.png`,
    description: rawData.weather[0].description,
    wind: rawData.wind.speed
  }
}

const getWeatherData = (lat, lon) => {
  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  return request.then(response => processWeather(response.data))
}

export default { getWeatherData }