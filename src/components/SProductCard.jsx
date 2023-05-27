import React from 'react'

const SProductCard = ({cat}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white w-72 py-10' >
       <img src="p1.png " className='w-56' />
       <h4 className='px-8 font-bold text-lg mt-2' >{cat}</h4>
    </div>
  )
}

export default SProductCard