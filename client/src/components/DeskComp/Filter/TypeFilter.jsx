import React from 'react'
import DropDown from '../Filter/DropDown'

const TypeFilter = ({filters}) => {
  
  return (
    <>
      <DropDown title="Appliance Type" >
        <div className='flex text-sm hover:underline' ><h6>All</h6><div className="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        {filters ? filters.map((item)=><div className='flex text-sm hover:underline' >
          <h6 className='w-full ' >{item.title}</h6><div className="flex justify-end w-full text-xs" ><span>({item.productCount})</span>
          </div>
          </div>
        ):null}
      </DropDown>
    </>
  )
}

export default TypeFilter