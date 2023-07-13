import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import ReviewCard from './ReviewCard';

const StayLoopSlider = ({state,setState}) => {
 useEffect(() => {
   let box = document.getElementById('id3');
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
    <div className='relative my-8' >
     <button onClick={btnprev} className='absolute top-0 -right-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id3" className='flex lg:overflow-x-hidden overflow-x-scroll space-x-3 scroll-smooth' >
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
      <video onClick={()=>setState('/videos/sample.mp4')} className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src="/videos/sample.mp4" />
     </div>
    </div>

    </>
  )
}

export default StayLoopSlider