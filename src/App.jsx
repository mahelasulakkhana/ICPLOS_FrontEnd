import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App
