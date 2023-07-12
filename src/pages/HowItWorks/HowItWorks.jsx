import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ShopAustinSection from '../../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const HowItWorks = ({ children }) => {
    const location = useLocation();

    const TABS = [
        {
            id: 1,
            title: 'What We Sell',
            link: '/how-it-works/what-we-sell',
            icon: 'sell.png',
        },
        {
            id: 2,
            title: 'Ratings',
            link: '/how-it-works/rating-system',
            icon: 'hotel_class.png',
        },
        {
            id: 3,
            title: 'Tested',
            link: '/how-it-works/testing-process',
            icon: 'build.png',
        },
        {
            id: 4,
            title: 'Photos',
            link: '/how-it-works/product-photos',
            icon: 'magic_exchange.png',
        },
        {
            id: 5,
            title: 'Delivered',
            link: '/how-it-works/delivery',
            icon: 'local_shipping.png',
        },
        {
            id: 6,
            title: 'Hassle-Free',
            link: '/how-it-works/hassle-free',
            icon: 'gpp_maybe.png',
        }
    ];

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Scratch and  Dent</h5>
                    </div>
                    {/* Bread Crumbs End */}
                </div>


                <div className='w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <h1 className='text-4xl font-bold text-center mb-60px'>
                        How it Works
                    </h1>
                    {/* tabs */}
                    <div className='flex maxxl:flex-wrap maxxl:justify-center xl:columns-6 gap-4'>
                        {TABS.map((tab) => (
                            <Link to={tab.link} key={tab.id} className={`xl:w-full items-center py-4 px-8 rounded-2xl flex justify-center gap-2 xl:whitespace-nowrap ${location.pathname === tab.link ? 'active bg-b3 font-bold text-white' : 'bg-b11 text-black'}`} >
                                {
                                    location.pathname === tab.link ?
                                        <img src={`/svgs/` + tab.icon} className='w-8 h-8' alt={tab.title} />
                                        : null
                                }
                                {tab.title}
                            </Link>
                        ))}
                    </div>

                    {/* <div className={`content ${fadeOut ? 'fade-out' : ''}`}>
                        {ActiveTabContent && <ActiveTabContent />}
                    </div> */}
                    <div className='tab-content'>
                        {children}
                    </div>
                </div>

                <ShopAustinSection />

                {/* Reviews Section */}

            </MainLayout>
        </>
    )
}

export default HowItWorks