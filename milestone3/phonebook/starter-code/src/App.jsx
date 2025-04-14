import { useState } from 'react'

const App = () => {

  /**
   * STATE FOR NEXT PARTS
   */
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])

  const [ persons, setPersons ] = useState([
    'Arto Hellas',
    'Ada Lovelace',
    'Dan Abramov',
    'Mary Poppendieck'
  ])
  const [ name, setName ] = useState('')

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value.trim()
    // Check if person exists & issue warning
    const find = persons.find(person => person === name)
    if (find) {
      // Alert case
      window.alert(`${find} is already added to the phonebook`)
    } else {
      // add to phonebook
      setPersons(persons.concat(name))
      setName('')
    }
    
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            name: <input id="name" value={name} onChange={handleInputChange} />
          </div>
          <button type='submit'>add</button>
        </form>
      <h1>Numbers</h1>
      <div>
        {persons.map(
          person => <p key={person}>{person}</p>
        )}
      </div>
    </div>
  )
}

export default App