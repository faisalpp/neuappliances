import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MoreImagesModal = ({ state, setState }) => {

  return (
    <div className={`fixed ${state ? 'flex' : 'hidden'} items-center justify-center top-0 z-50 h-screen bg-black/50 w-full`} >
      <div className='relative flex justify-center w-10/12'>
        <span onClick={() => setState(false)} className='absolute -right-10 bg-b3 rounded-full px-1 py-1 cursor-pointer' ><AiOutlineClose className='text-sm text-white' /></span>
        <div className='flex flex-col bg-white w-full py-8 rounded-xl' >
          <div className='flex w-full justify-center' ><img src="/p1.png" /></div>
          <div className='flex justify-center mt-8 items-center space-x-5 w-full' >
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
            <div className='border-[1px] border-b3 rounded-md px-1 py-1 cursor-pointer' ><img src="/p1.png" className='w-12' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreImagesModal