import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineTruck } from 'react-icons/hi'
import { FaTrashAlt ,FaDotCircle} from 'react-icons/fa'

const SideCart = ({sCart,setSCart}) => {
  return (
    <div className={` ${ sCart ? 'absolute' : 'hidden'} top-0 bg-black/60 w-full h-screen`} >

      <div className={` ${ sCart ? 'flex' : 'hidden'} flex-col float-right bg-white lg:w-1/3 w-8/12 h-screen py-5 px-5`} >
        <div className='flex items-center' ><div className='flex items-center space-x-3 lg:w-36 w-52' ><h4>My Cart</h4><span className='bg-b3 text-white rounded-full text-xs px-2 py-[4px]' >4</span></div><div className='flex items-center w-full justify-end' ><AiOutlineClose onClick={()=>setSCart(false)} className='cursor-pointer' /></div></div>

        <div className='flex flex-col mt-5 rounded-lg px-4 py-5 border-[1px] border-gray-200' >
          <h4 className='font-semibold' >Delivery Orders</h4>
           {/* Cart Product */}
           <div className='flex justify-start mt-3 ' >
             <img src="p1.png" className='w-20 h-18' />
             <div className='flex' >
                <p className='text-sm font-semibold' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls</p>
                <FaTrashAlt className='text-2xl text-red-500' />
             </div>
           </div>
           {/* Cart Product End */}

           <div className='border-[1px] border-gray-200 rounded-md py-3 px-3' >
            <div className='flex items-center space-x-32' ><div className='flex items-center space-x-1' ><FaDotCircle className='text-b3' /><HiOutlineTruck className='text-2xl' /><h4 className='text-sm font-medium' >Delivering To</h4></div><h4 className='text-b3 font-semibold' >$80</h4></div>
           </div>

        </div>

      </div> 

    </div>
  )
}

export default SideCart