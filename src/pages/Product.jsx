import React,{useState,useEffect} from 'react'
import axios from'axios'
import Card from '../components/Card'

import { ColorRing } from 'react-loader-spinner'

const Product = () => {
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(true)

  // axios ma .data compulsary

  useEffect(()=>{
    const fetchProduct=async()=>{
      try{
        const response=await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
      }
      catch(error){
        console.log(error)
      }

    }
    setTimeout(() => {
      fetchProduct()
      
    }, 3000);

  },[])
  return (
    <>  

    {/* //loading (true):loading vaircha vane  talako code execute huncha */}
    {loading ?(
      <div className='d-flex justify-content-center align-items-center'style={{height:'58vh'}}>
        <div className='col-md-4'>
        <ColorRing
          visible={true}
           height="80"
           width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
        </div>




      </div>
     



    //  loading vachaina(false) ho vane : pachi ko text excute huncha
    ):(

      <div className='container-fluid'>
    <div className="row row-cols-1 row-cols-md-4 g-4">
  
  
    {products && products.map(item=>(

      <>
         
        <Card data={item}/>
      </>
    

    ))}
    </div>
    </div>

    )}


  
    
    </>
  )
}

export default Product