import { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from './service/countries.service';
import {
  getLocalStorage,
  setLocalStorage,
} from './service/localstorage.service';

export function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(
    getLocalStorage('countries') ?? []
  );

  useEffect(() => {
    if (!countries.length)
      getCountries().then(({ data }) => {
        setCountries(data);
        setLocalStorage('countries', data);
      });
  }, [countries]);

  const filterContriesByname = (name) => {
    if (!name) return [];

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(name)
    );
    return filteredCountries;
  };

  const filterContries = filterContriesByname(query);

  return (
    <>
      {!countries.length ? (
        <div>Loading...</div>
      ) : (
        <>
          find countries:
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            {filterContries.length > 10 ? (
              <p>Too many matches, specify another filter</p>
            ) : //
            filterContries.length === 1 ? (
              <>
                <h1>{filterContries[0].name.official}</h1>
                <p>
                  Capital {filterContries[0].capital} <br />
                  Area {filterContries[0].area} <br />
                </p>
                <h2>Languages</h2>
                <ul>
                  {Object.values(filterContries[0].languages).map(
                    (language) => (
                      <li key={language}>{language}</li>
                    )
                  )}
                </ul>
                {!filterContries[0].flag.svg && (
                  <img
                    src={filterContries[0].flags.png}
                    alt={filterContries[0].flags.alt}
                    width='300px'
                  />
                )}
              </>
            ) : (
              filterContries.map((country) => (
                <div key={country.name.common}>{country.name.common}</div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}
