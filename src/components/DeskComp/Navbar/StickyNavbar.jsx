import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const StickyNavbar = ({ state }) => {
  return (
    <>
      <div className={`fixed top-0 z-50 hidden ${state ? 'lg:flex' : 'hidden'} flex-col w-full bg-white shadow-lg`} >
        <div className=' flex items-center bg-gray-100 py-5 w-full justify-center max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

          <div className='flex space-x-5 items-center w-6/12 max-w-6/12' >
            <div className='border-[1px] border-gray-200 rounded-lg px-2 py-1 w-fit' ><img src="p1.png" className='w-24' alt='' /></div>
            <p className='font-bold text-clip' >Champagne ENERGY STAR Samsung 4.5 cu. ft. Front Load Washer with Wi-Fi Connectivity and 7.5 cu. ft. Front Load Gas Dryer with Steam</p>
          </div>

          <div className='flex space-x-5 items-center justify-end w-6/12' >
            <div className='flex flex-col' >
              <h4 className='font-bold text-2xl text-b3' >$1,020.00</h4>
              <div className='flex space-x-5 items-center' >
                <strike>$1,249.00</strike>
                <span className='flex bg-b4 lg:text-xs text-[10px] text-black px-3 py-2 font-semibold rounded-2xl' >Save $229.00</span>
              </div>
            </div>
            <div className='flex justify-center items-center bg-b7 text-sm text-white px-10 py-3 cursor-pointer  rounded-lg' ><AiOutlineShoppingCart className='text-lg' /><h6 className="font-bold ml-2" >Add To Cart</h6></div>
          </div>

        </div>

        <div className='grid grid-cols-12 items-center bg-white justify-center w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='col-span-9 flex gap-1 xl:gap-3 2xl:gap-5 items-center pr-5 xl:pr-10 py-4 [&>a]:font-normal [&>a]:text-xs [&>a]:h-5 [&>a]:cursor-pointer [&>a:hover]:border-b-[1px] [&>a:hover]:border-b4' >
            <NavLink to=''>Product Information</NavLink>
            <NavLink to=''>360° View</NavLink>
            <NavLink to=''>Payments Options</NavLink>
            <NavLink to=''>Testimonials</NavLink>
            <NavLink to=''>Product Features</NavLink>
            <NavLink to=''>Inspections</NavLink>
            <NavLink to=''>Compare</NavLink>
            <NavLink to=''>FAQ</NavLink>
          </div>
          <div className='col-span-3 flex items-center justify-end gap-4 xl:gap-x-10' >
            <div className='flex items-center gap-1 text-b4 cursor-pointer hover:text-black' ><FiPhone /><span className='text-xs w-max' >(512) 992-2714</span></div>
            <div className='flex items-center gap-1 text-black cursor-pointer hover:text-b4' ><TfiHeadphoneAlt /><span className='text-xs w-max' >Need Help?</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StickyNavbar