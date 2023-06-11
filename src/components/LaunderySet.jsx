import React from 'react'
import WasherCard from './WasherCard';
import { FaPlus } from 'react-icons/fa';
import EmptyDryerCard from './EmptyDryerCard';
// import EmptyDryerCard from './EmptyDryerCard';


const LaunderySet = () => {
  return (
    <>
      <div className='flex flex-col bg-b8 py-14  w-full lg:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
        <div className='flex w-full justify-center text-2xl font-bold' ><h4>Complete Your Laundry Set</h4></div>
        {/* Continer */}
        <div className='flex justify-center w-full mt-10' >
          {/* Inner Contaienr */}
          <div className='flex maxlg:flex-col gap-5 lg:gap-10 w-full justify-center items-center' >
            {/* Washer Card */}
            <WasherCard />
            <span><FaPlus className='text-b3' /></span>
            <EmptyDryerCard />
          </div>

        </div>

      </div>
    </>
  )
}

export default LaunderySet