import React from 'react'
import WasherCard from './WasherCard';
import { FaPlus } from 'react-icons/fa';
import EmptyDryerCard from './EmptyDryerCard';
// import EmptyDryerCard from './EmptyDryerCard';


const LaunderySet = () => {
  return (
    <>
    <div className='flex flex-col bg-b8 py-14' >
       <div className='flex w-full justify-center text-2xl font-bold' ><h4>Complete Your Laundry Set</h4></div> 
        {/* Continer */}
        <div className='flex justify-center w-full mt-10' >
         {/* Inner Contaienr */}
         <div className='flex w-full space-x-10 justify-center items-center' >
          {/* Washer Card */}  
          <WasherCard/>
          <span><FaPlus className='text-b3' /></span>
          <EmptyDryerCard/>
         </div>

        </div>
      
      </div>
    </>
  )
}

export default LaunderySet