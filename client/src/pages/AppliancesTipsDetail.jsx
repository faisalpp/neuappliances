import React from 'react'
import MainLayout from '../layout/MainLayout'
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection';
import TipsDetails from '../components/AppliancesTips/TipsDetails';

const AppliancesTipsDetail = () => {
    return (
        <>
            <MainLayout>
                <TipsDetails />

                {/* Shop Austin Section */}
                <ShopAustinSection />

                <SatisfiedSection title="Testimonials" />

                <NewsLetterSection backimage="/Newsletter.webp" />
            </MainLayout>
        </>
    )
}

export default AppliancesTipsDetail