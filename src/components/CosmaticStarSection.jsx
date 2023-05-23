import React from 'react'
import ProductCard from '../components/ProductCard'

const CosmaticStarSection = () => {
  return (
    <div className='flex flex-col bg-b8 px-12 py-12' >
    {/* Heading Start  */}
    <div className='flex flex-col items-center' >
      <h4 className='font-semibold text-2xl lg:text-start text-center' >Our Cosmetic Star Rating System</h4>
      <p className='text-center text-lg mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
    </div>
   {/* Heading End */}

   {/* Products Card Start */}
    <div className="lg:grid grid-flow-col-dense lg:justify-center flex flex-col items-center lg:space-x-10 lg:space-y-0 space-y-5 mt-8 h-auto" >
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>
   {/* Products Card End */}
  
  </div> 
  )
}

export default CosmaticStarSection