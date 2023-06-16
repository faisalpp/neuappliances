import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import OurVision from '../components/OurStory/OurVision';
import { RiArrowDropRightLine } from 'react-icons/ri';
import AboutCeo from '../components/OurStory/AboutCeo';

const OurStory = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >FAQs</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Story" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />
                </div>

                <OurVision image="ourvision.png" about="OUR VISION" title="Quis vitae pellentesque enim, nunc hendrerit enim metus ut magna. Pulvinar." description="Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit." />

                <AboutCeo />

                <OurVision order="order-2" image="ourvalue.png" about="OUR VALUE" title="Libero blandit fames tortor porta nunc, imperdiet donec. Semper sit pulvinar sed." description="Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit." />

            </MainLayout>
        </>
    )
}

export default OurStory