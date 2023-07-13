import React from 'react'
import DropDown from '../Filter/DropDown'
import { Checkbox } from '@material-tailwind/react'
import { AiFillStar } from 'react-icons/ai'

const TypeFilter = () => {
  return (
    <>
      <DropDown title="Comatic Rating" >
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div class="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div class="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div class="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
        {/* Item Start */}
        <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} className='checked:bg-b3 checked:text-white' /><span className='flex' ><AiFillStar className='text-b7' /><AiFillStar className='text-b7' /></span></div>
          <div class="flex justify-end w-full text-xs" ><span>(84)</span></div>
        </div>
        {/* Item End */}
      </DropDown>
    </>
  )
}

export default TypeFilter