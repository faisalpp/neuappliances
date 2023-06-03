import React from 'react'
import {AiFillStar, AiOutlineCheckCircle} from 'react-icons/ai'

const ModelBuyingOptionCard = ({bestValue}) => {
  return (
    <>
    <div className='flex flex-col items-center space-y-5 py-4 w-full' >
     <div  className='flex w-full text-white justify-center' >{bestValue}</div>
     <img src="p1.png" className='w-52'/>
     <div className='flex flex-col items-center justify-center space-y-5' >
     <div className='flex items-center' >
        <AiFillStar className='text-b7 text-2xl' />
        <AiFillStar className='text-b7 text-2xl' />
        <AiFillStar className='text-b7 text-2xl' />
     </div>
     <h5 className='font-semibold' >$10202</h5>
     <h5 className='font-normal' >WF45B6300AC</h5>
     <h5 className='font-bold'> #12354567876</h5>
     <h5 className='font-normal'> Moderate Cosmetic Damage</h5>
     <h5 className='flex items-center font-normal'><AiOutlineCheckCircle className='mr-1 text-b10' /> 100%</h5>
     <h5 className='flex items-center font-normal'><AiOutlineCheckCircle className='mr-1 text-b10' /> Passed</h5>
     <h5 className='flex items-center font-normal'> 1 Year Warranty</h5>
     <h5 className='flex items-center font-normal'>Open Box / Scratch & Dent</h5>
     <button className='border-b7 border-[1px] text-b7 py-2 rounded-md w-10/12' >Selected</button>
     </div>
    </div>
    </>
  )
}

export default ModelBuyingOptionCard