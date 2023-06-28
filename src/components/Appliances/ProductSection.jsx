import React from 'react'
import ProductType from './ProductType';
import ProductCard from './ProductCard';
import RelatedProducts from './RelatedProducts';
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';

const ProductSection = ({data}) => {
    const [isFilter, setIsFilter] = useState(false);
    console.log(data[0])
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

                  {data.map((section)=><>
                    {section.cardStyle === 'rating-card' ?<div>
                        <h3 className='font-semibold text-b18'>{section.title}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                            {section.sectionItemsId.map((product)=><ProductCard key={product.title} title={product.title} image={`${process.env.REACT_APP_INTERNAL_PATH}/storage/sectionItems/${product.image}`} rating={product.rating} />)}
                        </div>
                    </div>:null}

                    {/* Product Styles */}
                     {section.cardStyle === 'general-card' ? <div>
                        <RelatedProducts title={section.title} />
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
                            {section.sectionItemsId.map((product)=><ProductCard key={product.title} title={product.title} image={`${process.env.REACT_APP_INTERNAL_PATH}/storage/sectionItems/${product.image}`} />)}
                        </div>
                    </div>:null}
                     {section.cardStyle === '2xn-card' ? <div>
                        <RelatedProducts title={section.title} />
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-8'>
                            {section.sectionItemsId.map((product)=><ProductCard key={product.title} title={product.title} image={`${process.env.REACT_APP_INTERNAL_PATH}/storage/sectionItems/${product.image}`} />)}
                        </div>
                    </div>:null}


                    {section.cardStyle === 'brand-card' ?<div>
                        <RelatedProducts title={section.title} />
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8'>
                            {section.sectionItemsId.map((product)=><ProductCard key={product.title} brandname={product.title} brandimage={`${process.env.REACT_APP_INTERNAL_PATH}/storage/sectionItems/${product.image}`} />)}
                        </div>
                    </div>:null}

                    {section.cardStyle === 'color-card' ?<div>
                        <RelatedProducts title={section.title} />
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8'>
                            {section.sectionItemsId.map((product)=><ProductCard key={product.title} colorname={product.title} colorimage={`${process.env.REACT_APP_INTERNAL_PATH}/storage/sectionItems/${product.image}`} />)}
                        </div>
                    </div>:null}
                    </>
                  )}
                </div>
            </div>
        </div>
    )
}

export default ProductSection