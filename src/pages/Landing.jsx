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
import TourSection from '../components/TourSection';
import GallerySection from '../components/GallerySection';
import SatisfiedSection from '../components/SatisfiedSection';
import NewsLetterSection from '../components/NewsLetterSection';
import MainLayout from '../layout/MainLayout';
import ProductSlider from '../components/ProductSlider';
import RatingProductSectionXl from '../components/Sections/RatingProductSections/RatingProductSectionXl'
import RatingProductSection from '../components/RatingProductSection';
import ReviewSlider from '../components/ReviewSlider';
import CosmaticSlider from '../components/CosmaticSlider';

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
      <MainLayout>
        <div className='py-10 lg:py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
          <ReviewSlider color="#F5F5F5" clientreviews={clientreviews} icon="google.png" />
        </div>
        <div className='py-10 lg:py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
          <CosmaticSlider />
        </div>
        <CosmaticStarSection />
        <ApplianceSection />
        <div className='py-10 lg:py-14 xl:py-20 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
          <CosmaticSlider />
        </div>
      </MainLayout>
    </>
  )
}

export default Home