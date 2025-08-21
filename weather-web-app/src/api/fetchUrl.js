export default async function fetchFromUrl(url) {
    try {
        const response = await fetch(url); 
        // waits until the fetch is done
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json(); // waits until the body is read
        // console.log(data); // use the data
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}
export async function fetchLocation(location){
    const api_key = import.meta.env.VITE_API_KEY
    const limit = 5;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${limit}&appid=${api_key}`
    const res = await fetchFromUrl(url);
    return res;
}

export async function fetchWeather(lat, lon) {
    const api_key = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    const res = await fetchFromUrl(url);
    return res;
}