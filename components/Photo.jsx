import React from 'react'

const Photo = () => {
    const style = "w-full relative items-center "
    const style2 = "absolute bottom-1/2 right-1/2 text-white font-bold text-2xl ml-10 z-20"
  return (
    <div className='flex m-10'>
         <div className={style}>
            <img src="electrician.jpg" alt="2" width='100%' className='hover:scale-125 hover:z-10'/>
            <div className={style2}>Commercial</div>
            
            <button className='font-bold z-20 text-white bottom-1/4 right-1/2 bg-orange-500 absolute rounded-full p-6 hover:bg-white hover:text-orange-500'></button>
        </div>
        <div className={style}>
            <img src="electrician.jpg" alt="2" width='100%'  className='hover:scale-125 absolute hover:z-10'/>
            <div className={style2}>Industrial</div>
            
            <button className='font-bold z-20 text-white bottom-1/4 right-1/2 bg-orange-500 absolute rounded-full p-6 hover:bg-white hover:text-orange-500'></button>
        </div>
        <div className={style}>
        <img src="electrician.jpg" alt="3" width='100%'  className='hover:scale-125 absolute hover:z-10'/>
        <div className={style2}>Residential</div>
        
        <button className='font-bold z-20 text-white bottom-1/4 right-1/2 bg-orange-500 absolute rounded-full p-6 hover:bg-white hover:text-orange-500'></button>
        </div>
    </div>
  )
}

export default Photo