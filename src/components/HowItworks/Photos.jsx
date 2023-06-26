import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Photos = () => {
    return (
        <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
            <h4 className='xl:text-4xl text-xl font-bold text-center mb-4' >Shop With Confidence!</h4>
            <div className='grid grid-cols-1 gap-60px'>
                <p className='mt-4 max-w-[896px] w-full text-b18 mx-auto text-center'>
                    Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)
                </p>
                <div className='[&>*:nth-child(even)>div:first-child]:order-2 grid grid-cols-1 gap-60px'>
                    <WhatWeShallCard image="image1.png" title="Each Appliance Get Their Own Photo + Video" description1="Each appliance gets their own set of photos and videos of the actual item. So you know exactly where the dent or ding is (if any!). " />
                    <WhatWeShallCard image="image2.png" title="State Of The Art Photo Booth" description1="Our Industry 1st photo booth was custom built to bring visual transparency to our customers. Our photo room includes a 70’ wide custom made automatic turntable so each appliance can be viewed 360° from every angle." />
                    <WhatWeShallCard image="image2.png" title="High Definition Pictures and Videos" description1="Our Photographers use professional photography equipment to ensure our appliances have the highest definition pictures and videos available." />
                </div>

                <SatisfiedSection title="Our Customers Love Being Able to Shop For Scratch and Dent 
Appliances From Home" SectionStyle="!p-0 !max-w-full" />

                <div className='flex justify-center'>
                    <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Browse our Scratch and Dent Discounts <AiOutlineArrowRight className='text-b3' /></button>
                </div>
            </div>
        </div>
    )
}

export default Photos