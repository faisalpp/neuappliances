import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ShopAustinSection = () => {
    return (
        <div className='py-10 lg:py-16 xl:py-20 max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-28  2xl:gap-[157px] bg-b3'>
            <div>
                <h2 className='font-extrabold text-3xl xl:text-4xl 2xl:text-[56px] 2xl:leading-[64px] text-white'>
                    Shop Austin's Best Scratch and Dent Appliances
                </h2>
                <p className='mt-6 mb-10 text-white text-base xl:text-[20px] leading-6 xl:leading-8'>
                    Offering Austin, Tx the BEST in Discounted Open Box Appliances and  Scratch and Dent Appliances.  Our Inventory is LIVE and changes QUICKLY, so if you see something you like Snag it ASAP before its gone!
                </p>
                <Link to="" className='inline-flex items-center p-4 rounded-lg gap-2 bg-b4 text-sm font-semibold'><HiOutlineShoppingCart /> <span>Shop Now</span></Link>
            </div>
            <div>
                <img src="shopaustin.png" className='w-full h-auto rounded-3xl' alt="shopaustin" />
            </div>
        </div >
    )
}

export default ShopAustinSection