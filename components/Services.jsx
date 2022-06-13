import React from 'react'
import Carousel from '../components/Carousel';
import {data} from '../data/carousel'


const Services = () => {
  
  return (
      
    <div>
        <p className='text-orange-500 text-center font-bold p-1'>24/7 Electrician Services – Safe and Efficient</p>
        <p className='text-black text-center text-4xl font-semibold p-1'>We are a Full Service Electrical</p>
        <p className='text-black text-center text-4xl font-semibold p-1 pb-4'>Contractor</p>
        <Carousel carousel={data}/> 
                  
       
    </div>
  )
}

export default Services