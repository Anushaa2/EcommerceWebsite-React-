import React from 'react'
import { useSelector } from 'react-redux';
import TestItem from './reducer/TestItem';
import Student from './Student';
import Form from './Form'
import ProductItem from '../ProductItem';


const TestNav = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <h1>The number of items in cart is {data.cartCount}</h1>
    <TestItem/>
    <Student/>
    <Form/>
    <ProductItem/>
    
    </>
  )
}

export default TestNav