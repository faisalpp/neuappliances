import React from 'react'

const Wwsl = ({ img, title, txtStyle }) => {
  return (
    <>
      <div className='flex flex-col gap-8 m-0 items-center rounded-xl justify-center p-5 2xl:p-7 3xl:p-10 bg-white shadow-lg' >
        <img src={img} className='w-16' />
        <h3 className={`text-lg xl:text-xl 3xl:text-2xl ${txtStyle} font-semibold lg:text-lg text-center`} >{title}</h3>
      </div>
    </>
  )
}

export default Wwsl