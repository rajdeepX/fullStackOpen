const getWeatherIcon = (code) => {
  if (code === 0) return "https://openweathermap.org/img/wn/01d@2x.png"

  if (code >=1 && code <=3) return "https://openweathermap.org/img/wn/02d@2x.png"

  if (code === 45 || code === 48) return "https://openweathermap.org/img/wn/50d@2x.png"

  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return "https://openweathermap.org/img/wn/10d@2x.png"
  }

  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
    return "https://openweathermap.org/img/wn/13d@2x.png"
  }

  if (code >= 95) return "https://openweathermap.org/img/wn/11d@2x.png"

  return "https://openweathermap.org/img/wn/01d@2x.png"
}

export default getWeatherIcon;
