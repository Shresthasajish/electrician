import React from 'react'

const Homepage = () => {
    const style = "p-2 mx-10 rounded-md "
    
  return (
    <div className='relative'>
        <img src="electrician.jpg" alt="image"  width="100%"/>
        <div className='flex flex-col justify-center items-start absolute bottom-0 pb-0 rounded-md ml-[10%] pt-6 '>
            <div className=' bg-orange-500 justify-center items-center py-2 px-8 font-bold text-xl text-white rounded-t-md'>
                Request Service Today
            </div>
            <div className='flex justify-center items-center bg-stone-800 pb-4 pt-5 px-6 rounded-md'>
            <input type="text" className={style} placeholder='Your Name'/>
            <input type="text" className={style} placeholder='Your e-mail'/>
            <input type="text" className={style} placeholder='Your Phone'/>
            <input type="date" className={style} placeholder='date'/>
            <button className='bg-orange-500 p-2 rounded-md hover:bg-white hover:text-orange-500 border-2 text-white border-orange-500'>Get Service</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage