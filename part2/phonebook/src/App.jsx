import { useState } from "react";

export function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (e) => {
    e.preventDefault();
    if (!newName || newName.length < 2) return;

    const person = { name: newName };
    setPersons((state) => [...state, person]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    </div>
  );
}
