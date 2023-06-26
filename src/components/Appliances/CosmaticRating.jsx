import React from 'react'
import ProductCardSlider from '../ProductCardSlider'

const CosmaticRating = () => {
    return (
        <div className='bg-b8 py-10 lg:py-14 xl:py-20' >
            {/* Heading Start  */}
            <div className='w-full max-w-1680px 3xl:mx-auto px-4 md:px-10 lg:px-20 2xl:px-120px h-auto'>
                <div className='flex flex-col space-y-5 items-center px-4 md:px-10 lg:px-0' >
                    <h4 className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-start text-center' >Cosmetic Rating</h4>
                    <p className='text-center font-semibold leading-normal lg:w-8/12 w-full text-sm xl:text-base lg:sm mt-2' >
                        We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                    </p>
                </div>
                {/* Heading End */}

                {/* Products Card Start */}
                <ProductCardSlider />
            </div>
            {/* Products Card End */}

        </div>
    )
}

export default CosmaticRating