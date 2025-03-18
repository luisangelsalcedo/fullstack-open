export function WeatherDetails({ weather }) {
  const tempCelsius = weather?.main?.temp - 273.15;

  return (
    <>
      <h2>Weather in {weather.name}</h2>
      <div>Temperature {tempCelsius.toFixed(2)}°C</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=''
      />
      <div>Wind {weather.wind.speed} m/s</div>
    </>
  );
}
