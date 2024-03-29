import React, { useState,useEffect} from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import {AiFillPlayCircle} from 'react-icons/ai'
import {BsFillStopCircleFill} from 'react-icons/bs'
import Iframe from '../components/Reusable/Ifram'
import Hammer from 'hammerjs'


const StayLoopSlider = ({isIframe,setIsIframe,parentId,child,page,setPage,totalPages,video,loopVideo,setLoopVideo,setVideo,setGenState}) => {
 useEffect(() => {
   let box = document.getElementById('id3');
   setBox(box);
}, []);


  
  const [Box,setBox] = useState();

  const btnprev = () => {
    // console.log('prev')
    page > 1 ? setPage(page - 1) : setPage(1);
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  }
  const btnnext = () => {
    // console.log('next')
    page < totalPages && setPage(page + 1)
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  }

  const swipeableEl = document.getElementById('id3');
  if(swipeableEl){
    const hammer = Hammer(swipeableEl)
   hammer.on('swipeleft', () => btnprev())
   hammer.on('swiperight', () => btnnext())
  }

  const HandleParentChange = (e,data) => {
    e.preventDefault()
   const parent = document.getElementById(parentId)
   const child2 = document.getElementById(child)
  //  console.log(parent)
   if(parent && child2){
     child2.remove()
   }
  //  setGenState(true);
  setIsIframe(true)
  setVideo(data)
  }

  return (
    <>
    <div className='relative my-8' >
     <button onClick={btnprev} className='absolute top-0 -right-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id3" className='flex overflow-x-hidden space-x-3 scroll-smooth' >
     
      {loopVideo.length > 0 ? loopVideo.map((item,index)=> <div className='relative' >
       {/* <div onClick={e=>HandleParentChange(e,{url:item.url,thumb:item.thumbnail})} className="absolute flex items-center justify-center cursor-pointer z-40 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 " > */}
       {/* <div onClick={()=>{}} className="absolute flex items-center justify-center cursor-pointer z-40 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 " > */}
      {/* </div> */}
         {item.type === 'iframe' ? <div className='relative xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-44 h-32 ' ><div onClick={e=>HandleParentChange(e,{url:item.url,thumb:item.thumbnail})} className='absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center' >{video === item.url ?<BsFillStopCircleFill className="text-gray-300 text-4xl" />:<AiFillPlayCircle className="text-gray-300 text-4xl" />}</div><img src={item.thumbnail} className='xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-44 h-32  rounded-2xl' /></div>:null}
         {item.type !== 'iframe' ? <div className='relative' ><div onClick={e=>HandleParentChange(e,{url:item.url,thumb:item.thumbnail})} className='absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center' >{video === item.url ?<BsFillStopCircleFill className="text-gray-300 text-4xl" />:<AiFillPlayCircle className="text-gray-300 text-4xl" />}</div><video className='xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ' src={item.url} /></div>:null}
         {/* {item.type !== 'iframe' ? <video className='xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ' src={item.url} /> : null} */}
      </div>):null}
     
     </div>
    </div>

    </>
  )
}

export default StayLoopSlider