import React from 'react'
import ProductSliderCard from './Appliances/ProductSliderCard'

const ProductCardSlider = () => {
    return (
        <div div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14" >
            <ProductSliderCard title='Cosmetic Rating' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
            <ProductSliderCard title='Cosmetic Rating' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
            <ProductSliderCard title='Cosmetic Rating' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
        </div>
    )
}

export default ProductCardSlider