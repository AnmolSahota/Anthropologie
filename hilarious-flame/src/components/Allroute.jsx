import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
function Allroute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/cart' element={<Cart/>} ></Route>
      <Route path='/products/:Value' element={<Product/>} ></Route>
      <Route path='*' element={<NotFound/>} ></Route>
    </Routes>
  )
}

export default Allroute