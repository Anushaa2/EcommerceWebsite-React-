import React from 'react'
import {Link} from 'react-router-dom'

//props=parameter

const Card = (props) => {
  //const title=props.data.title
  //const image=props.data.image

  //object destructuring:
  const{title,image,price,id}=props.data

  return (
    <>
   
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,20)}...</h5>
        <h5>${price}</h5>
        <Link to={`/productdetails/${id}`} className='btn btn-success'>View Details</Link>
       
      </div>
    </div>
  </div>
  
    </>
  )
}

export default Card