import axios from "axios";

const apiURL = "http://localhost:3001/persons";

const getAll = () => axios.get(apiURL);
const create = (newObject) => axios.post(apiURL, newObject);

export { getAll, create };
