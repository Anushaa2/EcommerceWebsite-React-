import React ,{useState,useEffect}  from 'react'
import axios from 'axios'
import Card from './Card'

const CardContainer = () => {

  const [products,setproducts]=useState([])
  const[limit,setLimit]=useState(8)

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    //res=function
    //axios ma .data lekhnai parcha
    // .then(res=>console.log(res.data))

    .then(res=>setproducts(res.data))
    .catch(err=>console.errror(err))


  })
  // const increase=()=>(
   
  //     setLimit(limit+4)

    
  // )
  // const decrease=()=>(
   
  //     setLimit(limit-4)

    
  // )




  return (
    <>
     <div className='container-fluid'>
    <div className="row row-cols-1 row-cols-md-4 g-4">
  
   {/* //products cha vane matra map gara
   item ko satta j nam lekheni huncha parameter ho */}
    {products && products.slice(0,limit).map(item=>(

      <>
         {/* data=attribute ma item rakheko card ma pass garna */}
        <Card data={item}/>
      </>

    ))}

    <div className="de-flex justify-content-center">
      <div class="offset-md-6 col-md-5 my-1">

        <button class='btn btn-success' onClick={()=>setLimit(limit+4)}>Load more</button>
        </div>
        <div class="offset-md-6 col-md-5 my-1">
        <button class='btn btn-success' onClick={()=>setLimit(limit-4)}>Show less</button>
        </div>
    </div>
    </div>
    </div>
    
    
    
    
    </>
  )
}

export default CardContainer