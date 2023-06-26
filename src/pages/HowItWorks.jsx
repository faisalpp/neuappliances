import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import WhatWeSell from '../components/HowItworks/WhatWeSell';
import Tested from '../components/HowItworks/Tested';
import Ratings from '../components/HowItworks/Ratings';
import Photos from '../components/HowItworks/Photos';
import Delivered from '../components/HowItworks/Delivered';
import HassleFree from '../components/HowItworks/HassleFree';

const HowItWorks = () => {

    const TABS = [
        { id: 1, title: 'What We Sell', component: WhatWeSell },
        { id: 2, title: 'Ratings', component: Ratings },
        { id: 3, title: 'Tested', component: Tested },
        { id: 4, title: 'Photos', component: Photos },
        { id: 5, title: 'Delivered', component: Delivered },
        { id: 6, title: 'Hassle-Free', component: HassleFree }
    ];

    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [fadeOut, setFadeOut] = useState(false);

    const handleTabClick = (tabId) => {
        setFadeOut(true);
        setTimeout(() => {
            setActiveTab(tabId);
        }, 100);
    };

    useEffect(() => {
        setFadeOut(false); // Reset fade-out animation after tab change
    }, [activeTab]);

    const ActiveTabContent = TABS.find((tab) => tab.id === activeTab)?.component;

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Scratch and  Dent</h5>
                    </div>
                    {/* Bread Crumbs End */}
                </div>


                <div className='w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <h1 className='text-4xl font-bold text-center mb-60px'>
                        How it Works
                    </h1>
                    {/* tabs */}
                    <div className='flex maxxl:flex-wrap maxxl:justify-center xl:columns-5 gap-4'>
                        {TABS.map((tab) => (
                            <button key={tab.id}
                                className={`xl:w-full py-4 px-8 rounded-2xl flex justify-center gap-[10px] ${activeTab === tab.id ? 'active bg-b3 font-bold text-white' : 'bg-b11 text-black'}`}
                                onClick={() => handleTabClick(tab.id)}>
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className={`content ${fadeOut ? 'fade-out' : ''}`}>
                        {ActiveTabContent && <ActiveTabContent />}
                    </div>
                </div>

                <ShopAustinSection />

                {/* Reviews Section */}

            </MainLayout>
        </>
    )
}

export default HowItWorks