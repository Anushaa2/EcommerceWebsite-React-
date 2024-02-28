import React,{useContext} from 'react'
import {GlobalContext} from './GlobalValue'

const ComD = () => {
  const data=useContext(GlobalContext)
  return (
    <>
    <h1>My name is{data.name}</h1>
    
    </>
  )
}

export default ComD