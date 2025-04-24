// Dependency imports

// React imports
import { useState, useEffect } from 'react'
// Module imports
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'


import personsService from './services/persons'
import { setAllPersons, updatePerson, addPerson, deletePerson } from './slices/phoneBookSlice'

import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // const [persons, setPersons] = useState([])
  const persons = useSelector(state => state.phonebook)
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)

  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase())
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  // get all from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personsData = await personsService.getAll();
        // setPersons(personsData)
        dispatch(setAllPersons(personsData))

      } catch (error) {
        // UI error dispaly
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // handle Add (create and update)
  const handleAdd = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    const foundEntry = persons.find(person => person.name === name)

    if (foundEntry) {
      // update person
      try {
        const updatedEntry = await personsService.update(foundEntry.id, { ...foundEntry, number })
        dispatch(updatePerson(updatedEntry))
        // setPersons(persons.map(person => person.id === updatedEntry.id ? updatedEntry : person))
        setNewName("")
        setNewNumber("")
        setNotification({ message: `updated ${foundEntry.name} successfuly!`, errorStatus: false })
        setTimeout(setNotification(null), 5000);
      } catch (error) {
        setNotification({ message: `error updatin ${foundEntry.name}`, errorStatus: true })
        setTimeout(setNotification(null), 5000);
      }

    } else {
      // create a new person
      try {
        const newPerson = await personsService.create({ name, number })
        console.log(newPerson)
        // setPersons([...persons, newPerson])
        dispatch(addPerson(newPerson))
        setNewName("")
        setNewNumber("")
        setNotification({ message: `Added ${name} successfuly!`, errorStatus: false })
        setTimeout(setNotification(null), 5000);

      } catch (error) {
        console.log(error)
        setNotification({ message: `Failed to add ${name}`, errorStatus: true })
        setTimeout(setNotification(null), 5000);
      }
    }
  }

  // handle delete (delete endpoint)
  const handleDelete = async (deletedPerson) => {
    const confirmDelete = window.confirm(`Delete ${deletedPerson.name}?`)
    if (!confirmDelete) return;
    try {
      await personsService.remove(deletedPerson.id)
      dispatch(deletePerson(deletedPerson))
      // setPersons(persons.filter(p => p.id !== deletedPerson.id))
    } catch (error) {
      setNotification({ message: `Failed to delete ${deletedPerson.name}`, errorStatus: true })
      setTimeout(setNotification(null), 5000);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onAdd={handleAdd}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} onDeleteClick={handleDelete} />
    </div>
  )
}

export default App






