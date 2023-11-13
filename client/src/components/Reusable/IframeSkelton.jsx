import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {TbLoader3} from 'react-icons/tb'

const IframeSkelton = ({style}) => {
  return (
   <div className={`bg-black ${style} `} >
      <div className='absolute flex items-center justify-center h-full w-full bg-transparent ' >
       <TbLoader3 className='cursor-wait text-8xl text-white animate-spin' />
      </div>
   </div>
  )
}

export default IframeSkelton