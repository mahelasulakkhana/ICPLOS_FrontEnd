import { Route, Routes, Router } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'
import History from './components/History'
import UserProfile from './components/UserProfile'

function App() {
  
  return (
      // <Router>
      //   <Routes>
      //     <Route path='/Navbar' element={<Navbar/>}>
      //       <Route path='/' element={<Home/>}/>
      //     </Route>
      //     <Route path="Layout" element={<Layout/>}>
      //       <Route index element={<Dashboard/>}/>
      //       <Route path="Product" element={<Products/>}/>
      //     </Route> 
      //     <Route path="login" element={<div>this is login page</div>}/> 
      //   </Routes>
      // </Router>
    <div>
       <Navbar/>
      <Home/>
      <Cart/>
      <History/>
      <UserProfile/>
    </div>     
  )
}

export default App
