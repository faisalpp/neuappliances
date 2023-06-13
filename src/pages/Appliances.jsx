import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import CosmaticRating from '../components/Appliances/CosmaticRating';
import ProductSection from '../components/Appliances/ProductSection';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Appliances = () => {

  return (
    <>
      <MainLayout>
        <div className='py-10 lg:py-16 xl:py-20 max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          {/* Bread Crumbs Start */}
          <div className='flex items-center' >
            <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >Appliances</h5><RiArrowDropRightLine className='text-xl text-gray-300' /><h5 className='text-xs text-gray-500' >Appliances</h5>
          </div>
          {/* Bread Crumbs End */}
          <ApplianceDetail />
        </div>
        <CosmaticRating />
        <ProductSection />
      </MainLayout>
    </>
  )
}

export default Appliances