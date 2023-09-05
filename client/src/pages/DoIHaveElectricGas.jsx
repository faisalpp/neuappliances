import React from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SectionCard from '../components/ElectricityAndGas/SectionCard';
import SectionCard2 from '../components/ElectricityAndGas/SectionCard2';
import SectionCard3 from '../components/ElectricityAndGas/SectionCard3';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import SatisfiedSection from '../components/SatisfiedSection';
import NewsLetterSection from '../components/NewsLetterSection';

const DoIHaveElectricGas = () => {
    return (
        <MainLayout>
            <div className='py-10 lg:py-16 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                {/* Bread Crumbs Start */}
                <div className='flex items-center' >
                    <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Do i have electric or gas?</h5>
                </div>
                <div>
                    <h1 className='text-b18 font-bold text-40px mb-6'>Do I have Electric Or Gas?</h1>
                    <p className='max-w-[1135px] w-full text-b18 leading-6'>
                        Use this guide below to learn about different appliance connections, outlets and more. Understanding your household appliance connections is critical to know what appliance to shop for!
                    </p>
                </div>
                {/* Bread Crumbs End */}
            </div>
            <div className='w-full 3xl:max-w-1680px pb-10 lg:pb-20 px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto grid grid-cols-1 gap-10'>
                <SectionCard title="Gas Range Connections" />
                <SectionCard title="Gas Dryer Connections" />
                <SectionCard2 title="Electric Range Connections" description="Electric 240V Range Cords are interchangeable, at the appliance, between 3 prong cords and 4 prong cords. One of these two outlets must be present for a standard Electric 240v Range to be compatible." image1="elctric-range3.webp" image2="elctric-range4.webp" />
                <SectionCard2 title="Electric Dryer Connections" description="Electric 240V Dryer Cords are interchangeable, at the appliance, between 3 prong cords and 4 prong cords. One of these two outlets must be present for a standard Electric 240v Dryer to be compatible." image1="elctric-drayer3.webp" image2="elctric-drayer4.webp" />
                <SectionCard3 />
            </div>
            {/* Shop Austin Section */}
            <ShopAustinSection />

            {/* Reviews Section */}
            <SatisfiedSection title="Testimonials" dots={true} />
            {/* End  */}
            <NewsLetterSection backimage="Newsletter.webp" />
            {/* End Tabs*/}
        </MainLayout>
    )
}

export default DoIHaveElectricGas