import React, { useEffect, useState } from 'react'
import {AiFillPlayCircle,AiOutlineLoading3Quarters} from 'react-icons/ai'

const Ifram = ({style,src,title,icon,frameId,divId,genState, setGenState,thumbnail}) => {

  const [isIframe,setIsIframe] = useState(true)
  const [trigger,setTrigger] = useState(false)
  const [isIframeLoader,setIsIframeLoader] = useState(false)

  const iframe = document.getElementById(frameId);
  if(iframe){
    iframe.addEventListener("load", function() {
      setIsIframeLoader(false)
      iframe.removeAttribute('class');
      iframe.setAttribute('class', `${style}`);
    });
  }

  const handleLoader = () => {
    // Create a new iframe elemen
      
      if(document.getElementById(frameId)){
        document.getElementById(frameId).remove()
      }
      setTrigger(false)
      setIsIframeLoader(true)
      var iframe = document.createElement('iframe');
      iframe.title = title; 
      iframe.src = src;
      iframe.setAttribute('class', 'h-0 w-0');
      iframe.setAttribute('id', frameId);
      var container = document.getElementById(divId);
      container.appendChild(iframe);
      setIsIframe(false)
      setGenState(false)
  }

  useEffect(()=>{
    if(trigger){
      handleLoader()
    }
  },[trigger,genState])

  return (
    <div  id={divId} className={`relative ${style} rounded-2xl`} > 
      <div className={`relative ${isIframe || isIframeLoader ? 'flex items-center justify-center h-full w-full' : 'hidden'}`} >
       {isIframe ? <AiFillPlayCircle onClick={()=>setTrigger(true)} className={`${icon ? icon : 'hidden'} absolute cursor-pointer ${icon} text-b6`} />:null}
       {isIframeLoader ? <AiOutlineLoading3Quarters className={`absolute cursor-wait ${icon ? icon : 'hidden'} ${icon} text-b6 animate-spin`} />:null}
       {isIframeLoader || isIframe ? <img alt="thumbnail" title="thumbnail" src={thumbnail} className='h-full w-full rounded-2xl' />:null}
      </div>
    </div>
  )
}

export default Ifram