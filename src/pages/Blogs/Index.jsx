import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ApplianceDetail from '../../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import NewsLetterSection from '../../components/NewsLetterSection';
import SatisfiedSection from '../../components/SatisfiedSection';
import { Link } from 'react-router-dom';
import RecentStories from '../../components/Blogs/RecentStories';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Index = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Blog</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Appliance Industry Blog" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />

                    <Link to="" className='inline-flex text-xs font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>See All Stories <span><AiOutlineArrowDown className='text-base' /></span></Link>
                </div>

                {/* Recent Stories */}
                <RecentStories />

                <SatisfiedSection title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />
            </MainLayout>
        </>
    )
}

export default Index