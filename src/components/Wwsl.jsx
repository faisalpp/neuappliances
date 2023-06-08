import React from 'react'

const Wwsl = ({img,title,txtStyle}) => {
  return (
    <>
    <div className='flex flex-col space-y-8 items-center rounded-xl justify-center 2xl:w-[315px] xl:h-[225px] xl:w-[280px] lg:w-[245px] lg:h-[200px] md:w-[180px] h-52 bg-white shadow-lg' >
    <img src={img} className='w-16' />
    <h5 className={`xl:text-2xl ${txtStyle} font-semibold lg:text-lg text-center w-38`} >{title}</h5>
   </div>
    </>
  )
}

export default Wwsl