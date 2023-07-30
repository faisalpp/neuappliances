import React, { useEffect } from 'react'
import ProductCard3 from '../components/ProductCard3'
import ProductFilter from '../components/Product/FIlter'
import { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { BsGrid, BsChevronDown } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { GetAppliancesByFilter,getAppliancesFilters } from '../api/frontEnd'
import Loader from '../components/Loader/Loader'

const Products = () => {

  const { category, type, value } = useParams()
  
  const [categoriesFilters, setCategoriesFilters] = useState([])
  const [ratingFilters, setRatingFilters] = useState([])
  const [products, setProducts] = useState([])
  const [isGrid, setIsGrid] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAppliancesByFilter()
  }, [])

  const getAppliancesByFilter = async () => {
    const data = { category, type, value }
    setLoading(true)
    const res = await GetAppliancesByFilter(data)
    console.log(res)
    if (res.status === 200) {
      setProducts(res.data.products)
      setLoading(false)
    } else {
      setLoading(false)
      setProducts([]);
    }
  }

  useEffect(() => {
    GetAppliancesFilter()
  }, [])

  const GetAppliancesFilter = async () => {
    const res = await getAppliancesFilters()
    console.log(res)
    if (res.status === 200) {
      setRatingFilters(res.data.ratingFilters)
      setCategoriesFilters(res.data.categoryFilters)
    } else {
      setRatingFilters([]);
      setCategoriesFilters([]);
    }
  }


  const handleCloseFilter = () => {
    setIsFilter(false);
  };

  return (
    <>
      {loading ? <Loader />
        :
        <MainLayout>
          {/* Bread Crumbs Start */}
          <div className='flex items-center mt-5 py-5 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <div className='flex items-center' ><h5 className='text-xs text-blue-400' >Home</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-gray-400' >Products</h5></div>
            <div className='flex items-center space-x-5 w-full justify-end' ><BsGrid className='cursor-pointer' onClick={() => setIsGrid(true)} /><FaBars className='cursor-pointer' onClick={() => setIsGrid(false)} /></div>
            <button className='ml-5 text-sm font-semibold flex gap-2 items-center lg:hidden' onClick={() => setIsFilter(true)}>
              Filters <BsChevronDown className='text-xs stroke-1' />
            </button>
          </div>
          {/* Bread Crumbs End */}

          <div className='flex justify-center gap-12 xl:gap-x-60px w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >

            {/* Filters Start */}
            <ProductFilter categoriesFilters={categoriesFilters} ratingFilters={ratingFilters} onClose={handleCloseFilter} isFilter={isFilter} />
            {/* Filters End */}

            <div className={`grid ${isGrid ? 'lg:grid-cols-3 grid-cols-1 lg:gap-x-2' : 'grid-cols-1'} gap-y-5 mb-10 w-full`} >

              {products.length > 0 ? products.map((product,index) => <ProductCard3 key={index} product={product} isGrid={isGrid} />) :
                <h1>No Product Founds!</h1>
              }

            </div>

          </div>

        </MainLayout>
      }
    </>
  )
}

export default Products