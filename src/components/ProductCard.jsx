import React from 'react'
import {AiOutlineDollar,AiFillStar,AiOutlineCheckCircle} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import ProductSlider from './ProductSlider'

const ProductCard = () => {
  return (
    <div className='flex flex-col bg-white w-[360px] h-auto rounded-md pb-10 shadow-md' >
        <div className='flex items-center bg-b9 w-5/12 rounded-b-2xl ml-3 justify-center h-6 space-x-2 text-white' ><AiOutlineDollar/><span className='text-xs' >Best Value</span></div>
        <div className='flex flex-col items-center justify-center mt-4' >
           <div className='flex justify-center items-center text-center space-x-1 text-lg' ><h4 className='font-bold' >Cosmetic Rating:</h4><span className='font-semibold' >3 Stars</span></div> 
           <div className='flex space-x-3 mt-2' ><AiFillStar className='text-b4 text-xl' /><AiFillStar className='text-b4 text-xl' /><AiFillStar className='text-b4 text-xl' /></div>
           <h4 className='text-b9 font-semibold text-sm mt-3' >Moderate Cosmetic Damage</h4>
           <div className='flex items-center mt-2 space-x-1 bg-b10 rounded-xl px-2 py-1 text-white' ><AiOutlineCheckCircle/><span className='text-xs' >100% Functional</span></div>
           <div className='relative py-5 w-full' >
            <ProductSlider/>
           </div>
           
           <div className='flex flex-col space-y-3' >
            <div className='flex space-x-3' ><span className='font-semibold text-[16px]' >Cosmetic Damage</span><span>Moderate</span></div>
            <div className='flex space-x-20' >
              <span className='font-semibold text-[16px]' >Discount</span>
              <div className='flex space-x-4 h-5' >
                <div className='flex space-x-1' >
                 <span className='flex bg-b4 w-2 mt-2' ></span>
                 <span className='flex bg-b4 w-2 mt-1' ></span>
                 <span className='flex bg-b4 w-2 h-5' ></span>
                </div>
                <span className='font-semibold text-sm' >Massive</span>
              </div>
            </div>
            <div className='flex space-x-5' >
             <div className='text-sm space-y-2' >
              <div className='flex' ><span>Mechanical Test</span></div>
              <div className='flex' ><span>Inspection</span></div>
              <div className='flex' ><span>Warranty</span></div>
              <div className='flex' ><span>Class</span></div>
             </div>
             <div className='text-sm space-y-2' >
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>100%</h4></div>
              <div className='flex space-x-1 items-center' ><AiOutlineCheckCircle className='text-b6' /><h4>Passed</h4></div>
              <div className='flex space-x-1 items-center' ><span>1 Year Warranty</span></div>
              <div className='flex space-x-1 items-center' ><span>Open Box / Scratch & Dent</span></div>
             </div>
            </div>
            <a className='flex items-center justify-center space-x-2 cursor-pointer text-white text-[16px] bg-b7 h-10 rounded-md hover:underline' ><span>Shop 3 Star Products</span><IoIosArrowForward className='text-xl' /></a>
           </div>
        </div>
    </div>
  )
}

export default ProductCard