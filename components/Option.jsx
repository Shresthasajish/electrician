import React from 'react'

const Option = () => {
  return (
    <div className='pt-10'>
        <div className='relative'>
        <img src="electrician.jpg" alt="" className='w-full'/>
        <div className='absolute right-14 top-1/4 bg-white p-14'>
            <div className='border-l-4 border-orange-500'>
            <p className='text-4xl font-bold pl-14'>Your <span className='text-orange-500'>Best Option</span></p>
            <p className='text-4xl font-bold pl-14'>in Electrical</p>
            <p className='text-4xl font-bold pl-14'>Contractors 24/7</p>
            </div>
            <p className='pt-8'>Our experienced electricians are highly trained in all</p>
            <p className=''>aspects of electrical service, from office lighting and</p>
            <p className='pb-14'>security systems to emergency repair.</p>
            <div className='flex'>
            <button className='bg-orange-500 px-2 py-1 rounded-md hover:bg-white hover:text-orange-500 border-2 text-xl text-white border-orange-500'>Explore Services</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Option