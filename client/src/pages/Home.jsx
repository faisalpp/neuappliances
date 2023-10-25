import { lazy, Suspense } from 'react'
import HeroSection from '../components/HeroSection'
import BrandsSlider from'../components/BrandsSlider';
import WwslSection from'../components/WwslSection';
import HomeImagesSection from'../components/HomeImagesSection';
import CosmaticStarSection from'../components/CosmaticStarSection';
import HiwSection from'../components/HiwSection';
import AustinLoveSection from'../components/AustinLoveSection';
import D3CardSection from'../components/D3CardSection';
import ReviewSection from'../components/ReviewSection';
const LoopSection = lazy(() => import('../components/LoopSection'));
import ApplianceSection from'../components/ApplianceSection';
const MapSection = lazy(() => import('../components/MapSection'));
import TourSection from'../components/TourSection';
const GallerySection = lazy(() => import('../components/GallerySection'));
import SatisfiedSection from'../components/SatisfiedSection';
import NewsLetterSection from'../components/NewsLetterSection';
import MainLayout from '../layout/MainLayout';
import RatingProductSection from '../components/RatingProductSection';

const Home = () => {

  return (
    <>
      <MainLayout>
        <HeroSection />
         <BrandsSlider />  
         <WwslSection />
         <HomeImagesSection />
         <CosmaticStarSection />
         <HiwSection />
         
          <AustinLoveSection />
         
         
         
          <D3CardSection />
         
         
         
          <ReviewSection />
         
         
         
          <LoopSection />
         
         
         
          <ApplianceSection />
         
         
         
          <MapSection />
         
         
         
          <RatingProductSection />
         
         
         
          <TourSection />
         
         
         
          <GallerySection />
         
         
         
          <SatisfiedSection apiSectionName="home-page-footer-review" title="Join Thousands of our Satisfied Customers." />
         
         
         
          <NewsLetterSection backimage="new.webp" />
         
      
      </MainLayout>
    </>
  )
}

export default Home