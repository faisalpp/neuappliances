import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SatisfiedSection from '../components/SatisfiedSection'
import RecentlyAddedSection from '../components/Appliances/RecentlyAddedSection';
import ReviewSection from '../components/ReviewSection';
import BackHome from '../components/BackHome';

const Testimonials = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <BackHome className="md:hidden mb-10" />

                    <div className='hidden md:flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Testimonials</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Testimonials" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt " />
                </div>

                <SatisfiedSection apiSectionName="our-showroom-page-review" SectionStyle="!pt-0 !px-0 !pb-16" title="Join Thousands of Satisfied Customers." dots={false} />
                <SatisfiedSection apiSectionName="our-showroom-page-review" SectionStyle="!pt-0" dots={true} />

                <div className='bg-b3 pt-10 lg:pt-20 lg:pb-10 testimonialreviews'>
                    <ReviewSection buttonactive={true} />
                </div>

                <div className='bg-b3/[8%]'>
                    <RecentlyAddedSection title="Shop Appliances On Sale" active={true} buttonname="Shop All Appliances On Sale" />
                </div>

            </MainLayout>
        </>
    )
}

export default Testimonials