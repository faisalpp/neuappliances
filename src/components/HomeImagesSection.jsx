import React from 'react'

const HomeImagesSection = () => {
  return (
    <div className='flex lg:flex-row flex-col ' >
     <div className='relative' ><div className='absolute left-8 top-20 w-full' ><span className='flex justify-center w-100' ><img className='xl:w[593px] xl:h-[90px] lg:w-9/12' src="ht1.png" /></span></div><img src="h1.png" /></div>
     <div className='relative' ><div className='absolute top-20 w-full' ><span className='flex justify-center w-100' ><img className='xl:w[593px] xl:h-[90px] lg:w-9/12' src="ht2.png" /></span></div><img src="h2.png" /></div>
    </div>
  )
}

export default HomeImagesSection