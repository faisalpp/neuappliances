import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SatisfiedSection from '../components/SatisfiedSection'
import MassiveAppliance from '../components/OurStory/MassiveAppliance';
import NewsLetterSection from '../components/NewsLetterSection';

const OurShowroom = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Showroom</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Showroom" description="Take a 3D interactive tour of our Appliance Outlet Showroom here in Austin, TX!" />

                    <p className='w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5'>
                        Our Showroom receives new appliances daily and we update our Virtual Tour every Tuesday so make sure to check back for updates!
                    </p>
                </div>

                {/* Video Section */}
                <div className='w-full 3xl:max-w-1680px mx-auto'>
                    <iframe className='w-full h-[700px] 3xl:h-[920px]' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <MassiveAppliance sliderstyle="sm:mx-2 3xl:mx-5" />
                {/* Shop Austin Section */}
                <ShopAustinSection />
                {/* Client Reviews */}

                <SatisfiedSection title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />

            </MainLayout>
        </>
    )
}

export default OurShowroom