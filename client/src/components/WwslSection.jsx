import React from 'react'
import Wwsl from '../components/Wwsl'

const WwslSection = () => {
  return (
    <>
      {/* What We Sell Section Start */}
      <div className='flex flex-col py-14 xl:py-20 bg-b8 w-full' >
        <h4 className='text-center font-bold text-4xl' >What We Sell</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 xl:gap-10 3xl:gap-[60px] w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto mt-14 xl:mt-16 mb-5' >
          <Wwsl img="wwsl1.png" title="Scratch and Dent Appliances" description="Our Deep discounts on Scratch and Dent Appliances may include cosmetic imperfections like: scratches, dents, dings, scuffs or other marks that occurred during shipping, handling, or even during the manufacturing process.  We grade these appliances and apply huge savings!" note="The bigger the dent, the bigger the discount!" />
          <Wwsl img="wwsl2.png" title="Floor Model & Display Appliances" description="Floor Model and Display Model Appliances have been displayed in a showroom or retail store to show it's features and functions. Floor and Display Model appliances may have scratches or dents that occurred from this. Our deep discounts make these a great deal for the buyer!" note="The bigger the dent, the bigger the discount!" />
          <Wwsl img="wwsl3.png" title="Open Box Appliances" description="Open Box Appliances have had their packaging opened for any reason but typically include appliances that were purchased and returned by a customer. If the Open Box Appliance has any cosmetic scratches or dents we provide huge discounts!" note="The bigger the dent, the bigger the discount!" />
          <Wwsl img="wwsl4.png" title="Overstock Appliances" description="Overstock Appliances are brand new appliances that were purchased by a retailer or distributor in excess. Neu Appliance Outlet liquidates Overstock Appliances at huge discounts compared to their original price. We test, inspect and grade each appliance. Our huge discounts of Overstock A  ppliances keep our customers raving about our business!" note="The bigger the dent, the bigger the discount!" />
        </div>
        <p className="text-t1 font-bold text-lg text-center mt-10 2xl:px-0 xl:px-0 px-4 " >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
      </div>
      {/* What We Sell Section End */}
    </>
  )
}

export default WwslSection