import React from 'react'

const ProductFeatures = () => {
  return (
    <>
      <div className='flex flex-col py-10 lg:py-14 xl:py-20 max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
        <div className='flex justify-center items-center flex-col w-full' >
          <h4 className='font-bold text-3xl text-center' >Product Features</h4>
          <p className='text-sm font-medium text-center'>Follow along as our team takes a deep dive into the functions and features of this model appliance.</p>
          <iframe className='w-full md:w-3/4 h-[500px] mt-10 rounded-2xl' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default ProductFeatures