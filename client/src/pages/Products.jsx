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
  const [params, setParams] = useState({})
  const [query,setQuery] = useState({})

  useEffect(() => {
    // Create a URLSearchParams object from the query string
    const queryParams = new URLSearchParams(location.search);

    // Create an object to store the query parameters
    const queryParamsObject = {};

    // Iterate through the query parameters and store them in the object
    for (const [key, value] of queryParams.entries()) {
      queryParamsObject[key] = value;
    }
    setParams(queryParamsObject)
    setQuery({...queryParamsObject,...query})
  }, []);


  useEffect(() => {
    console.log(params)
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
  }, [])

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

  
  const [loading2,setLoading2] = useState(false)
  
  const GetApplianceByFilter = async () => {
    setLoading2(true)
    console.log(query)
    const resp = await GetAppliancesByFilter(query)
    if(resp.status === 200){
    setProducts(resp.data.products)
    setLoading2(false)
   }else{
    Toast(resp.data.message,'error',1000)
    setLoading2(false)
   }
  }
  useEffect(()=>{
    GetApplianceByFilter()
  },[query])

  return (
    <>
      {loading ? <Loader />
        :
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
            <ProductFilter query={query} setQuery={setQuery} saleFilter={saleFilter} regularFilter={regularFilter} categoriesFilters={categoriesFilters} ratingFilters={ratingFilters} onClose={handleCloseFilter} isFilter={isFilter} />
            {/* Filters End */}

            <div className={`grid ${isGrid ? 'lg:grid-cols-3 grid-cols-1 lg:gap-x-2' : 'grid-cols-1'} gap-y-5 mb-10 w-full`} >
               {loading2 ? <div className='flex items-center justify-center w-full' ><img src="/loader2.gif" className="w-24 h-24" /></div> :null}
               {products.length > 0 && !loading2 ? products.map((product, index) => <ProductCard3 key={index} product={product} isGrid={isGrid} />) :null}
               {products.length === 0 ? <div className='flex items-center justify-center w-full' ><img src="/not-found.webp" className='w-52 h-52' /></div> : null}

            </div>

          </div>

        </MainLayout>
      }
    </>
  )
}

export default Products