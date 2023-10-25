import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'
import History from './components/History'
import UserProfile from './components/UserProfile'
import Sidebar from './DashBoard/Shared/Sidebar'
import { Header } from './DashBoard/Shared/Header';
import Login from './components/Login';
import Addproduct from './DashBoard/Addproduct';
import Products from './DashBoard/Products';
import Dashboard from './DashBoard/Dashboard';


function App() {

  
  
  return (
    
       <Router>
        <>
        <Routes>
            <Route exact path='dashboard' element={<Dashboard/>}/> 
            <Route exact path='sidebar' element={<Sidebar/>}/>
            <Route exact path='header' element={<Header/>}/>
            <Route exact path='products' element={<Products/>}/>
        </Routes>
        <Navbar/>
        <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='cart' element={<Cart/>}/>
                <Route exact path='history' element={<History/>}/>
                <Route exact path='userprofile' element={<UserProfile/>}/>  
                <Route exact path='login' element={<Login/>}/> 
                <Route exact path='addproduct' element={<Addproduct/>}/>     
        </Routes>
        </>
       </Router>
        
  )
}

export default App
