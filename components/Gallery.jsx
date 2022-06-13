import React from 'react'
import data from '../data/carousel'

const Gallery = () => {
  return (
    <div className='mt-14'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-orange-500 font-bold'>@electricians</p>
            <p className='text-3xl font-semibold'>Our Projects</p>
            <div className='flex justify-around gap-5'>
                <div className='font-semibold cursor-pointer'>All</div>
                <div className='font-semibold cursor-pointer'>Residences</div>
                <div className='font-semibold cursor-pointer'>Industrial Objects</div>
                <div className='font-semibold cursor-pointer'>Offices</div>
                <div className='font-semibold cursor-pointer'>Retail_objects</div>
            </div>
            <div className='flex gap-8 px-14 items-center justify-center mt-5'>
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            </div>
            <div className='flex gap-8 px-14 items-center justify-center mt-10'>
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            </div>
        </div>
    </div>
  )
}

export default Gallery