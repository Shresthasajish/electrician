import React, {useState} from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Carousel = () => {

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className='flex gap-5 items-center justify-center'>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    <img src="electrician2.jpg" onDragStart={handleDragStart} role="presentation" width='350px'/>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    </div>,
    <div className='flex gap-5 items-center justify-center'>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    <img src="electrician2.jpg" onDragStart={handleDragStart} role="presentation" width='350px'/>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    </div>,
    <div className='flex gap-5 items-center justify-center'>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    <img src="electrician2.jpg" onDragStart={handleDragStart} role="presentation" width='350px'/>
    <img src="electrician.jpg" onDragStart={handleDragStart} role="presentation"  width="350px"/>
    </div>
    
  ];
  
  // return (
    return (
      <AliceCarousel mouseTracking items={items} disableButtonsControls autoPlay="true" autoPlayInterval="900"/>
    );
    // <div className='flex px-14 items-center justify-center'>
      
    //   {data?.map((item,index)=>(
    //     <div className='flex flex-col justify-center items-center'>
    //     <img src={item.image1} alt="" width="60%" className='mx-5'/>
    //     <p>{item.heading1}</p>
    //     <p>{item.heading2}</p>
    //     <p>{item.heading3}</p>
    //     </div>
    //   ))} 
    // </div>
  // )
}

export default Carousel