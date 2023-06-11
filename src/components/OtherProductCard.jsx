import React from 'react'
import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoBagCheckOutline } from 'react-icons/io5'
import ToolTip from './ToolTip'


const OtherProductCard = () => {
  return (
    <div className='flex flex-col border-[1px] rounded-lg border-gray-200 px-2 py-4 w-full ' >
      <div className='flex items-center justify-between' >
        <div className='flex items-center gap-1'>
          <h6 className='text-[10px] w-max' >Cosmetic&nbsp;Rating</h6><ToolTip />
        </div>
        <div>
          <span className='flex items-center w-fit bg-b10 text-white text-[8px] px-3 rounded-xl py-1' ><IoBagCheckOutline className='text-[10px] mr-1' />In Stock</span>
        </div>
      </div>
      <div className='flex items-center text-b7 bg-white shadow-xl rounded-xl text-xs w-fit px-2 py-1' ><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
      <div className='flex w-full justify-center my-3 items-center' >
        <img src="p1.png" className='w-28' alt='product' />
      </div>
      <div className='flex flex-col space-y-3' >
        <div className='flex items-center' ><h6 className='text-sm' >$279.00</h6><div className='flex justify-end w-full text-xs' ><strike>$379.00</strike></div></div>
        <div className='flex items-center' ><h6 className='text-xs' >Discount&nbsp;%</h6><div className='flex justify-end w-full' ><span className='bg-b4 rounded-2xl font-semibold lg:px-3 px-1 py-1 lg:text-[8px] text-[9px]' >50% OFF</span></div></div>
        <div className='flex w-full justify-center' ><div className='w-10/12 bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-28 h-2' ></span></div></div>
      </div>
    </div>
  )
}

export default OtherProductCard