import React from 'react'
import Wwsl from '../components/Wwsl'

const WwslSection = () => {
  return (
    <>
          {/* What We Sell Section Start */}
          <div className='flex flex-col py-16 bg-b8 w-full' >
          <h4 className='text-center font-bold text-4xl mt-16' >What We Sell</h4>
          <div className='lg:grid grid-flow-col w-full space-x-2 lg:space-y-0 space-y-5 px-[8.33%] mt-16' >
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