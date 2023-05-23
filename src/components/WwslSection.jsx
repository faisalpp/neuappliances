import React from 'react'
import Wwsl from '../components/Wwsl'

const WwslSection = () => {
  return (
    <>
          {/* What We Sell Section Start */}
          <div className='py-16 bg-b8' >
          <h4 className='text-center font-semibold text-4xl' >What We Sell</h4>
          <div className='lg:grid flex flex-col items-center grid-flow-col-dense justify-center lg:space-x-10 lg:space-y-0 space-y-5 px-10 mt-8' >
            <Wwsl img="wwsl1.png" title="Scratch and Dent Appliances" />
            <Wwsl img="wwsl2.png" title="Floor Model & Display Appliances" />
            <Wwsl img="wwsl3.png" title="Open Box Appliances" />
            <Wwsl img="wwsl4.png" title="Overstock Appliances" />
          </div>
          <p className="text-t1 font-semibold text-lg text-center mt-10" >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
         </div>
        {/* What We Sell Section End */}
    </>
  )
}

export default WwslSection