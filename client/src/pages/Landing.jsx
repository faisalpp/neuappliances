import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/DeskComp/Footer'
import ScrollToTop from '../components/DeskComp/ScrollToTop'
import CosmaticStarSection from '../components/CosmaticStarSection';
import ApplianceSection from '../components/ApplianceSection';
import ReviewSlider from '../components/ReviewSlider';
import CosmaticSlider from '../components/CosmaticSlider';
import HeroSection from '../components/Landing/HeroSection';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FeatureCard from '../components/Landing/FeatureCard';

const Home = () => {
  const clientreviews = [
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 3,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 4,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 1,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 2,
    },
    {
      content: 'Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...',
      author: 'John Doe',
      review: 2,
    }
  ];
  return (
    <>
      <HeroSection />
      <ScrollToTop />
      <div className='py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
        <ReviewSlider color="#F5F5F5" clientreviews={clientreviews} icon="google.png" />
      </div>
      <div className='py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
        <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-32px font-bold text-center mb-10 md:mb-60px'>Discover Our 3  Stars  Condition Appliances</h2>
        <CosmaticSlider />
        <div className='text-center mt-10 md:mt-60px'>
          <Link to="" className='inline-flex gap-1 items-center justify-center rounded-lg border border-b3 text-b3 py-3 px-4 font-semibold'>View Mpre <AiOutlineArrowRight className='text-lg' /></Link>
        </div>
      </div>
      <CosmaticStarSection />
      <ApplianceSection />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 lg:py-14 xl:py-20 2xl:py-120px w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
        <FeatureCard customStyle="bg-[rgba(255,155,62,0.08)]" iconColor="bg-b7" icon="shield.png" title="Neu Shield Warranty" description="Facilisis sodales sollicitudin mi porttitor tellus non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. " />
        <FeatureCard icon="empty-wallet-tick.png" title="Financing Option Available" description="Facilisis sodales sollicitudin mi porttitor tellus non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. " />
      </div>
      <div className='py-10 lg:py-14 xl:py-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
        <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-32px font-bold text-center mb-10 md:mb-60px'>Discover Our 4 & 5 Stars  Condition Appliances</h2>
        <CosmaticSlider />
        <div className='text-center mt-10 md:mt-60px'>
          <Link to="" className='inline-flex gap-1 items-center justify-center rounded-lg border border-b3 text-b3 py-3 px-4 font-semibold'>View More <AiOutlineArrowRight className='text-lg' /></Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home