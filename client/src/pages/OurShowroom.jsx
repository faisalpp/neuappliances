import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SatisfiedSection from '../components/SatisfiedSection'
import MassiveAppliance from '../components/OurStory/MassiveAppliance';
import NewsLetterSection from '../components/NewsLetterSection';
import { getSingleVideoMedia } from '../api/frontEnd'
import Iframe from '../components/Reusable/Ifram'

const OurShowroom = () => {

    const [video, setVideo] = useState([])

    useEffect(() => {
        const GetSingleVideoMedia = async () => {
            const data = { section: "our-showroom-page-video" }
            const res = await getSingleVideoMedia(data);
            
            if (res.status === 200) {
                setVideo(res.data.media[0])
            }
        }
        GetSingleVideoMedia()
    }, []);

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Showroom</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Showroom" description="Take a 3D interactive tour of our Appliance Outlet Showroom here in Austin, TX!" />

                    <p className='w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5 maxmd:text-center'>
                        Our Showroom receives new appliances daily and we update our Virtual Tour every Tuesday so make sure to check back for updates!
                    </p>
                </div>

                {/* Video Section */}
                <div className='w-full 3xl:max-w-1680px mx-auto'>
          {video && video.type === 'iframe' ? <Iframe icon="text-8xl" thumbnail={video.thumbnail} thumbRounded="false" divId={`our-show-room-${video.type}`} frameId="showroom-section-video" style='w-full h-[250px] md:h-[700px] 2xl:h-[920px]' src={video.url} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" /> : null}
          {video && video.type !== 'iframe' ? <video controls autoPlay className='w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]' src={video.url} /> : null}
        </div>

                <MassiveAppliance title="Shop Massive Discount Appliances" sliderstyle="mx-2 3xl:mx-5" />
                {/* Shop Austin Section */}
                <ShopAustinSection />
                {/* Client Reviews */}

                <SatisfiedSection apiSectionName="our-showroom-page-review" title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.webp" />

            </MainLayout>
        </>
    )
}

export default OurShowroom