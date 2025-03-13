import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

export function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [query, setQuery] = useState("");

  const addNewName = (e) => {
    e.preventDefault();
    // validations
    if (checkIsValidName(newName) || checkIsValidNumber(newPhone)) return;

    const person = { name: newName, number: newPhone };
    setPersons((state) => [...state, person]);

    // clear
    setNewName("");
    setNewPhone("");
  };

  const checkIsValidNumber = (value) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!newPhone) {
      alert(`The phone number is required`);
      return true;
    }
    if (newPhone.length < 10) {
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
    if (!newName) {
      alert(`The name is required`);
      return true;
    }
    if (newName.length < 2) {
      alert(`The name must have a min. of 2 characters`);
      return true;
    }
    if (persons.some((person) => person.name === value)) {
      alert(`${value} is already added to phonebook`);
      return true;
    }
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
        action={addNewName}
        name={newName}
        handlerName={setNewName}
        phone={newPhone}
        handlerPhone={setNewPhone}
      />

      <h2>Numbers</h2>
      <Persons data={personsToShow} />
    </div>
  );
}
