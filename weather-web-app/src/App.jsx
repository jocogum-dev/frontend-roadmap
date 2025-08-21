import { useEffect, useState } from "react"
import SearchLocation from "./components/SearchLocation"
import WeatherCard from "./components/WeatherCard"


function App() {
  const [location, setLocation] = useState('');
  const [weatherForecast, setWeatherForecast] = useState({});

  console.log(weatherForecast);
  return (
    <main>
      <h1>Weather Web App</h1>
      <SearchLocation location={location} setLocation={setLocation} setWeatherForecast={setWeatherForecast} />
      {Object.keys(weatherForecast).length > 0 ? (<WeatherCard weatherForecast={weatherForecast} />) : (<p>No forecast</p>) }
    </main>
  )
}

export default App
