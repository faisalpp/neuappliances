import React from 'react'

const HiwCad = ({icon,title,txt}) => {
  return (
    <>
    <div className='col-start-1 col-end-4  flex flex-col space-y-5 items-center rounded-xl shadow-lg py-10  xl:w-[440px] lg:w-[350px] lg:px-5 xl:px-10 bg-white' >
      <img src={icon} className='w-16' />
      {/* <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' > */}
       <h5 className='font-bold text-xl xl:text-2xl text-center ' >{title}</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium text-center' >{txt}</p>
      {/* </div> */}
     </div>
    </>
  )
}

export default HiwCad