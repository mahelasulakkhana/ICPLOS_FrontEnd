import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'
import History from './components/History'
import UserProfile from './components/UserProfile'
import Sidebar from './DashBoard/Shared/Sidebar'

function App() {
  
  return (
    // <div>
    //    <Router>
    //      <Navbar/>
    //      <Routes>
          
    //         <Route exact path='/' element={<Home/>}/>
           
    //        {/* <Route path="Layout" element={<Layout/>}>
    //          <Route index element={<Dashboard/>}/>
    //          <Route path="Product" element={<Products/>}/>
    //        </Route> 
    //        <Route path="login" element={<div>this is login page</div>}/>  */}
    //      </Routes>
    //    </Router>
    //   </div>
      <div>
        <Navbar/>
        <Home/>
        <Cart/>
        <History/>
        <UserProfile/>
        {/* <Sidebar/> */}
      </div>
        
  )
}

export default App
