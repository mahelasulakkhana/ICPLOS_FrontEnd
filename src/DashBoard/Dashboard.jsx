import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Shared/Sidebar'
import Addproduct from './Addproduct';
import Products from './Products';

export default function Dashboard() {
  return (
    <div>
        <Sidebar/>
        <Routes>
            {/* <Route exact path='/' element={ <Sidebar />}/> */}
            <Route exact path='addproduct' element={ <Addproduct/>}/>
            <Route exact path='products' element={ <Products/>}/>   
        </Routes>
    </div>
  )
}
