import React, { useEffect, useState } from 'react';
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
import { getSingleVideoMedia } from '../api/frontEnd'

const OurCompanies = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        const GetSingleVideoMedia = async () => {
            const data = { section: "our-compnies-page-video" }
            const res = await getSingleVideoMedia(data);
            console.log(res)
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
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Companies</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Companies" description="Dedicated to providing innovative solutions for the appliance market. Our focus on customer service and out of the box thinking have allowed us to provide our community with savings on all things appliances." />

                    <p className='w-full md:w-2/3 3xl:w-[1135px] maxmd:text-center text-b16 mt-5'>
                        Our Appliance Outlets, Appliance Parts Store, and Appliance Wholesale Program each offer revolutionary solutions to problems within the Appliance Industry.
                    </p>


                    <a href="#outlets-parts" className='inline-flex text-xs justify-center maxsm:w-full font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>Learn More <span><AiOutlineArrowDown className='text-base' /></span></a>

                </div>


                {/* Cards */}
                <div id='outlets-parts' className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-10 3xl:gap-6 py-16 xl:py-20 2xl:py-120px maincontainer'>

                    <ApplianceOutlet />

                    <ApplianceParts />

                    <ApplianceWholeSale />

                </div>

                {/* Video Section */}
                <div className='w-full 3xl:max-w-1680px mx-auto'>
                    {video && video.type === 'iframe' ? <iframe className='w-full h-[250px] md:h-[700px] 2xl:h-[920px]' src={video.url} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : null}
                    {video && video.type !== 'iframe' ? <video controls autoPlay className='w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]' src={video.url} /> : null}
                </div>

                {/* Shop Austin Section */}
                <ShopAustinSection />
                {/* Client Reviews */}

                <SatisfiedSection apiSectionName="our-companies-page-review" title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.webp" />

            </MainLayout>
        </>
    )
}

export default OurCompanies