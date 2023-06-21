import React from 'react'
import MainLayout from '../layout/MainLayout'
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import GetScoop from '../components/AppliancesTips/GetScoop';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection';
import { RiArrowDropRightLine } from 'react-icons/ri';

const HelpfulApliancesTips = () => {
    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-[#C3C2C2]' /><h5 className='text-xs text-b17' >Helpful Appliance Tips</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Helpful Appliance Tips" description="Get the inside scoop! We are a local small business working our butts off to improve the way people can buy appliances. We have lots of experience in the appliance world and we would love to share some tips with you we have accumulated over the years:" />
                </div>

                <GetScoop />

                {/* Shop Austin Section */}
                <ShopAustinSection />

                <SatisfiedSection title="Testimonials" />

                <NewsLetterSection backimage="Newsletter.png" />
            </MainLayout>
        </>
    )
}

export default HelpfulApliancesTips