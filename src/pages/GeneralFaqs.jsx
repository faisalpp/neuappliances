import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import Faqs from '../components/GeneralFaqs/Faqs';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection'
import { RiArrowDropRightLine } from 'react-icons/ri';

const GeneralFaqs = () => {

  return (
    <>
      <MainLayout>
        <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          {/* Bread Crumbs Start */}
          <div className='flex items-center' >
            <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >FAQs</h5>
          </div>
          {/* Bread Crumbs End */}
          <ApplianceDetail title="Frequently Asked Questions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />
        </div>
        <div className='w-full max-w-1680px mx-auto'>
          <iframe className='w-full h-[700px]' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        {/* Faqs Tabs */}
        <Faqs />
        {/* Shop Austin Section */}
        <ShopAustinSection />

        {/* Reviews Section */}
        <SatisfiedSection title="Our Customers LOVE our Scratch and Dent Discounts!" dots={true} />
        {/* End  */}
        <NewsLetterSection />
        {/* End Tabs*/}
      </MainLayout>
    </>
  )
}

export default GeneralFaqs