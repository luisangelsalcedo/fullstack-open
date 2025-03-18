import { useState, useEffect, useMemo } from 'react';
import { getCountries } from './service/countries.service';
import { CountryDetails, CountriesList, CountrySearchForm } from './components';
import { getCountryWeather } from './service/weather.service';
import {
  getLocalStorage,
  setLocalStorage,
} from './service/localstorage.service';

export function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(
    getLocalStorage('countries') ?? []
  );
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!getLocalStorage('countries')) {
      getCountries().then(({ data }) => {
        setCountries(data);
        setLocalStorage('countries', data);
      });
    }
  }, []);

  const getWeatherByCountry = (country) => {
    const { latlng } = country;
    const [lat, lng] = latlng;
    getCountryWeather(lat, lng).then(({ data }) => setWeather(data));
  };

  const filteredCountries = useMemo(() => {
    if (!query) return [];
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, countries]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (filteredCountries.length === 1) {
        getWeatherByCountry(filteredCountries[0]);
      } else {
        setWeather(null);
      }
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [filteredCountries]);

  return (
    <>
      {!countries.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <CountrySearchForm value={query} handler={setQuery} />
          <div>
            {filteredCountries.length > 10 ? (
              <p>Too many matches, specify another filter</p>
            ) : //
            filteredCountries.length === 1 ? (
              <CountryDetails
                country={filteredCountries[0]}
                weather={weather}
              />
            ) : (
              <CountriesList countries={filteredCountries} handler={setQuery} />
            )}
          </div>
        </>
      )}
    </>
  );
}
