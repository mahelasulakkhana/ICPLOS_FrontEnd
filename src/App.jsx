import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'
import History from './components/History'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cart/>

      <History/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes> */}
    </div>
  )
}

export default App
