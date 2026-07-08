import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "4545454545"
     }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

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
      name: newName,
      number: newNum
    }

    setPersons([...persons, newPerson ])
    setNewName("")
    setNewNum("")
  }

  const handleAddNum = (e) => {
    setNewNum(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input onChange={handleAddName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleAddNum} value={newNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.name}>{person.name} : {person.number}</p>)}
    </div>
  )
}

export default App
