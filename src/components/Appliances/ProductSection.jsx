import React from 'react'
import ProductType from './ProductType';
import ProductCard from './ProductCard';
import RelatedProducts from './RelatedProducts';
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';

const ProductSection = () => {
    const [isFilter, setIsFilter] = useState(false);

    const handleCloseFilter = () => {
        setIsFilter(false);
    };
    const productstype = [
        {
            title: 'Comatic Rating',
            menu: [
                {
                    title: '3 Stars Refrigerators',
                    link: '/',
                },
                {
                    title: '4 Stars Refrigerators',
                    link: '/',
                },
                {
                    title: '5 Stars Refrigerators',
                    link: '/',
                },
            ]
        },
        {
            title: 'Styles',
            menu: [
                {
                    title: 'French Door Refrigerators',
                    link: '/',
                },
                {
                    title: 'Side by Side Refrigerators',
                    link: '/',
                },
                {
                    title: 'Top Freezer Refrigerators',
                    link: '/',
                },
                {
                    title: 'Upright Freezer Refrigerators',
                    link: '/',
                },
                {
                    title: 'Mini Frigdes Refrigerators',
                    link: '/',
                },
            ]
        },
        {
            title: 'Popular Features',
            menu: [
                {
                    title: 'Ice Makers',
                    link: '/',
                },
                {
                    title: 'Energy Star',
                    link: '/',
                },
                {
                    title: 'Energy Star',
                    link: '/',
                },
                {
                    title: 'Water Dispenser',
                    link: '/',
                },
            ]
        },
        {
            title: 'Popular Brands',
            menu: [
                {
                    title: 'GE',
                    link: '/',
                },
                {
                    title: 'Samsung',
                    link: '/',
                },
                {
                    title: 'Whirlpool',
                    link: '/',
                },
                {
                    title: 'LG',
                    link: '/',
                },
                {
                    title: 'Frigidaire',
                    link: '/',
                },
            ]
        },
        {
            title: 'Finishes / Colors',
            menu: [
                {
                    title: 'White',
                    link: '/',
                },
                {
                    title: 'Black',
                    link: '/',
                },
                {
                    title: 'Stainless Steel',
                    link: '/',
                },
                {
                    title: 'Black Stainless Steel',
                    link: '/',
                },
                {
                    title: 'Slate',
                    link: '/',
                },
            ]
        },
    ]
    return (
        <div>
            <div className='flex maxlg:flex-col justify-center gap-4 lg:gap-8 py-10 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px 3xl:pr-120px 3xl:pl-[88px] mx-auto' >
                {/* FFIlter Button For MoBile Screen */}
                <button className='ml-auto shadow-md px-3 py-2 text-sm font-semibold rounded-lg flex gap-2 items-center lg:hidden' onClick={() => setIsFilter(true)}>
                    Filters <BsChevronDown className='text-xs stroke-1' />
                </button>
                {/* End FIlter Button */}
                <ProductType productstype={productstype} onClose={handleCloseFilter} isFilter={isFilter} />

                <div className='w-full flex flex-col gap-60px'>
                    {/* Cosmatic Rating */}
                    <div>
                        <h3 className='font-semibold'>Refrigerators By Cosmetic Ratings</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                            <ProductCard title="Refrigerator" image="refrigrator.png" rating={5} />
                            <ProductCard title="Refrigerator" image="refrigrator.png" rating={4} />
                            <ProductCard title="Refrigerator" image="refrigrator.png" rating={3} />
                        </div>
                    </div>
                    {/* Product Styles */}
                    <div>
                        <RelatedProducts title="Refrigerators By Styles" />
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                            <ProductCard title="French Door Refrigerator" image="refrigstyle1.png" />
                            <ProductCard title="Side by Side Refrigerator" image="refrigstyle2.png" />
                            <ProductCard title="Top Freezer Refrigerator" image="refrigstyle3.png" />
                            <ProductCard title="Upright Freezer Refrigerators" image="refrigstyle4.png" />
                            <ProductCard title="Mini Fridges Refrigerators" image="refrigstyle5.png" />
                        </div>
                    </div>
                    <div>
                        <RelatedProducts title="Refrigerators By Features" />
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8'>
                            <ProductCard title="Ice Makers" image="rffeature1.png" />
                            <ProductCard title="Energy Star" image="rffeature2.png" />
                            <ProductCard title="Counter Depth" image="rffeature3.png" />
                            <ProductCard title="Counter Depth" image="rffeature4.png" />
                        </div>
                    </div>
                    <div>
                        <RelatedProducts title="Refrigerators By Popular Brands" />
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6 mt-8'>
                            <ProductCard brandname="General Electronics" brandimage="generalelectronics.png" />
                            <ProductCard brandname="LG Electronics" brandimage="samsungelectronics.png" />
                            <ProductCard brandname="Samsung Electronics" brandimage="lgelectronics.png" />
                            <ProductCard brandname="FRIGIDAIRE" brandimage="frigidaire.png" />
                            <ProductCard brandname="Whirlpool" brandimage="whirlpool2.png" />
                        </div>
                    </div>
                    <div>
                        <RelatedProducts title="Refrigerators By Finishes & Colors" />
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6 mt-8'>
                            <ProductCard colorname="White" colorimage="whiteproduct.png" />
                            <ProductCard colorname="Black" colorimage="blackproduct.png" />
                            <ProductCard colorname="Stainless Steel" colorimage="stainlessproduct.png" />
                            <ProductCard colorname="Black Stainless Steel" colorimage="bstainlessproduct.png" />
                            <ProductCard colorname="Slate" colorimage="slateproduct.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection