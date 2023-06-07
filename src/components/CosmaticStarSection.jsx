import React from 'react'
import ProductCard from '../components/ProductCard'

const CosmaticStarSection = () => {
  return (
    <div className='flex flex-col bg-b8 py-14' >
    {/* Heading Start  */}
    <div className='flex flex-col space-y-5 mt-5 items-center' >
      <h4 className='font-bold xl:text-[32px] lg:text-2xl lg:text-start text-xl text-center' >Our Cosmetic Star Rating System</h4>
      <p className='text-center font-medium lg:w-8/12 xl:w-7/12 w-full text-sm xl:text-[20px] lg:sm mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
    </div>
   {/* Heading End */}

   {/* Products Card Start */}
    <div className="xl:grid lg:grid grid-flow-col xl:justify-center flex flex-col items-center px-[8.33%] xl:space-x-3 lg:space-y-0 space-y-5 mt-14 h-auto" >
     <ProductCard stars={3} type={1} discount={1} />
     <ProductCard stars={4} type={2} discount={2} />
     <ProductCard stars={5} type={3} discount={3} />
    </div>
   {/* Products Card End */}
  
  </div> 
  )
}

export default CosmaticStarSection