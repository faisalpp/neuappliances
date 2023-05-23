import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeroSection = () => {
  return (
    <>
          <div className='lg:grid flex flex-col lg:space-y-0 space-y-10 grid-cols-12 items-center py-20 lg:px-10 px-5 bg-b5 auto' >
          <div className='col-start-1 col-end-7 flex flex-col space-y-10' >
           <h4 className='text-5xl font-bold' >Austin's Best Deals For Scratch & Dent Appliances</h4>
           <div className='flex lg:justify-start justify-center' ><a href="#" className='flex text-white rounded-md space-x-2 font-semibold items-center justify-center bg-b7 w-56 h-[56px] text-sm' ><AiOutlineShoppingCart className='text-xl' /><span>Discover The Savings</span></a></div>
          </div>  
          <div className='col-start-8 col-end-13 flex justify-center' >
            <img src="hero-img.png" className='w-full lg:h-96 h-72 ' />
          </div>
        </div>
    </>
  )
}

export default HeroSection