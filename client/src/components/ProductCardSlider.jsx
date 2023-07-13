import React from 'react'
import ProductSliderCard from './Appliances/ProductSliderCard'

const ProductCardSlider = ({ section }) => {
    return (
        <div div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14" >
            {section.sectionItemsId.map((item, index) => <ProductSliderCard key={index} title='Cosmetic Rating' product={item} />)}
        </div>
    )
}

export default ProductCardSlider