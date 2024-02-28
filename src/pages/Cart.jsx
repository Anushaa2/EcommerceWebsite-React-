import React, {useState, useEffect,Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from 'react-helmet';
  import {FaTrash  } from "react-icons/fa";


const Cart = () => {

    const[items,setItems]=useState([])

    useEffect(()=>{
        const data=localStorage.getItem('cartItems')
        const cartData=JSON.parse(data)
        setItems(cartData)



    },[])

    const increaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id===id){
                return {...item,quantity:item.quantity+1}
            

        }
 
            return item
         })
         setItems(updateItems)
         localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }

    const decreaseQty=id=>{
        const updateItems=items.map(item=>{
            if(item.id==id && item.quantity>1){
                return{...item,quantity:item.quantity-1}
            }
            return item
        })
        setItems(updateItems)
        localStorage.setItem('cartItems',JSON.stringify(updateItems))
    }


     const deleteItem=(id, name)=>{
        const confirm=window.confirm('Are you sure you want to delete')
        if(confirm){
            const filterCart=items.filter(item=>item.id!==id)
            localStorage.setItem('cartItems',JSON.stringify(filterCart))
            setItems(filterCart)
            toast.success(`${name} is removed from cart`)


        }
        
     }
     


  return (
    <>
    <Helmet>
        <title>Cart</title>
    </Helmet>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
        <div className="row d-flex justify-content-between my-4">

            {items.length===0 ?
            <h2 className='text-danger text-center my-5'>Cart is empty</h2>
            :(
                <>
                <h2 className='text-center'>Cart Items</h2>
                <div className="col-md-8 shadow">
                    {items.map(items=>(
                        <Fragment>
                            <hr/>
                            <div className="row d-flex align-items-center">

                                <div className="col-2">
                                    <img src={items.image} alt={items.title} width={'50'}/>
                                </div>

                                <div className="col-3">
                                    <strong>{items.title}</strong>
                                </div>
                                <div className="col-2 text-warning">
                                    ${items.price}

                                </div>
                                <div className="col-3">
                                    <div className="d-flex">
                                        <button className='btn btn-danger'onClick={()=>
                                        decreaseQty(items.id)}>-</button>
                                        &nbsp;
                                        <input type="number" value={items.quantity} readOnly className='form-control border=0 text-center'/>
                                        &nbsp;
                                        <div className="btn btn-primary"onClick={()=>
                                            increaseQty(items.id)}>+</div>

                                    </div>
                                    
                                </div>
                                <div className="col-1">
                                        <button className='btn btn-danger'onClick={()=>deleteItem(items.id,items.title)}><FaTrash/></button>
                                    </div>
                            </div>
                        </Fragment>


                    

                    )
                        )}


                </div>
                <div className="col-md-3">
                    <div className="shadow-p">
                        <h5>
                            Cart Summary
                        </h5>
                        <hr/>
                        <p><strong>Units:</strong>{items.reduce((ac,item)=>(ac+item.quantity),0)}</p>
                        <p><strong>Total:</strong>${items.reduce((ac,item)=>(ac+item.quantity*item.price),0)}</p>
                    </div>
                </div>
                </>
            )
        
        }


        </div>

    </div>
    </>
  )
}

export default Cart


// import React, {useState, useEffect,Fragment } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//   import { Helmet } from 'react-helmet';


// const Cart = () => {

//     const[items,setItems]=useState([])

//     useEffect(()=>{
//         const data=localStorage.getItem('cartItems')
//         const cartData=JSON.parse(data)
//         setItems(cartData)



//     },[])

//     const addItem = (item) => {
//         setItems((prevItems) => [...prevItems, item]);
//         localStorage.setItem('cartItems', JSON.stringify(items));
//         toast.success('Item added to cart');
//       };

//       const removeItem = (itemToRemove) => {
//         setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
//         localStorage.setItem('cartItems', JSON.stringify(items));
//         toast.success('Item removed from cart');
//       };
    
//   return (
//     <>
//     <Helmet>
//         <title>Cart</title>
//     </Helmet>
//     <ToastContainer theme='colored' position='top-center'/>
//     <div className="container">
//         <div className="row d-flex justify-content-between my-4">

//             {items.length===0 ?
//             <h2 className='text-danger text-center my-5'>Cart is empty</h2>
//             :(
//                 <>
//                 <h2 className='text-center'>Cart Items</h2>
//                 <div className="col-md-8 shadow">
//                     {items.map(items=>(
//                         <Fragment>
//                             <hr/>
//                             <div className="row d-flex align-items-center">

//                                 <div className="col-2">
//                                     <img src={items.image} alt={items.title} width={'50'}/>
//                                 </div>

//                                 <div className="col-3">
//                                     <strong>{items.title}</strong>
//                                 </div>
//                                 <div className="col-2 text-warning">
//                                     ${items.price}

//                                 </div>
//                                 <div className="col-3">
//                                     <div className="d-flex">
//                                         <button className='btn btn-danger'onClick={()=>removeItem(items)}>-</button>
//                                         &nbsp;
//                                         <input type="number" value={items.quantity} readOnly className='form-control border=0 text-center'/>
//                                         &nbsp;
//                                         <div className="btn btn-primary"onClick={()=>addItem(items)}>+</div>

//                                     </div>
                                    
//                                 </div>
//                                 <div className="col-1">
//                                         <button className='btn btn-danger'>Delete</button>
//                                     </div>
//                             </div>
//                         </Fragment>


                        

//                     )
//                         )}


//                 </div>
//                 <div className="col-md-3">
//                     <div className="shadow-p">
//                         <h5>
//                             Cart Summary
//                         </h5>
//                         <hr/>
//                         <p><strong>Units:</strong>{items.reduce((ac,item)=>(ac+item.quantity),0)}</p>
//                         <p><strong>Total:</strong>${items.reduce((ac,item)=>(ac+item.quantity*item.price),0)}</p>
//                     </div>
//                 </div>
//                 </>
//             )
        
//         }


//         </div>

//     </div>
//     </>
//   )
// }

// export default Cart

