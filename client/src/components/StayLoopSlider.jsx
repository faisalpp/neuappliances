import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import {AiFillPlayCircle} from 'react-icons/ai'
import {BsFillStopCircleFill} from 'react-icons/bs'


const StayLoopSlider = ({page,setPage,totalPages,video,loopVideo,setLoopVideo,setVideo}) => {
 useEffect(() => {
   let box = document.getElementById('id3');
   setBox(box);
}, []);
  
  const [Box,setBox] = useState();
  const btnprev = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  }
  const btnnext = () => {
    page < totalPages && setPage(page + 1)
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  }

  return (
    <>
    <div className='relative my-8' >
     <button onClick={btnprev} className='absolute top-0 -right-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id3" className='flex overflow-x-hidden space-x-3 scroll-smooth' >
     
      {loopVideo.length > 0 ? loopVideo.map((item)=> <div className='relative' >
       <div onClick={()=>setVideo(`${item.url}`)} className="absolute flex items-center justify-center cursor-pointer bg-black/20 z-40 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 " >{video === item.url ? <BsFillStopCircleFill className="text-gray-300 text-4xl" /> :<AiFillPlayCircle className="text-gray-300 text-4xl" />}</div>
       {item.type === 'iframe' ? <iframe className='xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ' src={item.url} title={item.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> : <video className='myIframe object-cover col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ' src={item.url} />}
      </div>):null}
     
     </div>
    </div>

    </>
  )
}

export default StayLoopSlider