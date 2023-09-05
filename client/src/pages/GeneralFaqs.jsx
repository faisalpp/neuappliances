import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import Faqs from '../components/GeneralFaqs/Faqs';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection'
import { RiArrowDropRightLine } from 'react-icons/ri';
import { getSingleVideoMedia } from '../api/frontEnd'

const GeneralFaqs = () => {

  const [video, setVideo] = useState([])

  useEffect(() => {
    const GetSingleVideoMedia = async () => {
      const data = { section: "faq's-page-video" }
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
        <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          {/* Bread Crumbs Start */}
          <div className='flex items-center' >
            <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-[#C3C2C2]' /><h5 className='text-xs text-b17' >FAQs</h5>
          </div>
          {/* Bread Crumbs End */}
          <ApplianceDetail descStyle="3xl:w-[817px]" title="Frequently Asked Questions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />
        </div>
        <div className='w-full 3xl:max-w-1680px mx-auto'>
          {video && video.type === 'iframe' ? <iframe className='w-full h-[250px] md:h-[700px] 2xl:h-[920px]' src={video.url} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : null}
          {video && video.type !== 'iframe' ? <video controls autoPlay className='w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]' src={video.url} /> : null}
        </div>

        {/* Faqs Tabs */}
        <Faqs />
        {/* Shop Austin Section */}
        <ShopAustinSection />

        {/* Reviews Section */}
        <SatisfiedSection apiSectionName="faq-page-review" title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />
        {/* End  */}
        <NewsLetterSection backimage="Newsletter.webp" />
        {/* End Tabs*/}
      </MainLayout>
    </>
  )
}

export default GeneralFaqs