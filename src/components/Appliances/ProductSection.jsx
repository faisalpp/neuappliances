import React from 'react'
import ProductType from './ProductType';

const ProductSection = () => {
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
        <div className='flex justify-center gap-12 xl:gap-x-60px py-10 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
            <ProductType productstype={productstype} />
            <div className='w-full'>
                Product Details
            </div>
        </div>
    )
}

export default ProductSection