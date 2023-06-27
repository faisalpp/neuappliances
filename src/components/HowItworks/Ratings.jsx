import React from 'react'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ProductCardSlider from '../ProductCardSlider'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'
import CosmaticStarSection from '../CosmaticStarSection'
import ProductCard from '../ProductCard'

const Ratings = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 sm:px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Cosmetic Rating</h4>
                <div className='grid grid-cols-1 gap-60px'>
                    <p className='mt-4 max-w-[896px] w-full text-b18 font-bold mx-auto text-center'>
                        We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14 w-full mt-14 h-auto" >
                        <ProductCard title='Moderate Cosmetic Damage' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
                        <ProductCard title='Moderate Cosmetic Damage' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
                        <ProductCard title='Moderate Cosmetic Damage' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
                    </div>

                    <SatisfiedSection title="We Stock A Wide Variety Of Discount Appliances" SectionStyle="!p-0 !max-w-full" />

                    <div className='flex justify-center'>
                        <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Shop our Best Deals <AiOutlineArrowRight className='text-b3' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default Ratings