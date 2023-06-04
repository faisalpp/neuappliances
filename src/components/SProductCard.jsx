import React from 'react'

const SProductCard = ({cat}) => {
  return (
    <div>
    <div className='flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white xl:w-[453px] xl:h-[400px] lg:w-[350px] w-[300px] py-10' >
       <img src="p1.png " className='w-56' />
    </div>
       <h4 className='px-8 font-bold xl:text-xl text-lg mt-2' >{cat}</h4>
    </div>
  )
}

export default SProductCard