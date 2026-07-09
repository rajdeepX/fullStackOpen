import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredArr = persons.filter((person) => (
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with : <input onChange={handleSearch} value={searchQuery} />
      </div>
      <h2>Add a new</h2>
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
      {filteredArr.map( person => <p key={person.name}>{person.name} : {person.number}</p>)}
    </div>
  )
}

export default App
