import Person from "./Person"

const Persons = ({persons, searchQuery}) => {

  const filteredArr = persons.filter((person) => (
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  return (
    <div>
      {filteredArr.map( person => <Person key={person.name} person={person} />)}
    </div>
  )
}

export default Persons
