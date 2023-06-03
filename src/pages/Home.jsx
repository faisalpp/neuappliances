import React from 'react';
import HeroSection from '../components/HeroSection'
import BrandsSlider from '../components/BrandsSlider';
import WwslSection from '../components/WwslSection';
import HomeImagesSection from '../components/HomeImagesSection';
import CosmaticStarSection from '../components/CosmaticStarSection';
import HiwSection from '../components/HiwSection';
import AustinLoveSection from '../components/AustinLoveSection';
import D3CardSection from '../components/D3CardSection';
import ReviewSection from '../components/ReviewSection';
import LoopSection from '../components/LoopSection';
import ApplianceSection from '../components/ApplianceSection';
import MapSection from '../components/MapSection';
import RatingProductSection from '../components/RatingProductSection';
import TourSection from '../components/TourSection';
import GallerySection from '../components/GallerySection';
import SatisfiedSection from '../components/SatisfiedSection';
import NewsLetterSection from '../components/NewsLetterSection';
import MainLayout from '../layout/MainLayout';

const Home = () => {
  
  return (
    <>
     <MainLayout>
     <HeroSection/>
     <BrandsSlider/>
     <WwslSection/>
     <HomeImagesSection/>
     <CosmaticStarSection/>
     <HiwSection/>
     <AustinLoveSection/>
     <D3CardSection/>
     <ReviewSection/>
     <LoopSection/>
     <ApplianceSection/>
     <MapSection/>
     <RatingProductSection stars={5} />
     <RatingProductSection stars={4} />
     <RatingProductSection stars={3} />
     <TourSection/>
     <GallerySection/>
     <SatisfiedSection title="Join Thousands of our Satisfied Customers." />
     <NewsLetterSection/>
     </MainLayout>
    </>
  )
}

export default Home