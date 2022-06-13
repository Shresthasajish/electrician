import React from 'react'

const Aboutus = () => {
  return (
    
      <div className='flex relative mb-10'>
        <img className='ml-14 mt-14' src="electrician.jpg" alt="image" width="50%" />
        <div className='bg-white p-8 absolute left-1/2 top-1/4'>
            <p className='text-xl text-orange-500 font-semibold '>About us</p>
            <p className='text-3xl text-black font-bold'>Outstanding Residential</p> 
            <p className='text-3xl text-black font-bold'>& Commercial Services</p>
            <p className='text-neutral-500 pt-5'>All of our services are backed by our 100% satisfaction guarantee. Our </p>
            <p className='text-neutral-500'>electricians can install anything from new security lighting for your </p>
            <p className='text-neutral-500'>outdoors to a whole home generator that will keep your appliances</p>
            <p className='text-neutral-500 pb-5'> working during a power outage.</p>
            <p className='py-1'>Full-service electrical layout, design</p>
            <p className='py-1'>Wiring and installation/upgrades</p>
            <p className='py-1'>Emergency power solutions (generators)</p>
            <p className='py-1'>Virtually any electrical needs you have – just ask!</p>
        </div>
      </div>
    
  )
}

export default Aboutus