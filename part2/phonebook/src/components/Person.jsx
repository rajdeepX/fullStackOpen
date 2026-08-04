import DeleteBtn from "./DeleteBtn"
import contactServices from "../services/contacts.js"

const Person = ({person, persons, setPersons, setSuccessMsg, setErrorMsg}) => {

  const handleDelete = (id) => {
    if(!window.confirm(`Delete ${person.name}?`)) return
    contactServices.remove(id).then(() => {
      const filtered = persons.filter(person => person.id !== id)
      setPersons(filtered)
      setSuccessMsg(`Deleted ${person.name}`)
      setTimeout(() => {
        setSuccessMsg(null)
      }, 3000);
    }).catch(err => {
      setErrorMsg(`Failed to delete ${person.name}`)
      setTimeout(() => {
        setErrorMsg(null)
      }, 3000);
    })
  }

  return <p>{person.name} : {person.number} <DeleteBtn id={person.id} handleDelete={handleDelete} /></p>
}

export default Person
