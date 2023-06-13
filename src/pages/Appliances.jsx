import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import CosmaticRating from '../components/Appliances/CosmaticRating';
import ProductSection from '../components/Appliances/ProductSection';

const Home = () => {

  return (
    <>
      <MainLayout>
        <ApplianceDetail />
        <CosmaticRating />
        <ProductSection />
      </MainLayout>
    </>
  )
}

export default Home