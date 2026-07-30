import DeleteBtn from "./DeleteBtn"
import contactServices from "../services/contacts.js"

const Person = ({person, persons, setPersons}) => {

  const handleDelete = (id) => {
    if(!window.confirm(`Delete ${person.name}?`)) return
    contactServices.remove(id)
    const filtered = persons.filter(person => person.id !== id)
    setPersons(filtered)
  }

  return <p>{person.name} : {person.number} <DeleteBtn id={person.id} handleDelete={handleDelete} /></p>
}

export default Person
