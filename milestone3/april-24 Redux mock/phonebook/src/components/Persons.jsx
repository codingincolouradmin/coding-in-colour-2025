const Person = ({ person, onDeleteClick }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => onDeleteClick(person)}>delete</button>
    </div>
  )
}

const Persons = ({ filter, persons, onDeleteClick }) => {
  // Apply filter
  const filteredNumbers = persons.filter(
    person => person.name?.toLowerCase().includes(filter.trim())
  )

  return (
    <>
      {filteredNumbers.map(person =>
        <Person key={person.id} person={person} onDeleteClick={onDeleteClick} />
      )}
    </>
  )
}
export default Persons