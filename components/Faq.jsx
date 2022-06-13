import React from 'react'

const Faq = () => {
  return (
    <div className='flex gap-5 justify-around px-14 pt-14 mx-14'>
        <div className='flex flex-col'>
            <div>
                <p className='text-orange-500 font-semibold'>Latest News</p>
                <p className='text-2xl font-semibold'>News & Update</p>
                <p className='text-neutral-500 pt-5'>13, Nov, 2016</p>
                <div className='mt-2 border-l-2 border-orange-500'>
                    <p className='font-semibold pl-4'>Outdoor and Motion</p>
                    <p className='font-semibold pl-4'>Lightning</p>
                </div>
                <div className='border-b-2 border-neutral-700'>
                <p className='text-neutral-500 pt-4'>Electricity is arguably the most valuable</p>
                <p className='text-neutral-500 pb-5'>resource we have in our mode...</p>
                </div>
            </div>
            <div>
            <p className='text-neutral-500 pt-5'>14, Nov, 2016</p>
            <div className='mt-2 border-l-2 border-orange-500'>
                <p className='font-semibold pl-4'>How to install a ceiling</p>
                <p className='font-semibold pl-4'>Fan Where No Fixture</p>
                <p className='font-semibold pl-4'>Exists</p>
            </div>
            <div >
                <p className='text-neutral-500 pt-4'>Electricity is arguably the most valuable</p>
                <p className='text-neutral-500 pb-5'>resource we have in our mode...</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <img src="electrician.jpg" alt="" width="350px" />
            </div>
            <div>
            <p className='text-neutral-500 pt-5'>14, Nov, 2016</p>
            <div className='mt-2 border-l-2 border-orange-500'>
                <p className='font-semibold pl-4'>How to install a ceiling</p>
                <p className='font-semibold pl-4'>Fan Where No Fixture</p>
                <p className='font-semibold pl-4'>Exists</p>
            </div>
            <div >
                <p className='text-neutral-500 pt-4'>Electricity is arguably the most valuable</p>
                <p className='text-neutral-500 pb-5'>resource we have in our mode...</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div>
                <img src="electrician2.jpg" alt="" width="350px"/>
            </div>
            <div>
            <p className='text-neutral-500 pt-5'>14, Nov, 2016</p>
            <div className='mt-2 border-l-2 border-orange-500'>
                <p className='font-semibold pl-4'>How to install a ceiling</p>
                <p className='font-semibold pl-4'>Fan Where No Fixture</p>
                <p className='font-semibold pl-4'>Exists</p>
            </div>
            <div >
                <p className='text-neutral-500 pt-4'>Electricity is arguably the most valuable</p>
                <p className='text-neutral-500 pb-5'>resource we have in our mode...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq