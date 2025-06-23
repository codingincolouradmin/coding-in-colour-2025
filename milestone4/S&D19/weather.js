const axios = require('axios')
require('dotenv').config()

const getWeather = async (city) => {
  const API_KEY = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  try {
    const response = await axios.get(url)
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching weather API data', error.message)
  }
}

getWeather('London')