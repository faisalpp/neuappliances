import React from 'react'

const HiwCad = ({icon,title,txt}) => {
  return (
    <>
    <div className='col-start-1 col-end-4  flex flex-col space-y-5 items-center rounded-2xl shadow-lg py-10  2xl:w-[425px] xl:w-[380px] lg:w-[332px] md:w-[350px] lg:mt-0 mt-5 lg:px-5 xl:px-10 px-2 bg-white' >
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