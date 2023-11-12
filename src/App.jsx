import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Cart } from './components/Cart'
import History from './components/History'
import UserProfile from './components/UserProfile'
import { Transaction } from './DashBoard/Transaction';
import Login from './components/Login';
import Addproduct from './DashBoard/Addproduct';
import Coustomers from './DashBoard/Coustomers';
import Products from './DashBoard/Products';
// import AddUser from './DashBoard/AddUser';
import Orders from './DashBoard/Orders';
import Menu from './DashBoard/Menu';
import UpdateCoustomer from './DashBoard/UpdateCoustomer';
import Quentity from './components/Quentity';
import RatingPage from './components/RatingPage';
import Payment from './components/Payment';
import Ratinglist from './DashBoard/Ratinglist';
import AdduserNew from './DashBoard/AdduserNew';
import QuentityPopUp from './components/QuentityPopUp';
// import Updateaddproduct from './DashBoard/Updateproduct';
import Updateproduct from './DashBoard/Updateproduct';


function App() {

  // useEffect(() => {
  //   const response = Signin("mahela@icptechno.com", "#Mahela123");

  // }, [])

  return (
    <>
      <Router>
        <>
          <Routes>

            <Route exact path='products' element={<><Products /></>} />
            <Route exact path='coustomers' element={<><Coustomers /></>} />
            <Route exact path='addproduct' element={<><Addproduct /></>} />
            {/* <Route exact path='addUser' element={<><AddUser /></>} /> */}
            <Route exact path='orders' element={<><Orders /></>} />
            <Route exact path='transaction' element={<><Transaction /></>} />
            <Route exact path='menu' element={<><Menu /></>} />
            <Route exact path='updatecoustomer/:id' element={<><UpdateCoustomer/></>} />
            <Route exact path='ratinglist' element={<><Ratinglist/></>}/>
            <Route exact path='addusernew' element={<><AdduserNew/></>}/>
            <Route exact path='updateproduct/:id' element={<><Updateproduct/></>}/>
          

            <Route exact path='login' element={<><Login /></>} />
            <Route exact path='/' element={<><Navbar /><Home /></>} />
            <Route exact path='cart' element={<><Navbar /><Cart /></>} />
            <Route exact path='history' element={<><Navbar /><History /></>} />
            <Route exact path='userprofile' element={<><Navbar /><UserProfile /></>} />
            {/* <Route exact path='order/:id' element={<><Order /></>} /> */}
            {/* <Route exact path='ordernew' element={<><OrderNew /></>} /> */}
            <Route exact path='quentity/:id' element={<><Quentity/></>} />
            <Route exact path='ratingpage' element={<><RatingPage/></>} />
            <Route exact path='payment' element={<><Payment/></>} />
            <Route exact path='quentitypopup/:id' element={<><QuentityPopUp/></>} />
          </Routes>
        </>
      </Router>
    </>
  )
}

export default App
