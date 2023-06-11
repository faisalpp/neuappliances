import React from 'react'
import ProductCard from '../components/ProductCard'

const CosmaticStarSection = () => {
  return (
    <div className='flex flex-col bg-b8 pt-14' >
      {/* Heading Start  */}
      <div className='flex flex-col space-y-5 mt-5 items-center px-4 md:px-10 lg:px-0' >
        <h4 className='font-bold xl:text-[32px] lg:text-2xl lg:text-start text-xl text-center' >Our Cosmetic Star Rating System</h4>
        <p className='text-center font-semibold leading-normal lg:w-8/12 2xl:w-7/12 w-full text-sm xl:text-[20px] lg:sm mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
      </div>
      {/* Heading End */}

      {/* Products Card Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14 w-full max-w-1680px 3xl:mx-auto px-4 md:px-10 lg:px-20 2xl:px-120px mt-14 h-auto" >
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
        <ProductCard title='Moderate Cosmetic Damage' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
      </div>
      {/* Products Card End */}

    </div>
  )
}

export default CosmaticStarSection