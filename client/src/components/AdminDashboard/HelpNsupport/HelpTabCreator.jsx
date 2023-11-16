import React,{useState} from 'react'
import { BsPencil } from 'react-icons/bs'
import { FaRegTrashCan } from "react-icons/fa6";
import Popup from '../Popup'
import TextInput from '../../TextInput/TextInput';
import { BsArrowRightShort } from 'react-icons/bs'

const HelpTabCreator = ({title,state,setState}) => {

  return (
    <>
            <h3 className='font-semibold  mt-5 mb-2 text-center text-xl' >Help & Support Tabs</h3>
        <div className='h-72 border-[1px] border-b31 rounded-xl' >
          <div className='flex justify-end w-full py-3 px-10 border-b-[1px] border-b31' >
            <button type='button' onClick={()=>setState(true)} className='bg-b6 text-white text-sm px-2 rounded-md py-1' >Add Tab</button>
          </div>
          
          <div className='flex flex-wrap px-1 py-4 gap-x-2 gap-y-2 overflow-x-hidden overflow-y-scroll h-36 mx-1' >
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
            <div className='flex  items-center bg-b31/20 border-[1px] px-3 text-sm rounded-2xl font-medium h-fit' ><span className='w-full py-2 pr-2 border-r-[1px] border-b31' >Delivery ( 2 Blogs )</span><div className='flex space-x-2 pl-2' ><span className='bg-b6 flex px-[6px] py-[6px] rounded-full' ><BsPencil className='text-white' /></span><span className='bg-red-500 flex px-[6px] py-[6px] rounded-full' ><FaRegTrashCan className='text-white' /></span></div></div>
          </div>


        </div>
    </>
  )
}

export default HelpTabCreator