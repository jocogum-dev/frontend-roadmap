import React from 'react'

function WeatherCard({weatherForecast}) {
  return (
    <section className='weather-card'>
      <p>Location: {weatherForecast.name}, {weatherForecast.sys.country}</p>
      <p>Weather: {weatherForecast.weather[0].description}</p>
      <p>Temperature: {weatherForecast.main.temp}</p>
      <p>Wind speed: {weatherForecast.wind.speed}</p>
    </section>
  )
}

export default WeatherCard