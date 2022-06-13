import React, {useState} from 'react'
import data from '../data/carousel'

const Gallery = () => {

  const initialState = {
    All: false,
    Residences: false,
    Industrial: false,
    Offices: false,
    Retail:false,
  };

  const [isClicked, setIsClicked] = useState(initialState)
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  return (
    <div className='mt-14'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-orange-500 font-bold'>@electricians</p>
            <p className='text-3xl font-semibold'>Our Projects</p>
            <div className='flex justify-around gap-5'>
                <button className='font-semibold cursor-pointer' onClick={()=>handleClick('All')}>All</button>
                <button className='font-semibold cursor-pointer' onClick={()=>handleClick('Residences')}>Residences</button>
                <button className='font-semibold cursor-pointer' onClick={()=>handleClick('Industrial')}>Industrial Objects</button>
                <button className='font-semibold cursor-pointer' onClick={()=>handleClick('Offices')}>Offices</button>
                <button className='font-semibold cursor-pointer' onClick={()=>handleClick('Retail')}>Retail_objects</button>
            </div>
            {isClicked.All &&
             (
             <div className='flex flex-col flex-wrap items-start'>
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
            </div>) }
            {isClicked.Residences &&
             (
             <div className='flex flex-col flex-wrap'>
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
            
            </div> 
            </div>) }

            {isClicked.Industrial &&
             (
             <div className='flex flex-col flex-wrap'>
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
            </div>) }

            {isClicked.Offices &&
             (
             <div className='flex flex-col flex-wrap'>
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
            </div>) }

            {isClicked.Retail &&
             (
             <div className='flex flex-col flex-wrap'>
            <div className='flex gap-8 px-14 items-center justify-center mt-5'>
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            <img src="electrician2.jpg" alt="" width="250px"/> 
            </div>
            <div className='flex gap-8 px-14 items-center justify-center mt-10'>
            <img src="electrician2.jpg" alt="" width="250px"/> 
           
            </div> 
            </div>) }


           
        </div>
    </div>
  )
}

export default Gallery