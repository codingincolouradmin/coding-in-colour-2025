import { useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ search, setSearch ] = useState('')
  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value.trim()
    const number = e.target.number.value.trim()
    // Check if person exists & issue warning
    const find = persons.find(person => person.name === name)
    if (find) {
      console.log('entered duplicate case')
      // Check if number is different
      const updateNum = find.number !== number
      if (updateNum) {
        if (window.confirm(`${name} already exists, update their number?`)) {
          const newPersons = persons.map(
            (person) => person.name === name ? {...person, number } : person 
          )
          setPersons(newPersons)
          setName('')
          setNumber('')
        }
      }
    } else {
      // add to phonebook
      setPersons(persons.concat({ id: persons.length + 1, name, number }))
      setName('')
      setNumber('')
    }
    
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <div>
          filter shown with <input value={search} onChange={handleSearchChange} />
        </div>
      <h1>add a new</h1>
        <form onSubmit={handleFormSubmit}>
          <div> name: <input id="name" value={name} onChange={handleNameChange} /> </div>
          <div> number: <input id="number" value={number} onChange={handleNumberChange} /> </div>
          <button type='submit'>add</button>
        </form>
      <h1>Numbers</h1>
      <div>
        {persons
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .map(
          person => <Person key={person.id} name={person.name} number={person.number}/>
        )}
      </div>
    </div>
  )
}

export default App