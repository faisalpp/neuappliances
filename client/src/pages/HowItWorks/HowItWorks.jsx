import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ShopAustinSection from '../../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import Sell from '../../svgs/HowItWork/Sell';
import Rating from '../../svgs/HowItWork/Rating';
import Testing from '../../svgs/HowItWork/Testing';
import Photos from '../../svgs/HowItWork/Photos';
import HassleFree from '../../svgs/HowItWork/HassleFree';
import Delivered from '../../svgs/HowItWork/Delivered';

const HowItWorks = ({ children }) => {
    const location = useLocation();

    const TABS = [
        {
            id: 1,
            title: 'What We Sell',
            link: '/how-it-works/what-we-sell',
            icon: Sell,
        },
        {
            id: 2,
            title: 'Ratings',
            link: '/how-it-works/rating-system',
            icon: Rating,
        },
        {
            id: 3,
            title: 'Tested',
            link: '/how-it-works/testing-process',
            icon: Testing,
        },
        {
            id: 4,
            title: 'Photos',
            link: '/how-it-works/product-photos',
            icon: Photos,
        },
        {
            id: 5,
            title: 'Delivered',
            link: '/how-it-works/delivery',
            icon: HassleFree,
        },
        {
            id: 6,
            title: 'Hassle-Free',
            link: '/how-it-works/hassle-free',
            icon: Delivered,
        }
    ];

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Scratch and  Dent</h5>
                    </div>
                    {/* Bread Crumbs End */}
                </div>


                <div className='maincontainer'>
                    <h1 className='text-4xl font-bold text-center mb-60px'>
                        How it Works
                    </h1>
                    {/* tabs */}
                    <div className='flex maxsm:overflow-x-auto maxsm:pb-4 md:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-start lg:columns-6 gap-4'>
                        {TABS.map((tab) => {
                            return (
                                <Link to={tab.link} key={tab.id} className={`lg:w-full items-center p-[10px] md:py-4 md:px-8 lg:p-[10px] xl:py-4 xl:px-8 rounded-[10px_10px_0_0] md:rounded-2xl flex justify-center gap-2 whitespace-nowrap ${location.pathname === tab.link ? 'active bg-b3 font-bold text-white' : 'bg-b11 text-black'}`} >
                                    <span className={`w-6 h-6 md:w-8 md:h-8 ${location.pathname === tab.link ? '' : 'md:hidden'}`}>
                                        <tab.icon customclass="w-6 h-6 md:w-8 md:h-8" color={location.pathname === tab.link ? 'white' : 'black'} />
                                    </span>
                                    <span className={location.pathname === tab.link ? '' : 'maxmd:hidden'}>{tab.title}</span>
                                </Link>
                            )
                        })}
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