import React from 'react'

const Footer = () => {
    const style = "p-2 mx-10 rounded-md"
  return (
    <div className='bg-slate-800 mt-2'>
        <div className='flex gap-14 mx-14 px-14 items-center justify-center relative pt-14'>
            <div className='flex flex-col gap-10'>
                <div className='text-white text-5xl font-bold'>Electrician</div>
                <div className='flex gap-14'>
                <div className='flex flex-col'>
                    <div className='font-semibold text-white pt-1'>Home</div>
                    <div className='font-semibold text-white pt-1'>About us</div>
                    <div className='font-semibold text-white pt-1'>Services</div>
                    <div className='font-semibold text-white pt-1'>Prices</div>
                </div>
                <div className='flex flex-col'>
                    <div className='font-semibold text-white pt-1'>Gallery</div>
                    <div className='font-semibold text-white pt-1'>Shop</div>
                    <div className='font-semibold text-white pt-1'>FAQ</div>
                    <div className='font-semibold text-white pt-1'>Contacts</div>
                </div>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <div>
                    <p className='font-semibold text-white pt-1'>Our experienced electricians are highly trained in all </p>
                    <p className='font-semibold text-white pt-1'>aspects of electrical service, from office lighting and </p>
                    <p className='font-semibold text-white pt-1'>security systems to emergency repair.</p>
                </div>
                <div>
                <p className='font-semibold text-white pt-1'>8494 Signal Hill Road Manassas,</p>
                <p className='font-semibold text-white pt-1'>VA, 20110</p>
                <p className='font-semibold text-white pt-1'>Mon-Fri 08:00 AM - 05:00 PM</p>
                <p className='font-semibold text-white pt-1'>1 (800) 765-43-21</p>
                </div>
            </div>

            <div>

            </div>

            <div className='flex flex-col justify-center items-start absolute -top-12 rounded-md ml-14 '>
                <div className='flex justify-center items-center bg-orange-500 pb-4 pt-5 px-14 rounded-md '>
                <p className='lg:text-2xl lg:font-semibold text-white lg:py-3 lg:px-14 md:text-xl md:font-normal md:py-1 md:px-5 sm:text-xl sm:font-normal sm:py-0 sm:px-0'>Subscribe To Our Newsletter</p>
                <input type="text" className={style} placeholder='Your e-mail address'/>
                
                <button className='bg-slate-800 p-2 rounded-md hover:bg-white hover:text-orange-500 border-2 text-white border-orange-500 font-semibold'>Get Service</button>
                </div>
            </div>
            
        </div>
        <div className='text-white font-semibold p-14'>
        © 2020 Electrical Services. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer