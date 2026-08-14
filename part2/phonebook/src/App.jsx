import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from "./services/contacts.js"


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    personService
    .getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        errorMsg={errorMsg}
        successMsg={successMsg}
      />

      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2>Add a new</h2>
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        setErrorMsg={setErrorMsg}
        setSuccessMsg={setSuccessMsg}
      />
      <h2>Numbers</h2>

      <Persons persons={persons} searchQuery={searchQuery} setPersons={setPersons} setSuccessMsg={setSuccessMsg} setErrorMsg={setErrorMsg} />
    </div>
  )
}

export default App
