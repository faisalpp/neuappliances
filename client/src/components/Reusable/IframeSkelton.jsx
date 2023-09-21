import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const IframeSkelton = ({style}) => {
  return (
    <div className={`bg-black ${style} `} ><div className='absolute flex items-center justify-center h-full w-full bg-transparent ' ><AiOutlineLoading3Quarters className='text-b6 text-8xl animate-spin' /></div></div>
  )
}

export default IframeSkelton