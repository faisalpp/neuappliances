import React from 'react'
import ProductSliderCard from '../../components/Appliances/ProductSliderCard'

const CosmaticStarSection = () => {
    return (
        <div className='bg-b8 py-10 lg:py-14 xl:py-20' >
            {/* Heading Start  */}
            <div className='w-full max-w-1680px 3xl:mx-auto px-4 md:px-10 lg:px-20 2xl:px-120px h-auto'>
                <div className='flex flex-col space-y-5 items-center px-4 md:px-10 lg:px-0' >
                    <h4 className='font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-start text-center' >Cosmetic Rating</h4>
                    <p className='text-center font-semibold leading-normal lg:w-8/12 w-full text-sm xl:text-[20px] lg:sm mt-2' >
                        We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                    </p>
                </div>
                {/* Heading End */}

                {/* Products Card Start */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[10px] xl:mt-14" >
                    <ProductSliderCard title='Cosmetic Damage' codmetics='Moderate' dicount='Massive' stars={3} type={1} discount={1} />
                    <ProductSliderCard title='Cosmetic Damage' codmetics='Minor' dicount='Huge' stars={4} type={2} discount={2} />
                    <ProductSliderCard title='Cosmetic Damage' codmetics='Very Minor-None' dicount='Great' stars={5} type={3} discount={3} />
                </div>
            </div>
            {/* Products Card End */}

        </div>
    )
}

export default CosmaticStarSection