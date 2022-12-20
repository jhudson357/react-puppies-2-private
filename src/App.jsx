import { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import AddPuppy from './pages/AddPuppy/AddPuppy'
import PuppyList from './pages/PuppyList/PuppyList'
import * as puppyService from '../src/services/puppyService'

function App() {
  const [puppies, setPuppies] = useState([])
  
  const navigate = useNavigate()

  const handleAddPuppy = async newPuppyData => {
    const newPuppy = await puppyService.create(newPuppyData)
    setPuppies([...puppies, newPuppy])
    navigate('/')
  }

  const handleDeletePuppy = async id => {
    const deletedPuppy = await puppyService.deleteOne(id)
    setPuppies(puppies.filter(puppy => puppy._id !== deletedPuppy._id))
  }

  useEffect(() => {
    const fetchAllPuppies = async () => {
      const puppyData = await puppyService.getAll()
      setPuppies(puppyData)
    }
    fetchAllPuppies()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        React Puppies CRUD
        <nav>
          <Link to='/'>Puppy List</Link>
          <Link className='m-left' to='/add'>Add Puppy</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/add' element={<AddPuppy handleAddPuppy={handleAddPuppy}/>} />
          <Route path='/' element={<PuppyList puppies={puppies} handleDeletePuppy={handleDeletePuppy} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
