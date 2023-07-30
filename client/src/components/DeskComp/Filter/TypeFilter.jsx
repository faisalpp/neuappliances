import React from 'react'
import DropDown from '../Filter/DropDown'
import { Link } from 'react-router-dom'

const TypeFilter = ({filters}) => {
  
  return (
    <>
      <DropDown title="Appliance Type" >
        <div className='flex text-sm hover:underline' ><h6>All</h6><div className="flex justify-end w-full text-xs" ><span>(84)</span></div></div>
        {filters ? filters.map((item)=><Link to={`/appliances/?category=${item.slug}`} ><div className='flex text-sm hover:underline' >
          <h6 className='w-full ' >{item.title}</h6><div className="flex justify-end w-full text-xs" ><span>({item.productCount})</span>
          </div>
          </div>
          </Link>):null}
      </DropDown>
    </>
  )
}

export default TypeFilter