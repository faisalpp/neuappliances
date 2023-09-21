import HeroSection from '../components/HeroSection'
import BrandsSlider from'../components/BrandsSlider';
import WwslSection from'../components/WwslSection';
import HomeImagesSection from'../components/HomeImagesSection';
import CosmaticStarSection from'../components/CosmaticStarSection';
import HiwSection from'../components/HiwSection';
import AustinLoveSection from'../components/AustinLoveSection';
import D3CardSection from'../components/D3CardSection';
import ReviewSection from'../components/ReviewSection';
import LoopSection from'../components/LoopSection';
import ApplianceSection from'../components/ApplianceSection';
import MapSection from'../components/MapSection';
import TourSection from'../components/TourSection';
import GallerySection from'../components/GallerySection';
import SatisfiedSection from'../components/SatisfiedSection';
import NewsLetterSection from'../components/NewsLetterSection';
import MainLayout from '../layout/MainLayout';
import RatingProductSection from '../components/RatingProductSection';
import IntersectionObserver from '../components/Reusable/IntersectionObserver';

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
         
         <IntersectionObserver thresh={1} >
          <AustinLoveSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <D3CardSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <ReviewSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <LoopSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <ApplianceSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <MapSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <RatingProductSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <TourSection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <GallerySection />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <SatisfiedSection apiSectionName="home-page-footer-review" title="Join Thousands of our Satisfied Customers." />
         </IntersectionObserver>
         
         <IntersectionObserver thresh={1} >
          <NewsLetterSection backimage="new.webp" />
         </IntersectionObserver>
      
      </MainLayout>
    </>
  )
}

export default Home