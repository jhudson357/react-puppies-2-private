import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

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
        
      </main>
    </div>
  )
}

export default App
