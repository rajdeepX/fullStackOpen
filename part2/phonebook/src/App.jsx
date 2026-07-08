import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleAddName = (e) => {
    setNewName(e.target.value)
  }

  const handleAddPerson = (e) => {
    e.preventDefault();

    const isSame = persons.some(person => person.name === newName)

    if (isSame) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPerson = {
      name: newName
    }

    setPersons([...persons, newPerson ])
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input onChange={handleAddName} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App
