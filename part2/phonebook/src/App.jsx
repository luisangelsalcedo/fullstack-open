import { useState } from "react";

export function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addNewName = (e) => {
    e.preventDefault();
    // validations
    if (checkIsValidName(newName) || checkIsValidNumber(newPhone)) return;

    const person = { name: newName, phone: newPhone };
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:
          <input
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(({ name, phone }) => (
          <li key={name}>
            🧑 {name} 📞 {phone}
          </li>
        ))}
      </ol>
    </div>
  );
}
