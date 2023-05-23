import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';


const GallerySlider = () => {
 useEffect(() => {
   let box = document.getElementById('id6');
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
     <div id="id6" className='flex lg:overflow-x-hidden overflow-x-scroll space-x-5 scroll-smooth' >
      <img src="g2.png" className='h-[172px] w-[200px]' />
      <img src="g3.png" className='h-[172px] w-[200px]' />
      <img src="g4.png" className='h-[172px] w-[200px]' />
      <img src="g5.png" className='h-[172px] w-[200px]' />
      <img src="g6.png" className='h-[172px] w-[200px]' />
      <img src="g7.png" className='h-[172px] w-[200px]' />
      <img src="g8.png" className='h-[172px] w-[200px]' />
     </div>
    </div>

    </>
  )
}

export default GallerySlider