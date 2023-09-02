import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout'
import ProductInformation from '../components/BuyingOptions/ProductInformation'
import BuyingOptions from '../components/BuyingOptions/BuyingOptions'

const BuyingOptionsV1 = () => {

    return (
        <MainLayout>
            <div className='py-12 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <ProductInformation />
                <BuyingOptions />
            </div>
        </MainLayout>
    )
}
export default BuyingOptionsV1
