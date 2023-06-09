import React from 'react'
import Wwsl from '../components/Wwsl'

const WwslSection = () => {
  return (
    <>
      {/* What We Sell Section Start */}
      <div className='flex flex-col py-14 xl:py-20 bg-b8 w-full' >
        <h4 className='text-center font-bold text-4xl' >What We Sell</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 xl:gap-10 3xl:gap-[60px] w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto mt-14 xl:mt-16 mb-5' >
          <Wwsl img="wwsl1.png" title="Scratch and Dent Appliances" />
          <Wwsl img="wwsl2.png" title="Floor Model & Display Appliances" />
          <Wwsl img="wwsl3.png" title="Open Box Appliances" />
          <Wwsl img="wwsl4.png" title="Overstock Appliances" />
        </div>
        <p className="text-t1 font-bold text-lg text-center mt-10 2xl:px-0 xl:px-0 px-4 " >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
      </div>
      {/* What We Sell Section End */}
    </>
  )
}

export default WwslSection