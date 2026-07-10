import { useEffect, useState } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2>Add a new</h2>
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
      />
      <h2>Numbers</h2>

      <Persons persons={persons} searchQuery={searchQuery} />
    </div>
  )
}

export default App
