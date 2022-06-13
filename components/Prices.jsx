import React from 'react'

const Prices = () => {
     
  return (
    <div >
        <div className='relative'>
        <img src="electrician.jpg" alt="" className='w-full'/>
        <div className='absolute left-1/4 top-1/4 bg-white p-14'>
            <div className='border-l-4 border-orange-500'>
            <p className='text-4xl font-bold pl-14'>Do You <span className='text-orange-500'>Need Help</span></p>
            <p className='text-4xl font-bold pl-14'>With Electrical</p>
            <p className='text-4xl font-bold pl-14'>Maintenance</p>
            </div>
            <p className='pt-8'>Our electrical repair and service options are proudly</p>
            <p className=''>offered to clients. Give us a call today to schedule a</p>
            <p className='pb-14'>free service estimate!</p>
            <div className='flex'>
            <button className='bg-orange-500 px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 border-2 text-xl text-white border-orange-500'>Give us a call</button>
            <button className='ml-14 bg-blue-900 px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 hover:border-2 text-xl text-white border-orange-500'>Free Estimate</button>
            </div>
        </div>
        </div>
    </div>
  )
  
}

export default Prices