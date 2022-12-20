import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import AddPuppy from './pages/AddPuppy/AddPuppy'

function App() {
  const [puppies, setPuppies] = useState([])

  const handleAddPuppy = newPuppyData => {
    setPuppies([...puppies, newPuppyData])
  }

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
        </Routes>
      </main>
    </div>
  )
}

export default App
