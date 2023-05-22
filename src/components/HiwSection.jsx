import React from 'react'

const HiwSection = () => {
  return (
    <div className='flex flex-col items-center bg-b8 space-y-8 py-10' >
       <h4 className='font-bold text-3xl' >How it Works</h4>
       
    <div className='grid grid-cols-12 grid-rows-2 gap-y-10 pl-10 ' >
     
     {/* Card 1 Start */}
     <div className='col-start-1 col-end-4  flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw1.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >Cosmetic Rating</h5>
       <p className='text-sm px-5 text-center' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!</p>
      </div>
     </div>
     {/* Card 1 End */}

     {/* Card 2 Start */}
     <div className='col-start-5 col-end-8  flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw2.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >Tested to Manufacturer Specifications</h5>
       <p className='text-sm px-5 text-center' >Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."</p>
      </div>
     </div>
     {/* Card 2 End */}

     {/* Card 3 Start */}
     <div className='col-start-9 col-end-12   flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw3.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >What you see is what you get!</h5>
       <p className='text-sm px-5 text-center' >Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)</p>
      </div>
     </div>
     {/* Card 3 End */}

     {/* Card 4 Start */}
     <div className='row-start-2 col-start-1 col-end-4 flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw4.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >Fast Local Delivery and Installation</h5>
       <p className='text-sm px-5 text-center' >Our Austin local appliance delivery Pros are fast and efficient. We offer delivery and installation services to Austin, Tx and surrounding areas.</p>
      </div>
     </div>
     {/* Card 4 End */}

     {/* Card 5 Start */}
     <div className='row-start-2 col-start-5 col-end-8 flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw5.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >1 Year Neu Shield Warranty</h5>
       <p className='text-sm px-5 text-center' >All appliances include a 1 year Neu Shield Warranty. We store your information so no need to save the receipt or the hassle of registering your appliance.</p>
      </div>
     </div>
     {/* Card 5 End */}

     {/* Card 6 Start */}
     <div className='row-start-2 col-start-9 col-end-12 flex flex-col space-y-5 items-center rounded-xl justify-center w-[350px] h-[320px] bg-white' >
      <img src="hiw6.png" className='w-16' />
      <div className='flex flex-col space-y-5' >
       <h5 className='font-semibold text-xl text-center w-38' >Free Curbside Returns</h5>
       <p className='text-sm px-5 text-center' >Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!</p>
      </div>
     </div>
     {/* Card 6 End */}
       
    </div>
   </div>
  )
}

export default HiwSection