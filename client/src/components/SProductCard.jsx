import React from 'react'

const SProductCard = ({ cat }) => {
  return (
    <div className='maxmd:max-w-[330px] maxmd:mx-auto'>
      <div className='flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10' >
        <img src="p1.png " className='w-56' />
      </div>
      <h4 className=' font-bold xl:text-xl text-lg mt-2' >{cat}</h4>
    </div>
  )
}

export default SProductCard