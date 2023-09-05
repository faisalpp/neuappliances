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
                  <img alt="amana" src="amana.webp" />
                  <img alt="maytag" src="maytag.webp" />
                  <img alt="frigdaire" src="frigdaire.webp" />
                  <img alt="haier" src="haier.webp" />
                  <img alt="hisense" src="hisense.webp" />
                  <img alt="kenmore" src="kenmore.webp" />
                  <img alt="lg" src="lg.webp" />
                  <img alt="samsung" src="samsung.webp" />
                  <img alt="whirlpool" src="whirlpool.webp" />
                  <img alt="midea" src="midea.webp" />
               </Marquee>
            </div>
         </div>
         {/* Brands Logo Slider Auto End */}
      </>
   )
}

export default BrandsSlider