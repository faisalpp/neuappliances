import React from 'react'

const Wwsl = ({img,title}) => {
  return (
    <div className='flex flex-col space-y-8 items-center rounded-xl justify-center w-[260px] h-[200px] bg-white' >
    <img src={img} className='w-16' />
    <h5 className='font-semibold text-xl text-center w-38' >{title}</h5>
   </div>
  )
}

export default Wwsl