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

            </MainLayout>
        </>
    )
}

export default HowItWorks