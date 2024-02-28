import React,{useState,useInsertionEffect, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { Helmet } from 'react-helmet';
//useParams -url bata pass gareko id
const ProductDetails = () => {
  const [product,setProduct]=useState({})
  const params=useParams()
  const id=params.productId

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err))

  },[id])


  //handling add to cart button
  const addToCart=()=>{
    //fect item from the cart
    const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []
    const productData={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      category:product.category,
      rating:product.rating,
      quantity:1
    }
    //check if item exists in localstorage 
    const existingItem=cartItems.find(item=>item.id===product.id)
    if(existingItem){
      toast.error('Product is already in the cart')
    }
    else{
      cartItems.push(productData)
      localStorage.setItem('cartItems',JSON.stringify(cartItems))
      toast.success(`${productData.title} is added to cart`)
    }
  }
  return (
    <>
    <Helmet>

      <title>{product.title}</title>
      </Helmet>


    <ToastContainer theme='colored' position='top-center'/>

    <div className="container my-5">


      <div className="d-flex justify-content-center align-items-center">

        <div className="col-md-4">
          <img src={product.image} alt={product.title} width='300'/>
          </div>
          <div className="col-md-6">
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <p>{product.description}</p>
            <p><small>Category:{product.category}</small></p>
            <p>{product.rating && product.rating.rate}</p>
            <div className="my-3">
              <button className='btn btn-warning'onClick={addToCart}>Add to cart</button>
            </div>

          </div>
        
      </div>
    </div>

    
    
    
    
    
    </>
  )
}

export default ProductDetails
