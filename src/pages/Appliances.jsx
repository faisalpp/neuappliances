import React,{useEffect,useState} from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import CosmaticRating from '../components/Appliances/CosmaticRating';
import ProductSection from '../components/Appliances/ProductSection';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import RecentlyAddedSection from '../components/Appliances/RecentlyAddedSection';
import SatisfiedSection from '../components/SatisfiedSection';
import NewsLetterSection from '../components/NewsLetterSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import {GetApplianceSections} from '../api/frontEnd';
import { useParams } from 'react-router-dom';

const Appliances = () => {

  const [sections,setSections] = useState([]);
  const [description,setDescription] = useState('');
  const [catTitle,setCatTitle] = useState('');
  const {categorySlug,categoryId} = useParams();

  const data = {categoryId};
  useEffect(() => {
      const getAppliances = async () => {
          const res = await GetApplianceSections(data);
          if(res.status === 200){
              setSections(res.data.categorySections);
              setDescription(res.data.categoryDescription);
              setCatTitle(res.data.categoryTitle);
              console.log(res)
          }
      }
      getAppliances();
  }, [])

  return (
    <>
      <MainLayout>
        <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
          {/* Bread Crumbs Start */}
          <div className='flex items-center' >
            <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >Appliances</h5><RiArrowDropRightLine className='text-xl text-gray-300' /><h5 className='text-xs text-gray-500' >{categorySlug}</h5>
          </div>
          {/* Bread Crumbs End */}
          <ApplianceDetail title={catTitle} description={description} />
        </div>
        {sections.map((section)=> (section.cardStyle === "head-rating-card" ? <CosmaticRating section={section} />:null))}
        <ProductSection data={sections} />
        {/* Shop Austin Section */}
        <ShopAustinSection />
        {/* Recentky Added Section */}
        <RecentlyAddedSection />
        {/* End */}

        {/* Reviews Section */}
        <SatisfiedSection title="Join Thousands of our Satisfied Customers." />

        <NewsLetterSection backimage="/Newsletter.png" />
      </MainLayout>
    </>
  )
}

export default Appliances