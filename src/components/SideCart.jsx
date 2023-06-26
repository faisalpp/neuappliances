import React from 'react'
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineTruck } from 'react-icons/hi'
import { FaDotCircle } from 'react-icons/fa'
import SideCartCard from './Cart/SideCartCard'


const SideCart = ({ sCart, setSCart }) => {
  return (
    <div className={` ${sCart ? 'fixed' : 'hidden'} top-0 z-[999] bg-black/60 w-full h-screen`} >

      <div className={` ${sCart ? 'flex' : 'hidden'} flex-col float-right bg-white overflow-y-auto max-w-[480px] w-full h-screen`} >
        <div className='flex items-center  py-5 px-6 justify-between' ><div className='flex items-center gap-x-3' ><h4>My Cart</h4><span className='bg-b3 text-white rounded-full text-xs px-2' >4</span></div><div className='flex items-center justify-end' ><AiOutlineClose onClick={() => setSCart(false)} className='cursor-pointer' /></div></div>

        <div className='flex flex-col rounded-lg px-6 py-5 border border-gray-200 ' >
          <h4 className='font-semibold' >Delivery Orders</h4>
          {/* Cart Product */}
          <div className='flex flex-col gap-6'>
            <SideCartCard />
            <SideCartCard />
            <SideCartCard />
            <SideCartCard />
          </div>
          {/* Cart Product End */}

          <div className='border flex flex-col gap-4 lg:mt-0 mt-3 border-gray-200 rounded-md py-3 px-3' >
            <div className='flex items-center justify-between' >
              <div className='flex items-center space-x-1' ><FaDotCircle className='text-b3' /><HiOutlineTruck className='text-2xl' />
                <h4 className='text-sm font-medium' >Delivering To</h4>
              </div>
              <h4 className='text-b3 font-semibold' >$80</h4>
            </div>
            <input type="text" className='border border-b14 p-[10px] rounded-lg outline-none w-full' />
            <button type='button'>
              <div className='flex gap-2 items-center'>
                <span className='w-[18px] h-[18px]'>
                  <img src="/svgs/calendar_month.png" alt="calendar_month" />
                </span>
                <span className='text-xs font-medium text-b3'>
                  Select Time-slot
                </span>
              </div>
            </button>
          </div>

        </div>

        <div className='border-t border-gray-300 p-6 flex flex-col gap-6'>
          <div className='flex justify-between'>
            <span className='text-sm'>
              Order Total
            </span>
            <span className='font-bold'>
              $2,279.00
            </span>
          </div>

          <button type='button' className='text-xs text-white rounded-lg bg-b3 px-4 py-3 flex gap-2 justify-center'>
            Proceed to Checkout
            <AiOutlineArrowRight className='text-base' />
          </button>
        </div>

      </div>

    </div>
  )
}

export default SideCart