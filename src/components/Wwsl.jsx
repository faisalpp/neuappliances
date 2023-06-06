import React from 'react'

const Wwsl = ({img,title,txtStyle}) => {
  return (
    <>
    <div className='flex flex-col space-y-8 items-center rounded-xl justify-center xl:w-[315px] xl:h-[225px] lg:w-[250px] lg:h-[200px] w-full h-52 bg-white shadow-lg' >
    <img src={img} className='w-16' />
    <h5 className={`xl:text-2xl ${txtStyle} font-semibold lg:text-lg text-center w-38`} >{title}</h5>
   </div>
    </>
  )
}

export default Wwsl