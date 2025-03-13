import axios from "axios";

const apiURL = "http://localhost:3001/persons";

const getAll = () => axios.get(apiURL);
const create = (newObject) => axios.post(apiURL, newObject);
const deleteById = (id) => axios.delete(`${apiURL}/${id}`);

export { getAll, create, deleteById };
