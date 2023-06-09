import React from 'react'
import HiwCad from './HiwCad'

const HiwSection = () => {
  return (
    <div className='flex flex-col items-center bg-b8 space-y-10 pb-10 lg:pb-20 w-full' >
      <h4 className='font-bold xl:text-[36px] text-3xl py-5 mb-3 text-center' >How it Works</h4>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 2xl:gap-10 3xl:gap-x-[60px] 3xl:gap-y-10 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
        <HiwCad icon="hiw1.png" title="Cosmetic Rating" txt="We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!" />
        <HiwCad icon="hiw2.png" title="Tested to Manufacturer Specifications" txt='Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent.' />
        <HiwCad icon="hiw3.png" title="What you see is what you get!" txt='Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)' />
        <HiwCad icon="hiw4.png" title="Fast Local Delivery and Installation" txt='Our Austin local appliance delivery Pros are fast and efficient. We offer delivery and installation services to Austin, Tx and surrounding areas.' />
        <HiwCad icon="hiw5.png" title="1 Year Neu Shield Warranty" txt='All appliances include a 1 year Neu Shield Warranty. We store your information so no need to save the receipt or the hassle of registering your appliance.' />
        <HiwCad icon="hiw6.png" title="1 Year Neu Shield Warranty" txt="Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!" />
      </div>
      {/* <div className='flex xl:flex-row lg:flex-row md:flex-col lg:items-stretch md:items-center flex-col 2xl:space-x-10 xl:space-x-10 lg:space-x-7 px-[8.33%] justify-evenly pb-10 w-full' >
    </div>  */}
    </div>
  )
}

export default HiwSection