import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ProductCardSlider from '../ProductCardSlider'

const Ratings = () => {
    return (
        <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
            <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Cosmetic Rating</h4>
            <div className='grid grid-cols-1 gap-60px'>
                <p className='mt-4 max-w-[896px] w-full text-b18 font-bold mx-auto text-center'>
                    We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                </p>
                <ProductCardSlider />

                <SatisfiedSection title="We Stock A Wide Variety Of Discount Appliances" SectionStyle="!p-0 !max-w-full" />

                <div className='flex justify-center'>
                    <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Shop our Best Deals <AiOutlineArrowRight className='text-b3' /></button>
                </div>
            </div>
        </div>
    )
}

export default Ratings