import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import ProductsTypeCard from '../components/Appliances/ProductsTypeCard';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { GetAppliances } from '../api/frontEnd'
import Loader from '../components/Loader/Loader'

const ApplianceTypes = () => {

    const [applianceTypes, setApplianceTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAppliances = async () => {
            const res = await GetAppliances({ limit: 'all' });
            if (res.status === 200) {
                setApplianceTypes(res.data.categories);
                setLoading(false)
            } else {
                console.log(res)
            }
        }
        getAppliances();
    }, [])

    return (
        <>
            {loading ? <Loader /> : (
                <MainLayout>
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center pt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                        <div className='flex items-center' ><h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-[#5E5E5E]' >Appliances</h5></div>
                    </div>
                    {/* Bread Crumbs End */}
                    <div className='flex flex-col gap-6 items-center text-center py-10 lg:py-16 xl:py-20 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                        <h2 className='text-32px lg:text-4xl font-bold text-[#111010]'>Shop By Appliance Types</h2>
                        <p className='md:w-3/4 mx-auto text-[#111010]'>
                            We understand the value of your time and the importance of easy navigation, so we’ve carefully curated a selection of categories to make your search a breeze. Comb through our wide range of appliances type including trendy appliance, classic favorites, niche appliances, and more.
                        </p>
                    </div>
                    {/* Product Types */}
                    <div className='pb-10 lg:pb-16 xl:pb-20 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                        <ProductsTypeCard productstype={applianceTypes} />
                    </div>

                    {/* Shop Austin Section */}
                    <ShopAustinSection />

                    <NewsLetterSection backimage="Newsletter.webp" />
                </MainLayout>)}
        </>
    )
}

export default ApplianceTypes