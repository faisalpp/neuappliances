import React from 'react'
import DropDown from '../Filter/DropDown'

const TypeFilter = () => {
  return (
    <>
      <DropDown title="Appliance Type" >
        <div className='flex text-sm' ><h6>All</h6><div class="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        <div className='flex text-sm' ><h6>Refrigerators</h6><div class="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        <div className='flex text-sm' ><h6>Microwave</h6><div class="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        <div className='flex text-sm' ><h6>Washer</h6><div class="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        <div className='flex text-sm' ><h6>Dryer</h6><div class="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
      </DropDown>
    </>
  )
}

export default TypeFilter