import React from 'react'

const Wwsl = ({img,title,txtStyle}) => {
  return (
    <div className='flex flex-col space-y-8 items-center rounded-xl justify-center xl:w-[315px] xl:h-[224] w-[260px] h-[200px] bg-white shadow-lg' >
    <img src={img} className='w-16' />
    <h5 className={`xl:text-2xl ${txtStyle} font-semibold text-xl text-center w-38`} >{title}</h5>
   </div>
  )
}

export default Wwsl