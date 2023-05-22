import React from 'react'
import Marquee from "react-fast-marquee";

const BrandsSlider = () => {
  return (
    <>
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
     </>
  )
}

export default BrandsSlider