import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from './redux/ACTIONS/productaction'

const ProductItem = () => {
    const dispatch=useDispatch()
    const productsData=useSelector(store=>store.productsData)
    const products=productsData.products

    useEffect(()=>{
        try{
            dispatch(fetchProducts())
        }
        catch(error){
            console.log('Error in fetching data')
        }
    },[dispatch])

           
  return (
    <>
      {products && products.map((item,i)=>{
        <div key={i}>
            <h1>{item.title}</h1>

        </div>
      })}
    
    </>
  )
}

export default ProductItem