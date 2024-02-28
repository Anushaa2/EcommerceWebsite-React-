//MyRoute coomponent
//website lai chainne url esma define huncha
//Router-parent element
//Routes switch
//Route path define garne
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './pages/Layouts'
import HomePage from './pages/HomePage'
import Products from './pages/Product'
// import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Show from './context/Show'
import DataCounter from './hooks/DataCounter'
import TestNav from './redux/TestNav'





const MyRoute = () => {
  return (
    
    <Router>
        <Routes>

          
          <Route path='/' element={<Layouts/>}>
            <Route index element={<HomePage/>}/>
            <Route path='products'element={<Products/>}/> 
            <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/context/text' element={<Show/>}/>
            <Route path='hooks/reduce' element={<DataCounter/>}/>
            <Route path='/redux/first' element={<TestNav/>}/>
            
            
         </Route>
          {/* <Route path='/*' element={<NotFound/>}/> */}
           

        </Routes> 

        
    </Router>
    
    
  )
}

export default MyRoute