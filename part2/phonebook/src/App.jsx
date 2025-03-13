import { useState, useEffect } from "react";
import { Filter, PersonForm, Persons } from "./components";
import {
  create,
  getAll,
  deleteById,
  updateById,
} from "./services/person.service";

export function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAll().then(({ data }) => setPersons(data));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    // validations
    if (checkIsValidName(newName) || checkIsValidNumber(newPhone)) return;

    const newPerson = { name: newName, number: newPhone };
    const foundPerson = persons.find(
      (person) => person.name === newPerson.name
    );

    if (foundPerson) {
      updatePerson(foundPerson, newPerson);
    } else {
      createPerson(newPerson);
    }

    // clear
    setNewName("");
    setNewPhone("");
  };

  const createPerson = (newPerson) => {
    // create on state
    setPersons((state) => [...state, newPerson]);
    //save on server
    create(newPerson).then(console.log);
  };

  const deletePerson = (id) => {
    const message = `Do you really want to eliminate it?`;
    if (window.confirm(message)) {
      // delete from state
      setPersons((state) => state.filter((person) => person.id !== id));

      // delete from server
      deleteById(id).then(console.log);
    }
  };

  const updatePerson = (foundPerson, updatedPerson) => {
    const message = `${foundPerson.name} is already added to phonebook, replace the old number with a new one?`;
    if (window.confirm(message)) {
      // update on state
      setPersons((state) =>
        state.map((person) =>
          person.name === foundPerson.name ? updatedPerson : person
        )
      );
      // update on server
      updateById(foundPerson.id, updatedPerson).then(console.log);
    }
  };

  const checkIsValidNumber = (value) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!value) {
      alert(`The phone number is required`);
      return true;
    }
    if (value.length < 10) {
      alert(`The phone number must have a min. of 10 characters`);
      return true;
    }
    if (!regex.test(value)) {
      alert(`${value} isn't a valid phone number`);
      return true;
    }
    return false;
  };

  const checkIsValidName = (value) => {
    if (!value) {
      alert(`The name is required`);
      return true;
    }
    if (value.length < 2) {
      alert(`The name must have a min. of 2 characters`);
      return true;
    }
    // if (persons.some((person) => person.name === value)) {
    //   alert(`${value} is already added to phonebook`);
    //   return true;
    // }
    return false;
  };

  const personsToShow = !query
    ? persons
    : persons.filter(({ name }) =>
        name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={query} handler={setQuery} />

      <h2>add a new</h2>
      <PersonForm
        action={addPerson}
        name={newName}
        handlerName={setNewName}
        phone={newPhone}
        handlerPhone={setNewPhone}
      />

      <h2>Numbers</h2>
      <Persons data={personsToShow} handlerDelete={deletePerson} />
    </div>
  );
}
