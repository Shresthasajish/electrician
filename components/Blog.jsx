import React from 'react'

const Blog = () => {
  return (
    <div className='mt-10'>
        <div className='relative'>
        <img src="electrician.jpg" alt="" width="100%"/>
        <div className=' absolute top-14 left-1/4 flex justify-around items-center gap-10 '>
            <div>
                <p className='text-2xl font-semibold text-orange-500 py-3'>Our Statstics</p>
                <p className='text-4xl font-bold text-white'>Some Important</p>
                <p className='text-4xl font-bold text-white'> Facts</p>

            </div>
            <div className='flex gap-10 '>
                <div>
                    <p className='font-bold text-4xl'>5000+</p>
                    <p className='font-semibold'>Residential Projects</p>
                </div>
                <div>
                    <p className='font-bold text-4xl'>1500+</p>
                    <p className='font-semibold'>Commercial Projects</p>
                </div>
                <div>
                    <p className='font-bold text-4xl'>1000+</p>
                    <p className='font-semibold'>Industrial Projects</p>
                </div>
            </div>
        </div>
            <img src="electrician2.jpg" alt="" className='absolute bottom-0 left-0 w-1/2 z-10 h-1/2'/>
            <img src="electrician2.jpg" alt="" width="100%" className='absolute bottom-0 right-0 w-4/6 h-4/6'/>
            <div className='absolute bottom-14 left-1/2 bg-orange-500 z-10 text-white p-8'>
                <p className='font-semibold text-xl'>Emergency Services</p>
                <p className='pt-2'>If this is an emergency outside of</p>
                <p className='pb-2'>normal business hours, call us</p>
                <p className='text-2xl font-bold'> 1 (800) 765-43-21</p>
            </div>
        </div>
    </div>
  )
}

export default Blog