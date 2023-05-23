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
        <img src="amana.png" />
        <img src="maytag.png" />
        <img src="frigdaire.png" />
        <img src="haier.png" />
        <img src="hisense.png" />
        <img src="kenmore.png" />
        <img src="lg.png" />
        <img src="samsung.png" />
        <img src="whirlpool.png" />
        <img src="midea.png" />
     </Marquee>
        </div>
       </div>
      {/* Brands Logo Slider Auto End */}
     </>
  )
}

export default BrandsSlider