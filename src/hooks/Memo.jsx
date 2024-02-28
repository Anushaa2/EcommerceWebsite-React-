//memo value store garera rakhne
import React ,{useState,useMemo}from 'react'

const Memo = () => {
    const [count,setCount]=useState(5)
    const squareFunc=useMemo(()=>{
        return count*count

    },[count])
  return (
    <>
    <div className1="de-flex justify-content-center">
        <div className="col-md-4">
            <h1>
                {count}and its sqaure is {squareFunc}</h1>
                <button className='btn btn-success'onClick={()=>setCount(count+2)}>Increase</button>
            
        </div>
    </div>
    
    </>
  )
}

export default Memo