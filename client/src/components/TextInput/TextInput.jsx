import React from 'react'

const TextInput = (props) => {

  return (
    <div className={`flex flex-col space-y-1 ${props.width === 'full' ? 'w-full' : 'w-full'}`}>
     <h5 className='text-xs font-semibold' >{props.title} {props.iscompulsory ? <i className='text-red-500' >*</i> : null}</h5><h5 className='text-red-500 text-xs' >{props.error ? props.errormessage : null}</h5>
     <input {...props} className={`text-sm outline-none border-[1px]  ${props.error ? 'border-red-500' : 'border-gray-200'  } w-full px-4 py-3 rounded-md`} />
    </div>
  )
}

export default TextInput