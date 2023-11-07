import React, { useEffect } from 'react'
import ProductCard3 from '../components/ProductCard3'
import ProductFilter from '../components/Product/FIlter'
import { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { BsGrid, BsChevronDown } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { GetAppliancesBySection, getAppliancesFilters,GetAppliancesByFilter } from '../api/frontEnd'
import Loader from '../components/Loader/Loader'
import Toast from '../utils/Toast'

const Products = () => {

  const [categoriesFilters, setCategoriesFilters] = useState([])
  const [ratingFilters, setRatingFilters] = useState([])
  const [saleFilter, setSaleFilter] = useState({})
  const [regularFilter, setRegularFilter] = useState({})
  const [products, setProducts] = useState([])
  const [isGrid, setIsGrid] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const [params, setParams] = useState({isSale:true,salePrice: { min: 200,max:8000 } })
  
  useEffect(()=>{
    // Create a URLSearchParams object from the query string
    const queryParams = new URLSearchParams(location.search);
    // Create an object to store the query parameters
    const queryParamsObject = {};
  
    // Iterate through the query parameters and store them in the object
    for (const [key, value] of queryParams.entries()) {
      queryParamsObject[key] = value;
    }
    
    setParams({...params,...queryParamsObject})
  },[location.search])
  
  
  useEffect(() => {
     getAppliancesBySection()
  }, [params])

  const getAppliancesBySection = async () => {
    setLoading(true)
    const res = await GetAppliancesBySection(params)
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
  }, [params])

  const GetAppliancesFilter = async () => {
    const res = await getAppliancesFilters()
    if (res.status === 200) {
      setRatingFilters(res.data.ratingFilters)
      setCategoriesFilters(res.data.categoryFilters)
      setSaleFilter(res.data.saleFilter)
      setRegularFilter(res.data.regularFilter)
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
        <MainLayout>
          {/* Bread Crumbs Start */}
          <div className='flex items-center mt-5 py-5 maincontainer' >
            <div className='flex items-center' ><h5 className='text-xs text-blue-400' >Home</h5><RiArrowDropRightLine className='text-xl text-gray-500' /><h5 className='text-xs text-gray-400' >Products</h5></div>
            <div className='flex items-center space-x-5 w-full justify-end' ><BsGrid className='cursor-pointer' onClick={() => setIsGrid(true)} /><FaBars className='cursor-pointer' onClick={() => setIsGrid(false)} /></div>
            <button className='ml-5 text-sm font-semibold flex gap-2 items-center lg:hidden' onClick={() => setIsFilter(true)}>
              Filters <BsChevronDown className='text-xs stroke-1' />
            </button>
          </div>
          {/* Bread Crumbs End */}

          <div className='flex justify-center gap-12 xl:gap-x-60px maincontainer' >

            {/* Filters Start */}
            <ProductFilter query={params} setQuery={setParams} saleFilter={saleFilter} regularFilter={regularFilter} categoriesFilters={categoriesFilters} ratingFilters={ratingFilters} onClose={handleCloseFilter} isFilter={isFilter} />
            {/* Filters End */}

            <div className={`grid ${isGrid ? 'lg:grid-cols-3 grid-cols-1 lg:gap-x-2' : 'grid-cols-1'} gap-y-5 mb-10 w-full`} >
               {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader2.gif" className="w-20 h-20" /></div> :null}
               {products?.length === 0 ? <div className='flex items-center justify-center w-full' ><img src="/not-found.webp" className='w-40 h-40' /></div> : null}
               {products?.length > 0 && !loading ? products.map((product, index) => <ProductCard3 key={index} product={product} isGrid={isGrid} />) :null}

            </div>

          </div>

        </MainLayout>
    </>
  )
}

export default Products