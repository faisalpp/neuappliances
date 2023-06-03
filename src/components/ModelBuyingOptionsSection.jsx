import React from 'react'
import ModelBuyingOptionCard from './ModelBuyingOptionCard'
import {AiFillStar, AiOutlineDollarCircle, AiOutlineStar} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'

const ModelBuyingOptionsSection = () => {
  return (
    <>
    
    <div className='flex flex-col py-5 items-center' >
     <h4 className='text-2xl font-bold' >Buying Options for Model Number WF45B6300AC</h4>
    </div>

  <div className='flex flex-col justify-center py-10 items-center w-full' >


    <div className='flex border-[1px] border-gray-200 w-10/12 rounded-md h-full' >
     
     
     {/* Specifications */}
     <div className='flex flex-col items-center justify-end h-12/12 w-52' >
      
      <div className='flex flex-col' >
       <h6 className='text-sm font-bold py-4' >Cosmetic Ratings</h6> 
       <h6 className='text-sm font-bold py-4' >Price</h6> 
       <h6 className='text-sm font-bold py-4' >Model Number</h6> 
       <h6 className='text-sm font-bold py-4' >ID #</h6> 
       <h6 className='text-sm font-bold py-4' >Cosmetic Condition</h6> 
       <h6 className='text-sm font-bold py-4' >Mechanical Test</h6> 
       <h6 className='text-sm font-bold py-4' >Inspections</h6> 
       <h6 className='text-sm font-bold py-4' >Warranty</h6> 
       <h6 className='text-sm font-bold py-4' >Class</h6> 
      </div>
    
     </div>
    
     <div className='flex flex-col border-[1px] border-t-0 border-r-0 border-b-0 w-full border-gray-200' >

      <div className='py-3' >
       <div  className='flex justify-center text-sm w-full font-semibold' ><h5>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</h5></div>
      </div>

      <div className='flex justify-center border-t-[1px] border-b-0 border-gray-200' >
       <ModelBuyingOptionCard bestValue={<span className='flex items-center bg-b9 rounded-2xl px-4 py-1 text-sm' ><AiOutlineDollarCircle className='mr-1' /> Best Value</span>} />
       <ModelBuyingOptionCard bestValue={<span className='flex items-center bg-b3 rounded-2xl px-4 py-1 text-sm' ><FaFire className='mr-1' />Most Popular</span>} />
       <ModelBuyingOptionCard bestValue={<span className='flex items-center bg-b7 rounded-2xl px-4 py-1 text-sm' ><AiFillStar className='mr-1 text-white' />Premium Condition</span>} />
      </div>

    
     </div>
    
    </div>
    
     <div className='py-5' ><h5 className='text-b7 font-semibold' >GO View More Buying Options</h5></div>
  </div>
    </>
  )
}

export default ModelBuyingOptionsSection