import React from 'react';
import NavBar from '../components/Navbar'
import Footer from '../components/DeskComp/Footer'
import ScrollToTop from '../components/DeskComp/ScrollToTop'
import CosmaticStarSection from '../components/CosmaticStarSection';
import ApplianceSection from '../components/ApplianceSection';
import ReviewSlider from '../components/ReviewSlider';
import CosmaticSlider from '../components/CosmaticSlider';
import HeroSection from '../components/Landing/HeroSection';

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
      <Footer />
    </>
  )
}

export default Home