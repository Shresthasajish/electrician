import React from 'react'
import {BrowserRouter} from 'react-router-dom'


const Navbar = () => {
    const style = 'cursor-pointer hover:text-orange-500'
  return (
    <div className='flex justify-around p-4 items-center w-full bg-white sticky top-0 z-30 shadow-md'>
        {/* <BrowserRouter> */}
            <div className='cursor-pointer text-3xl font-bold -top-2'>Electrician</div>
            <div className={style}>Home</div>
            <div className={style}>About Us</div>
            <div className={style}>Services</div>
            <div className={style}>Prices</div>
            <div className={style}>Gallery</div>
            <div className={style}>Blog</div>
            <div className={style}>Shop</div>
            <div className={style}>FAQ</div>
            <div className={style}>Contact</div>
            <div><button className='bg-orange-500 p-3 rounded-md hover:bg-white hover:text-orange-500 border-2 text-xl text-white border-orange-500'>Appointment</button></div>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default Navbar
