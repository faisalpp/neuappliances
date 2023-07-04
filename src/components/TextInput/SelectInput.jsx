import React from 'react'
import {FiChevronDown} from 'react-icons/fi'


const SelectInput = (props) => {
    const options = props.options
  return (

     <div className='w-1/2' >
           <h5 className='text-xs font-semibold' >{props.title} {props.iscompulsory ? <i className='text-red-500' >*</i> : null}</h5><h5 className='text-red-500 text-xs' >{props.errormessage}</h5>
           <div className='relative'>
           <select {...props} onChange={props.change} className={`border ${props.error ? 'border-red-500' :'border-[rgba(0,0,0,0.16)]'} rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none`}>
            {options && options.length>0 ? options.map((option,index)=><option key={index} value={props.name === 'category'? option._id: props.name !== 'category' && option.title? option.title.toLowerCase().replace(/\s/g,'-'): option.toLowerCase().replace(' ','-')} >{option.title ? option.title:option}</option>):<option>{props.title} Not Found!</option>}
           </select>
            <FiChevronDown className='absolute right-4 top-3' />
           </div>
          </div>
  )
}

export default SelectInput