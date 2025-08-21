import React, { useState, useEffect } from 'react'
import { fetchLocation, fetchWeather } from "../api/fetchUrl"

function SearchLocation({location, setLocation, setWeatherForecast}) {
  const [searchedLocation, setSearchLocation] = useState([]);

  async function fetchData(location) {
    const res = await fetchLocation(location);
    // console.log("res", res)
    setSearchLocation(res);
  }

  async function handleClick(lat, lon) {
    const weather = await fetchWeather(lat, lon);
    setWeatherForecast(weather);
  }

  useEffect(() => {
    if(location != ""){
      fetchData(location);
    }
  }, []);

  function handleLocation(e) {
    setLocation(e.target.value);
  }
  return (
    <section className='search-location'>
      <input className='location-input' onBlur={() => fetchData(location)} type="text" value={location} onChange={handleLocation} placeholder='Type the city' />
      {searchedLocation.length > 0 ? 
        (
          searchedLocation.map((loc, index) => {
            return <button onClick={() => handleClick(loc.lat, loc.lon)} className='location' key={index}>{loc.name}, {loc.country}</button>
          })
        ) 
        : (<p>No searched location</p>)
    }
    </section>
  )
}

export default SearchLocation