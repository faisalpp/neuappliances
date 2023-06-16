import React from 'react'

const HiwCad = ({ icon, title, txt }) => {
  return (
    <>
      <div className='flex flex-col maxmd:max-w-[330px] maxmd:mx-auto gap-5 items-center rounded-[24px_24px_0px_24px] shadow-lg p-7 3xl:p-10 bg-white' >
        <img src={icon} className='w-16' alt={title} />
        {/* <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' > */}
        <h5 className='font-bold text-xl xl:text-2xl text-center' >{title}</h5>
        <p className='lg:text-sm text-xs xl:text-base font-medium text-center text-black/70' >{txt}</p>
        {/* </div> */}
      </div>
    </>
  )
}

export default HiwCad