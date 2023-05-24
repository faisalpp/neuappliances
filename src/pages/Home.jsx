import React from 'react';
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/DeskComp/Footer'
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

const Home = () => {
  return (
    <>
     <NavBar/>
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
     <RatingProductSection/>
     <RatingProductSection/>
     <RatingProductSection/>
     <TourSection/>
     <GallerySection/>
     <SatisfiedSection/>
     <NewsLetterSection/>
     <Footer/>
    </>
  )
}

export default Home