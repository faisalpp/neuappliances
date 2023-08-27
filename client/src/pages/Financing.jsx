import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection';
import { Link } from 'react-router-dom';
import PayTermCard from '../components/Financing/PayTermCard';
import PriceRangeCard from '../components/Financing/PriceRangeCard';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';


const Financing = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Blog</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Financing with Acima" description="Dedicated to providing innovative solutions for the appliance market. Our focus on customer service and out of the box thinking have allowed us to provide our community with savings on all things appliances." />
                    <p className='mt-5 3xl:w-[1135px] w-full md:w-2/3 text-b16 maxmd:text-center'>
                        Our Appliance Outlets, Appliance Parts Store, and Appliance Wholesale Program each offer revolutionary solutions to problems within the Appliance Industry.
                    </p>
                    <a href="#apply-financing" className='maxsm:w-full justify-center inline-flex maxsm:text-sm text-xs font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>Apply for Financing <span><AiOutlineArrowDown className='text-base' /></span></a>
                </div>

                {/* Pay terms Cards */}
                <div className='pb-10 lg:pb-16 xl:pb-20 2xl:pb-120px pt-5 w-full 3xl:max-w-1680px [&>*]:text-b18 px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <h2 className='text-2xl xl:text-32px leading-8 xl:leading-10 font-bold text-center max-w-[720px] w-full mx-auto'>Acima is a third party NO-CREDIT NEEDED financing option.</h2>
                    <p className='max-w-[640px] mx-auto text-center mt-6 leading-6'>
                        Here are some techniques that will help you pay the least and maximize your bang for your buck. In plain English, Acima purchases the items from us (Neu Appliances) and leases them to you until you pay it off. Once you pay it off, you own them.
                    </p>
                    <h3 className='my-10 text-xl font-bold text-center'>Lease terms are 12 months with 3 ways to pay it off:</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <PayTermCard image="timer.png" title="Within 90 Days" description="You only pay: Initial Payment + $25 + Total" />
                        <PayTermCard image="calendar.png" title="Early Buyout Option" description="Usually 75% of the remaining payments owed" />
                        <PayTermCard image="clock.png" title="Full 12 Month Lease" description="Roughly 2x the cash price remaining" />
                    </div>
                </div>

                {/* Pricing Range Cards */}

                <div className='bg-b8' id='apply-financing'>
                    <div className='py-10 lg:py-16 xl:py-20 2xl:py-120px pt-5 w-full 3xl:max-w-1680px [&>*]:text-b18 px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                        <h2 className='text-2xl xl:text-32px leading-8 xl:leading-10 font-bold text-center max-w-[778px] w-full mx-auto'>
                            Neu Appliances recommends only purchasing what you can afford, stay in your price range.
                        </h2>
                        <p className='max-w-[640px] mx-auto text-center mt-6 leading-6'>
                            Acima is a 3rd party and has no affiliation with Neu Appliances. That's why we can give you our scoop on their offer without their influence.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-7 lg:my-12 xl:my-16 2xl:my-[72px] [&>*:nth-child(1)>ul>li:nth-child(1)]:!items-start [&>*:nth-child(1)>ul>li:nth-child(2)]:!items-start [&>*:nth-child(1)>ul>li:nth-child(4)]:!items-start'>
                            <PriceRangeCard title="Requirements" items={['US government-issued photo ID and SS# or ITIN#', '3 month history with current employer or source of income', 'Checking account for at least 90 days', 'Deposit $1,000 or more into your checking account', 'Positive checking account activity']} />
                            <PriceRangeCard title="Pros" items={['Fast Approval', 'No Credit Needed', 'Build Your Credit', '90 Day Payoff \n (Initial Payment) + (Price) + ($25)', 'Positive checking account activity']} />
                            <PriceRangeCard title="Cons" items={['Can be expensive if not paid off in 90 days']} />
                        </div>
                        <div className='flex maxsm:flex-col justify-center gap-2'>
                            <Link to="" className='inline-flex text-xs font-medium justify-center items-center gap-1 text-white border bg-b3 px-4 py-3 rounded-lg'>Apply Now <div className='w-4 h-4 flex items-center'><BiLinkExternal className="w-4 h-4 text-white" /></div></Link>
                            <Link to="" className='inline-flex text-xs font-medium justify-center items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg'>View Acima FAQs</Link>
                        </div>
                    </div>
                </div>


                <SatisfiedSection apiSectionName="financing-page-review" title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />
            </MainLayout>
        </>
    )
}

export default Financing