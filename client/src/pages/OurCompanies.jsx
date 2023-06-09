import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SatisfiedSection from '../components/SatisfiedSection'
import NewsLetterSection from '../components/NewsLetterSection';
import ApplianceParts from '../components/OurCompanies/ApplianceParts';
import ApplianceOutlet from '../components/OurCompanies/ApplianceOutlet';
import ApplianceWholeSale from '../components/OurCompanies/ApplianceWholeSale';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';

const OurCompanies = () => {

    return (
        <>
            <MainLayout>
                <div className='pt-10 lg:pt-16 xl:pt-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Companies</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Companies" description="Dedicated to providing innovative solutions for the appliance market. Our focus on customer service and out of the box thinking have allowed us to provide our community with savings on all things appliances." />

                    <p className='w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5'>
                        Our Appliance Outlets, Appliance Parts Store, and Appliance Wholesale Program each offer revolutionary solutions to problems within the Appliance Industry.
                    </p>


                    <Link to="" className='inline-flex text-xs font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>Learn More <span><AiOutlineArrowDown className='text-base' /></span></Link>

                </div>


                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 3xl:gap-6 py-10 lg:py-16 xl:py-20 2xl:py-120px w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>

                    <ApplianceOutlet />

                    <ApplianceParts />

                    <ApplianceWholeSale />

                </div>

                {/* Video Section */}
                <div className='w-full 3xl:max-w-1680px mx-auto'>
                    <iframe className='w-full h-[700px] 3xl:h-[920px]' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* Shop Austin Section */}
                <ShopAustinSection />
                {/* Client Reviews */}

                <SatisfiedSection title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />

            </MainLayout>
        </>
    )
}

export default OurCompanies