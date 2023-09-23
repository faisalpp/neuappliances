import { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import CosmaticRating from '../components/Appliances/CosmaticRating';
import ProductSection from '../components/Appliances/ProductSection';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import RecentlyAddedSection from '../components/Appliances/RecentlyAddedSection';
import SatisfiedSection from '../components/SatisfiedSection';
import NewsLetterSection from '../components/NewsLetterSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { GetApplianceSections } from '../api/frontEnd';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader'

const Appliances = () => {

  const [sections, setSections] = useState([]);
  const [description, setDescription] = useState('');
  const [catTitle, setCatTitle] = useState('');
  const { categorySlug } = useParams();

  const [loading, isLoading] = useState(true);



  const [menu, setMenu] = useState([])

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (match) {
      return match.toUpperCase()
    }).replace(/\-/g, ' ');
  }

  const ConstructMenu = () => {
    let sectType;
    let cardType;
    let menuItems = [];
    sections.forEach(item => {
      sectType = item.cardStyle;
      cardType = item.type;
      let menuItem = [];
      if (sectType !== 'head-rating-card') {
        item.sectionItemsId.filter(i => {
          if (i.rating) {
            const name = `${i.rating} Stars ${catTitle}`
            const link = `/appliances/?category=${catTitle.toLowerCase().replace(/\s/g, '-')}&rating=${i.rating}`
            let item = { name: name, link: link }
            menuItem.push(item)

          } else {
            const name = `${i.title}`
            const link = `/appliances/?category=${catTitle.toLowerCase().replace(/\s/g, '-')}&${cardType}=${i.title.toLowerCase().replace(/\s/g, '-')}`
            let item = { name: name, link: link }
            menuItem.push(item)
          }

        })
        menuItems.push({ [capitalizeWords(cardType)]: menuItem })
      }
      setMenu(menuItems)
    })
  }

  useEffect(() => {
    ConstructMenu()
  }, [sections])

  const getAppliances = async () => {
    const data = { slug: categorySlug };
    const res = await GetApplianceSections(data);
    if (res.status === 200) {
      setSections(res.data.categorySections);
      setDescription(res.data.categoryDescription);
      setCatTitle(res.data.categoryTitle);
      isLoading(false)
    }
  }

  useEffect(() => {
    getAppliances();
  }, [])

  return (
    <>
      {loading ? <Loader /> : (
        <MainLayout>
          <div className='py-16 xl:py-20 maincontainer' >
            {/* Bread Crumbs Start */}
            <div className='flex items-center' >
              <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >Appliances</h5><RiArrowDropRightLine className='text-xl text-gray-300' /><h5 className='text-xs text-gray-500 capitalize' >{categorySlug}</h5>
            </div>
            {/* Bread Crumbs End */}
            <ApplianceDetail title={catTitle} description={description} />
          </div>
          {sections.map((section, index) => (section.cardStyle === "head-rating-card" ? <CosmaticRating key={index} section={section} /> : null))}
          <ProductSection menu={menu} data={sections} category={catTitle} />
          {/* Shop Austin Section */}
          <ShopAustinSection />
          {/* Recentky Added Section */}
          <RecentlyAddedSection title="Recently Added Refrigerators" buttonname="Shop All 3 Star Cosmetic Rating Appliances" />
          {/* End */}

          {/* Reviews Section */}
          <SatisfiedSection apiSectionName="categories-page" title="Join Thousands of our Satisfied Customers." />

          <NewsLetterSection backimage="/Newsletter.webp" />
        </MainLayout>)}
    </>
  )
}

export default Appliances