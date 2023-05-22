import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import ReviewCard from './ReviewCard';

const ReviewSlider = ({color}) => {
 useEffect(() => {
   let box = document.getElementById('id');
   setBox(box);
}, []);
  
  const [Box,setBox] = useState();
  const btnprev = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  }
  const btnnext = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  }

  return (
    <>
    <div className='relative my-8 mx-5' >
     <button onClick={btnprev} className='absolute top-0 -right-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id" className='flex overflow-x-hidden space-x-5 scroll-smooth' >
        <ReviewCard color={color} />
        <ReviewCard color={color} />
        <ReviewCard color={color} />
        <ReviewCard color={color} />
        <ReviewCard color={color} />
     </div>
    </div>

    </>
  )
}

export default ReviewSlider