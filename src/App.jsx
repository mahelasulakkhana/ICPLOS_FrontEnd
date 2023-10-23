import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cart/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes> */}
    </div>
  )
}

export default App
