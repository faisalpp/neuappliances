import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import HelpAndSupportCard from '../../components/HelpAndSupportCard';

const HelpAndSupport = () => {

    const tabsData = [
        {
            id: 1, label: 'Delivery',
            content: [
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
            ]
        },
        {
            id: 2, label: 'Purchase',
            content: [
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        },
        {
            id: 3, label: 'Return',
            content: [
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        },
        {
            id: 4, label: 'Refund',
            content: [
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        },
        {
            id: 5, label: 'Delivery',
            content: [
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const [fadeOut, setFadeOut] = useState(false);

    const handleTabClick = (tabId) => {
        setFadeOut(true); // Trigger fade-out animation
        setTimeout(() => {
            setActiveTab(tabId);
        }, 200); // W
    };

    useEffect(() => {
        setFadeOut(false); // Reset fade-out animation after tab change
    }, [activeTab]);

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex flex-col gap-4' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >Help & Support Center</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <h1 className='text-40px text-b18 font-bold'>
                        Help & Support
                    </h1>

                    {/* Search Bar */}
                    <div className='max-w-[560px] relative w-full'>
                        <input type="search" placeholder='What do you need help with?' className='placeholder:text-[#777E90] placeholder:text-xs w-full outline-none border border-[rgba(0,0,0,0.16)] pl-10 py-4 pr-4 rounded-lg' name="" id="" />
                        <AiOutlineSearch className='absolute top-5 left-4 text-base' />
                    </div>
                </div>
                {/* Help and Support */}
                <div className='pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex maxlg:flex-col gap-10 lg:gap-7 xl:gap-10'>
                    <div className="tab-buttons maxlg:order-2 lg:max-w-[250px] 2xl:max-w-xs lg:w-full flex flex-col gap-2">
                        {tabsData.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-5 xl:px-6 py-4 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab.id ? 'active text-white bg-b3' : 'text-b23'}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span>
                                    {tab.label}
                                </span>
                                {activeTab === tab.id ? <FiChevronRight /> : ''}
                            </button>
                        ))}
                    </div>
                    <div className={`tab-content w-full ${fadeOut ? 'fade-out' : ''}`}>
                        {tabsData.map((tab) => (
                            activeTab === tab.id && <div key={tab.id} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                                {tab.content.map((content, index) => (
                                    <HelpAndSupportCard title={content.title} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={content.answer} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout >
        </>
    )
}

export default HelpAndSupport