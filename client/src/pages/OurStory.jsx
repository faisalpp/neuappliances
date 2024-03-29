import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import OurVision from '../components/OurStory/OurVision';
import { RiArrowDropRightLine } from 'react-icons/ri';
import AboutCeo from '../components/OurStory/AboutCeo';
import OurStorySection from '../components/OurStory/OurStorySection';
import SatisfiedSection from '../components/SatisfiedSection'
import MeetTeam from '../components/OurStory/MeetTeam';
import MassiveAppliance from '../components/OurStory/MassiveAppliance';
import NewsLetterSection from '../components/NewsLetterSection';
import { getSingleVideoMedia } from '../api/frontEnd';
import Iframe from '../components/Reusable/Ifram'

const OurStory = () => {

    const [video, setVideo] = useState([])

    useEffect(() => {
        const GetSingleVideoMedia = async () => {
            const data = { section: "our-story-page-video" }
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
                <div className='pt-10 lg:pt-16 xl:pt-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Story</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Story" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />
                </div>

                <OurVision BoxStyle="-left-10" image="ourvision.webp" about="OUR VISION" title="Quis vitae pellentesque enim, nunc hendrerit enim metus ut magna. Pulvinar." description="Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit." />

                <AboutCeo />

                <OurVision BoxStyle="-left-8" order="lg:order-2" image="ourvalue.webp" about="OUR VALUE" title="Libero blandit fames tortor porta nunc, imperdiet donec. Semper sit pulvinar sed." description="Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit." />

                <OurStorySection />
                {/* Video Section */}
                <div className='w-full 3xl:max-w-1680px mx-auto'>
                  {video && video.type === 'iframe' ? <Iframe icon="text-8xl" thumbnail={video.thumbnail} thumbRounded="false" divId={`our-story-section-${video.type}`} frameId="our-story-section" style='w-full h-[250px] md:h-[700px] 2xl:h-[920px]' src={video.url} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" /> : null}
                  {video && video.type !== 'iframe' ? <video controls autoPlay className='w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]' src={video.url} /> : null}
                </div>

                {/* Team */}
                <MeetTeam />

                <MassiveAppliance title="Shop Massive Discount Appliances" sliderstyle="sm:mx-2 3xl:mx-5" />

                {/* Client Reviews */}

                <SatisfiedSection apiSectionName="our-story-page-review" title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.webp" />

            </MainLayout>
        </>
    )
}

export default OurStory