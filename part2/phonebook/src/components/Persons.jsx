import Person from "./Person"

const Persons = ({persons, searchQuery, setPersons, setSuccessMsg, setErrorMsg}) => {

  const filteredArr = persons.filter((person) => (
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  return (
    <div>
      {filteredArr.map( person => <Person key={person.name} id={person.id} person={person} persons={persons} setPersons={setPersons} setSuccessMsg={setSuccessMsg} setErrorMsg={setErrorMsg} />)}
    </div>
  )
}

export default Persons
