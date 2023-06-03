import React from 'react'

const HiwSection = () => {
  return (
    <div className='flex flex-col items-center bg-b8 space-y-14 py-10' >
       <h4 className='font-bold xl:text-[36px] text-3xl' >How it Works</h4>
       
    <div className='lg:grid grid-cols-12 grid-rows-2 flex flex-col justify-center items-center gap-y-10 pb-10' >
     
     {/* Card 1 Start */}
     <div className='col-start-1 col-end-4  flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] lg:w-[350px] lg:h-[320px] xl:h-[384px] w-11/12 h-60 bg-white xl:mx-12 lg:ml-16' >
      <img src="hiw1.png" className='w-16' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center ' >Cosmetic Rating</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium text-center' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!</p>
      </div>
     </div>
     {/* Card 1 End */}
          {/* Card 2 Start */}
          <div className='col-start-5 col-end-8  flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] xl:h-[384px] lg:w-[350px] w-11/12 h-72 lg:h-[320px] bg-white xl:mx-12 lg:mx-8' >
      <img src="hiw2.png" className='w-16 mt-10' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center' >Tested to Manufacturer Specifications</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium text-center' >Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."</p>
      </div>
     </div>
     {/* Card 2 End */}

     {/* Card 3 Start */}
     <div className='col-start-9 col-end-12   flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] xl:h-[384px] lg:w-[350px] lg:h-[320px] w-11/12 h-60 bg-white xl:mx-12 lg:mr-6' >
      <img src="hiw3.png" className='w-16' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center' >What you see is what you get!</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium text-center' >Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)</p>
      </div>
     </div>
     {/* Card 3 End */}

     {/* Card 4 Start */}
     <div className='row-start-2 col-start-1 col-end-4 flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] xl:h-[384px] lg:w-[350px] lg:h-[320px] w-11/12 h-60 bg-white xl:mx-12 lg:ml-16' >
      <img src="hiw4.png" className='w-16' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center w-full' >Fast Local Delivery and Installation</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium text-center' >Our Austin local appliance delivery Pros are fast and efficient. We offer delivery and installation services to Austin, Tx and surrounding areas.</p>
      </div>
     </div>
     {/* Card 4 End */}

     {/* Card 5 Start */}
     <div className='row-start-2 col-start-5 col-end-8 flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] xl:h-[384px] lg:w-[350px] lg:h-[320px] w-11/12 h-60 bg-white xl:mx-12 lg:ml-7' >
      <img src="hiw5.png" className='w-16' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center' >1 Year Neu Shield Warranty</h5>
       <p className='lg:text-sm text-xs xl:text-[16px] font-medium  text-center' >All appliances include a 1 year Neu Shield Warranty. We store your information so no need to save the receipt or the hassle of registering your appliance.</p>
      </div>
     </div>
     {/* Card 5 End */}

     {/* Card 6 Start */}
     <div className='row-start-2 col-start-9 col-end-12 flex flex-col space-y-5 items-center rounded-xl justify-center shadow-lg xl:w-[440px] xl:h-[384px]  lg:w-[350px] lg:h-[320px] w-11/12 h-60 bg-white xl:mx-12 lg:mr-5' >
      <img src="hiw6.png" className='w-16' />
      <div className='flex flex-col space-y-5 xl:px-8 lg:px-5' >
       <h5 className='font-bold text-xl xl:text-2xl text-center' >Free Curbside Returns</h5>
       <p className='lg:text-sm xl:text-[16px] text-xs font-medium text-center' >Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!</p>
      </div>
     </div>
     {/* Card 6 End */}

       
    </div>
   </div>
  )
}

export default HiwSection