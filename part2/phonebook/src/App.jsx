import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleOnChange = (event, field) => {
    if (field === 'name') {
      setNewName(event.target.value)
    } else {
      setNewNumber(event.target.value)
    }
  }

  const handleOnChangeFilter= (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    console.log('add');
    event.preventDefault()
    const found = persons.find(person => person.name === newName)
    if (found) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
    setNewName('')
    setNewNumber('')
  }

  const filterNames = () => {
    const filtered = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    return filtered;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleOnChangeFilter} value={filter}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={addPerson} onChange={handleOnChange} name={newName} number={newNumber}/>
      <h3>Numbers</h3>
      <Persons persons={filterNames()} />
    </div>
  )
}

export default App