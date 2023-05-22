import React from 'react'

const SProductCard = ({cat}) => {
  return (
    <div className='w-fit' >
       <img src="p1.png" />
       <h4 className='px-8 font-bold text-lg mt-2' >{cat}</h4>
    </div>
  )
}

export default SProductCard