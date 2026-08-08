import axios from 'axios'
import { useState } from 'react'
import getWeatherIcon from '../utils/weatherIconHelpers'

const WeatherInfo = ({lat, lon}) => {
  const [weather, setWeather] = useState(null)

  useState(()=>{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,weather_code`
    const fetchData = async() => {
      const res = await axios.get(url)
      // console.log(res.data);
      setWeather(res.data.current)
    }
    fetchData()
  }, [])

  if(!weather) return <p>Loading...</p>
  // console.log(weather);

  const iconUrl = getWeatherIcon(weather.weather_code)

  return (
    <div>
      <p>Temperature: {weather.temperature_2m}</p>
      <img src={iconUrl} alt={"Climate at condition"} />
      <p>Wind: {weather.wind_speed_10m} km/h</p>
    </div>
  )
}

export default WeatherInfo
