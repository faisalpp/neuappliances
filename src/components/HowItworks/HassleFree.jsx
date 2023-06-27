import React from 'react'
import WhatWeShallCard from './WhatWeSellCard'
import SatisfiedSection from '../SatisfiedSection'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HowItWorks from '../../pages/HowItWorks/HowItWorks'

const HassleFree = () => {
    return (
        <HowItWorks>
            <div className='flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 2xl:p-10 2xl:!pt-[70px]' >
                <div className='grid grid-cols-1 gap-60px'>
                    <div className='[&>*:nth-child(even)>div:first-child]:order-2 grid grid-cols-1 gap-60px'>
                        <WhatWeShallCard image="image1.png" title="Scratch and Dent Appliances" description1="Our scratch and dent appliances typically have cosmetic imperfections or blemishes. These imperfections can include scratches, dents, dings, scuffs or other marks that occurred during shipping, handling, or even during the manufacturing process." description2="Our Appliance Outlet sells scratch and dent appliances at a huge discounted price compared to the new-in-box versions, making them an attractive option for bargain hunters. However, it is important to note that while these appliances may have minor exterior blemishes, they still function just as well as their undamaged counterparts." />
                        <WhatWeShallCard image="image2.png" title="Floor Models and Display Appliances" description1="Our Appliance Outlet sells floor model and display model appliances that have been displayed in a showroom or retail store for customers to view and test. They are often used as demonstration models to showcase the features and functions of the appliance to potential buyers." description2="Floor model appliances are typically brand new and unused, although they may have been used for demonstration purposes only. We liquidate these appliances at deep discounts  to make room for newer models or to clear out inventory." />
                    </div>

                    <SatisfiedSection title="We Stock A Wide Variety Of Discount Appliances" SectionStyle="!p-0 !max-w-full" />

                    <div className='[&>*:nth-child(even)>div:first-child]:order-2 grid grid-cols-1 gap-60px'>
                        <WhatWeShallCard image="image3.png" title="Open Box Appliances" description1="Open box appliances are a great way to save money. Open box appliances have had their packaging opened for any reason but typically include appliances that were purchased and returned by a customer. These appliances are often in like-new Cosmetic Rating, with little to no signs of wear and tear, and may even still be in their original packaging. Neu Appliance Outlet liquidates open box appliances at deep discounts compared to their original price." />
                        <WhatWeShallCard image="image4.png" title="Overstock Appliance" description1="Overstock appliances are brand new appliances that were purchased by a retailer or distributor in excess of their anticipated demand or were not sold during a specific period of time. Neu Appliance Outlet liquidates overstock appliances at huge discounts compared to their original price. This can be a good option for bargain hunters looking to save money on a brand new appliance." />
                    </div>

                    <SatisfiedSection title="Our Customers Love Our Discounted Appliances" SectionStyle="!p-0 !max-w-full" />

                    <div className='flex justify-center'>
                        <button className='flex gap-2 items-center border border-b3 rounded-lg px-6 py-3 text-b3 font-semibold'>Shop our Best Deals <AiOutlineArrowRight className='text-b3' /></button>
                    </div>
                </div>
            </div>
        </HowItWorks>
    )
}

export default HassleFree