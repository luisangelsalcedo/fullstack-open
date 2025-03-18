import { WeatherDetails } from './WeatherDetails';

export function CountryDetails({ country, weather }) {
  return (
    <>
      <h1>{country.name.official}</h1>
      <p>
        Capital {country.capital} <br />
        Area {country.area} <br />
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.svg || country.flags.png}
        alt={country.flags.alt}
        width='250px'
      />

      <div>
        {weather === null ? (
          'cargando...'
        ) : (
          <WeatherDetails weather={weather} />
        )}
      </div>
    </>
  );
}
