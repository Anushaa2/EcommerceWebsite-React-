
import React from 'react'
import Carousel from '../components/Carousel'

import { Helmet } from 'react-helmet'
import CardContainer from '../components/CardContainer'



const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Ecommerce Homepage</title>
    </Helmet>
   <Carousel/>
  
   <CardContainer/>
  
   
    </>
  )
}

export default HomePage