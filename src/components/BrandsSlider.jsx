import React from 'react'
import Marquee from "react-fast-marquee";

const BrandsSlider = () => {
  return (
    <>
         {/* Brands Logo Slider Auto Start */}
    <div className='bg-white py-5' >
        <h4 className='text-center text-sm' >BRANDS WE SELL</h4>
        <div className='relative mt-2' >
     <Marquee velocity={12}>
        <img alt="amana" src="amana.png" />
        <img alt="maytag" src="maytag.png" />
        <img alt="frigdaire" src="frigdaire.png" />
        <img alt="haier" src="haier.png" />
        <img alt="hisense" src="hisense.png" />
        <img alt="kenmore" src="kenmore.png" />
        <img alt="lg" src="lg.png" />
        <img alt="samsung" src="samsung.png" />
        <img alt="whirlpool" src="whirlpool.png" />
        <img alt="midea" src="midea.png" />
     </Marquee>
        </div>
       </div>
      {/* Brands Logo Slider Auto End */}
     </>
  )
}

export default BrandsSlider