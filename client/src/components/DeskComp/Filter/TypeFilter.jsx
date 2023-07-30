import React from 'react'
import DropDown from '../Filter/DropDown'

const TypeFilter = ({categories}) => {
  return (
    <>
      <DropDown title="Appliance Type" >
        <div className='flex text-sm hover:underline' ><h6>All</h6><div className="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        {categories.map((item)=><div className='flex text-sm hover:underline' >
          <h6 className='w-full ' >{item.title}</h6><div className="flex justify-end w-full text-xs" ><span>({item.productCount})</span>
          </div>
          </div>
        )}
      </DropDown>
    </>
  )
}

export default TypeFilter