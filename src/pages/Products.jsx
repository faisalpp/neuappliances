import React, { useEffect } from 'react'
import ProductCard3 from '../components/ProductCard3'
import { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import TypeFilter from '../components/DeskComp/Filter/TypeFilter'
import RatingFilter from '../components/DeskComp/Filter/RatingFilter'
import HeaderFilter from '../components/DeskComp/Filter/HeaderFilter';
import SaleFilter from '../components/DeskComp/Filter/SaleFilter';

const Products = () => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <>
      <MainLayout>
        {/* Bread Crumbs Start */}
        <div className='flex items-center mt-5 py-5 w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          <div className='flex items-center' ><h5 className='text-xs text-blue-400' >Home</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-gray-400' >Products</h5></div>
          <div className='flex items-center space-x-5 w-full justify-end' ><BsGrid className='cursor-pointer' onClick={() => setIsGrid(true)} /><FaBars className='cursor-pointer' onClick={() => setIsGrid(false)} /></div>
        </div>
        {/* Bread Crumbs End */}

        <div className='flex justify-center gap-12 xl:gap-x-60px w-full max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

          {/* Filters Start */}
          <div className='lg:flex hidden flex-col w-1/5' >
            <div className='flex justify-between pb-4 items-center border-b'>
              <p className='text-base font-bold'>
                Filters
              </p>
              <a href="" className='text-xs text-[#22A6AB] underline'>
                Reset Filters
              </a>
            </div>
            <TypeFilter />
            <RatingFilter />
            <HeaderFilter />
            <SaleFilter />
          </div>
          {/* Filters End */}


          <div className={`grid ${isGrid ? 'lg:grid-cols-3 grid-cols-1 lg:gap-x-2' : 'grid-cols-1'} gap-y-5 mb-10 w-full`} >

            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />
            <ProductCard3 isGrid={isGrid} />

          </div>

        </div>

      </MainLayout>
    </>
  )
}

export default Products