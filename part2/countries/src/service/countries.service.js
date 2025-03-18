import axios from 'axios';

export function getCountries() {
  const apiURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';
  return axios.get(`${apiURL}`);
}
