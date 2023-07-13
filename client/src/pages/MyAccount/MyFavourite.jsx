import React from 'react';
import MyAccount from '../../layout/MyAccount';
import ProductCard from '../../components/MyAccount/ProductCard';


const MyFavourite = () => {

    return (
        <>
            <MyAccount>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </MyAccount>
        </>
    )
}

export default MyFavourite