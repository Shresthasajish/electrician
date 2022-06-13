import React, {useState} from 'react'
import { data } from '../data/carousel'


const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const length = data.length
  
  return (
    <div className='flex px-14 items-center justify-center'>
      
      {data?.map((item,index)=>(
        <div className='flex flex-col justify-center items-center'>
        <img src={item.image1} alt="" width="60%" className='mx-5'/>
        <p>{item.heading1}</p>
        <p>{item.heading2}</p>
        <p>{item.heading3}</p>
        </div>
      ))} 
    </div>
  )
}

export default Carousel