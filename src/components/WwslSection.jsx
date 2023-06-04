import React from 'react'
import Wwsl from '../components/Wwsl'

const WwslSection = () => {
  return (
    <>
          {/* What We Sell Section Start */}
          <div className='flex flex-col py-16 bg-b8 w-full lg:px-[60px]' >
          <h4 className='text-center font-bold text-4xl' >What We Sell</h4>
          <div className='grid grid-flow-col flex-col xl:space-x-12 w-full lg:space-x-8 lg:space-y-0 space-y-5 xl:pl-[50px] xl:pr-[60px] mt-14' >
            <Wwsl img="wwsl1.png" title="Scratch and Dent Appliances" />
            <Wwsl img="wwsl2.png" title="Floor Model & Display Appliances" />
            <Wwsl txtStyle="w-32" img="wwsl3.png" title="Open Box Appliances" />
            <Wwsl txtStyle="w-32" img="wwsl4.png" title="Overstock Appliances" />
          </div>
          <p className="text-t1 font-bold text-lg text-center mt-10" >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
         </div>
        {/* What We Sell Section End */}
    </>
  )
}

export default WwslSection