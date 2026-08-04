import contactServices from "../services/contacts.js"

const Form = ({persons, setPersons, newName, setNewName, newNum, setNewNum, setErrorMsg, setSuccessMsg}) => {

  const handleAddName = (e) => {
    setNewName(e.target.value)
  }

  const handleAddNum = (e) => {
    setNewNum(e.target.value)
  }

  const handleAddPerson = (e) => {
    e.preventDefault();

    const existingContact = persons.find(person => person.name === newName)

    if (existingContact) {
      const confirmed = window.confirm(`${newName} already exist. Do you want to update the old number?`)

      if (confirmed) {
        const updatedPerson = {...existingContact, number: newNum}
        contactServices.update(existingContact.id, updatedPerson).then(returnedContact => {
          setPersons(persons.map(person => person.id === existingContact.id ? returnedContact : person))
          setSuccessMsg(`Updated ${newName}`)
          setNewName("")
          setNewNum("")
          setTimeout(()=>{
            setSuccessMsg(null)
          }, 3000)
        }).catch(err => {
          setErrorMsg(`Failed to update ${newName}`)
          setTimeout(()=>{
            setErrorMsg(null)
          }, 3000)
        })
      }
      return;
    }

    const newPersonContact = {
      name: newName,
      number: newNum
    }

    contactServices.create(newPersonContact).then(newPerson => {
      setPersons([...persons, newPerson ])
      setSuccessMsg(`Added ${newName}`)
      setNewName("")
      setNewNum("")
      setTimeout(()=>{
        setSuccessMsg(null)
      }, 3000)
    }).catch(err => {
      setErrorMsg(`Failed to add ${newName}`)
      setTimeout(()=>{
        setErrorMsg(null)
      }, 3000)
    })
  }

  return (
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
  )
}

export default Form
