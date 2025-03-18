import axios from 'axios';

const apiKey = import.meta.env.VITE_OPENWEATHER_APIKEY;

export function getCountryWeather(latitud, logitud) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${logitud}&appid=${apiKey}`
  );
}
