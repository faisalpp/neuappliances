import {lazy,Suspense} from 'react';
import HeroSection from '../components/HeroSection'
const BrandsSlider = lazy(()=>import('../components/BrandsSlider'));
const WwslSection = lazy(()=>import('../components/WwslSection'));
const HomeImagesSection = lazy(()=>import('../components/HomeImagesSection'));
const CosmaticStarSection = lazy(()=>import('../components/CosmaticStarSection'));
const HiwSection = lazy(()=>import('../components/HiwSection'));
const AustinLoveSection = lazy(()=>import('../components/AustinLoveSection'));
const D3CardSection = lazy(()=>import('../components/D3CardSection'));
const ReviewSection = lazy(()=>import('../components/ReviewSection'));
const LoopSection = lazy(()=>import('../components/LoopSection'));
const ApplianceSection = lazy(()=>import('../components/ApplianceSection'));
const MapSection = lazy(()=>import('../components/MapSection'));
const TourSection = lazy(()=>import('../components/TourSection'));
const GallerySection = lazy(()=>import('../components/GallerySection'));
const SatisfiedSection = lazy(()=>import('../components/SatisfiedSection'));
const NewsLetterSection = lazy(()=>import('../components/NewsLetterSection'));
import MainLayout from '../layout/MainLayout';
const RatingProductSection = lazy(()=>import('../components/RatingProductSection'));

const Home = () => {

  return (
    <>
      <MainLayout>
        
        <HeroSection />
        
        <Suspense fallback={<div>Loading...</div>} >
         <BrandsSlider />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>} >
         <WwslSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <HomeImagesSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <CosmaticStarSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <HiwSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <AustinLoveSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>} >
         <D3CardSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <ReviewSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <LoopSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <ApplianceSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <MapSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <RatingProductSection />
        </Suspense>


        <Suspense fallback={<div>Loading...</div>} >
         <TourSection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <GallerySection />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <SatisfiedSection apiSectionName="home-page-footer-review" title="Join Thousands of our Satisfied Customers." />
        </Suspense>
        
        <Suspense fallback={<div>Loading...</div>} >
         <NewsLetterSection backimage="new.webp" />
        </Suspense>
      
      </MainLayout>
    </>
  )
}

export default Home