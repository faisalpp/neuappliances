import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import SatisfiedSection from '../components/SatisfiedSection'
import NewsLetterSection from '../components/NewsLetterSection';
import ShieldSvg from '../svgs/ShieldSvg';
import ScratchSvg from '../svgs/ScratchSvg';
import BoxSvg from '../svgs/BoxSvg';
import RoundedTick from '../svgs/RoundedTick';
import SolutionSvg from '../svgs/SolutionSvg';
import ScratchSvg2 from '../svgs/ScratchSvg2';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiPlayCircle, BiLinkExternal } from 'react-icons/bi';

const OurCompanies = () => {

    return (
        <>
            <MainLayout>
                <div className='pt-10 lg:pt-16 xl:pt-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Our Companies</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Our Companies" description="Dedicated to providing innovative solutions for the appliance market. Our focus on customer service and out of the box thinking have allowed us to provide our community with savings on all things appliances." />

                    <p className='w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5'>
                        Our Appliance Outlets, Appliance Parts Store, and Appliance Wholesale Program each offer revolutionary solutions to problems within the Appliance Industry.
                    </p>
                </div>


                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-10 lg:py-16 xl:py-20 2xl:py-120px w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <div className='bg-[#F2F9FC] p-10 rounded-3xl flex flex-col gap-6'>
                        <div>
                            <img src="nueappliancesoutlet.png" alt="nueappliancesoutlet" className='h-16' />
                        </div>
                        <div className='flex flex-col gap-3 text-b18'>
                            <h3 className='font-bold text-2xl'>Neu Appliance Outlet</h3>
                            <p className='leading-6'>
                                Appliances can be expensive and the need to replace an appliance seems to always happen at an inconvenient time. Our website's live inventory provides our customers with reliable up to date - remote access to all of our discount appliance inventory in real time.
                            </p>
                        </div>
                        <div className='text-b18 flex flex-col gap-3'>
                            <p className='font-bold'>
                                Neu Appliance Outlet provides the solutions you have been looking for:
                            </p>
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='p-2 bg-white flex flex-col items-center gap-2 rounded-lg'>
                                    <ShieldSvg className="w-10 h-10 mx-auto" />
                                    <p className='text-b18 font-bold text-xs text-center'>
                                        Certified Refurbished Appliances
                                    </p>
                                </div>
                                <div className='p-2 bg-white flex flex-col items-center gap-2 rounded-lg'>
                                    <ScratchSvg className="w-10 h-10 mx-auto" />
                                    <p className='text-b18 font-bold text-xs text-center'>
                                        Scratch & Dent Appliances
                                    </p>
                                </div>
                                <div className='p-2 bg-white flex flex-col items-center gap-2 rounded-lg'>
                                    <BoxSvg className="w-10 h-10 mx-auto" />
                                    <p className='text-b18 font-bold text-xs text-center'>
                                        Open Box Appliances
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='text-b18 flex flex-col gap-3'>
                            <p>
                                Our Website's Tools For Success include:
                            </p>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6'>
                                        <RoundedTick />
                                    </div>
                                    <p>
                                        High definition appliance pictures of the actual item you’re purchasing.
                                    </p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6'>
                                        <RoundedTick />
                                    </div>
                                    <p>
                                        Detailed appliance specifications & dimensions.
                                    </p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6'>
                                        <RoundedTick />
                                    </div>
                                    <p>
                                        Accurate Cosmetic Rating descriptions.
                                    </p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='w-6 h-6'>
                                        <RoundedTick />
                                    </div>
                                    <p>
                                        Fast & convenient delivery.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='inline-flex gap-2'>
                            <Link to="" className='bg-[#071822] px-4 py-3 rounded-lg text-xs text-white flex gap-1 items-center font-medium'><HiOutlineShoppingCart className="text-white text-sm" /><span>Shop Now</span></Link>
                            <Link to="" className='border border-[#071822] px-4 py-3 rounded-lg text-xs text-[#071822] flex gap-1 items-center font-medium'><BiPlayCircle className="text-[#071822] text-sm" /><span>Watch Video</span></Link>
                        </div>
                    </div>



                    <div className='bg-[rgba(248,211,87,0.08)] p-10 rounded-3xl flex flex-col gap-6'>
                        <div>
                            <img src="nueappliancesparts.png" alt="nueappliancesparts" className='h-16' />
                        </div>
                        <div className='flex flex-col gap-3 text-b18'>
                            <h3 className='font-bold text-2xl'>Neu Appliance Parts</h3>
                            <p className='leading-6'>
                                Replacing an appliance part can be difficult and expensive. Correctly identifying which part you need and limited applianceion rates make finding Affordable In-Stock parts nearly impossible.
                            </p>
                        </div>
                        <div className='text-b18 flex flex-col gap-3'>
                            <p className='font-bold'>
                                Neu Appliance Parts provides the solution you are looking for:
                            </p>
                            <div className='text-b18 flex flex-col gap-3'>
                                <p>
                                    Our Website's Tools For Success include:
                                </p>
                                <ul className='flex flex-col gap-2'>
                                    <li className='flex items-start gap-3 py-[15px]'>
                                        <div className='w-10 h-10'>
                                            <SolutionSvg />
                                        </div>
                                        <p className='text-sm font-medium'>
                                            Revolutionary Appliance Parts store specializing in providing deeply discounted In-Stock appliance parts.
                                        </p>
                                    </li>
                                    <li className='flex items-start gap-3 py-[15px]'>
                                        <div className='w-10 h-10'>
                                            <SolutionSvg />
                                        </div>
                                        <p className='text-sm font-medium'>
                                            Specializing in Open Box and Like/New Appliance parts to save our customers money, our appliance processing center uninstalls tens of thousands of Like New appliance parts from new scratch and dent appliances every year.
                                        </p>
                                    </li>
                                    <li className='flex items-start gap-3 py-[15px]'>
                                        <div className='w-10 h-10'>
                                            <SolutionSvg />
                                        </div>
                                        <p className='text-sm font-medium'>
                                            Offering the public and appliance repair professionals an affordable solution for otherwise hard to source or expensive appliance parts.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='inline-flex gap-2'>
                            <Link to="" className='bg-b4 px-4 py-3 rounded-lg text-xs text-b16 flex gap-1 items-center font-medium'><span>Go to Neu Appliance Parts</span><BiLinkExternal className="text-b18 text-sm" /></Link>
                            <Link to="" className='border border-[#071822] px-4 py-3 rounded-lg text-xs text-[#071822] flex gap-1 items-center font-medium'><BiPlayCircle className="text-[#071822] text-sm" /><span>Watch Video</span></Link>
                        </div>
                    </div>




                    <div className='bg-b8 p-10 rounded-3xl flex flex-col gap-6'>
                        <div>
                            <img src="nueapplianceswholesale.png" alt="nueapplianceswholesale" className='h-16' />
                        </div>
                        <div className='flex flex-col gap-3 text-b18'>
                            <h3 className='font-bold text-2xl'>Neu Appliance Wholesale</h3>
                            <p className='leading-6'>
                                Wholesale distributor of appliance liquidation inventory like Scratch and dent, customer return or salvage appliances by the truckload. We are appliance dealers' best option for wholesale appliance inventory in bulk.
                            </p>
                        </div>
                        <div className='text-b18 flex flex-col gap-3'>
                            <p className='font-bold'>
                                Our wholesale customers use our services to stock their showrooms with quality appliance inventory supply by the truckload including:
                            </p>
                            <ul className='grid grid-cols-2 gap-2 text-b18'>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        Scratch & Dent Appliances
                                    </p>
                                </li>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        Customer Return Appliances
                                    </p>
                                </li>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        Salvage
                                        Appliances
                                    </p>
                                </li>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        Used
                                        Appliances
                                    </p>
                                </li>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        General Liquidation Appliances
                                    </p>
                                </li>
                                <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                                    <div className='w-8 h-8'>
                                        <ScratchSvg2 />
                                    </div>
                                    <p className='text-sm font-medium'>
                                        and more
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='inline-flex gap-2 pt-[57px]'>
                            <Link to="" className='bg-b3 px-4 py-3 rounded-lg text-xs text-white flex gap-1 items-center font-medium'><span>Go to Neu Appliance Wholesale</span><span><BiLinkExternal className="text-white text-sm" /></span></Link>
                            <Link to="" className='border border-b3 px-4 py-3 rounded-lg text-xs text-b3 flex gap-1 items-center font-medium'><BiPlayCircle className="text-b3 text-sm" /><span>Watch Video</span></Link>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className='w-full max-w-1680px mx-auto'>
                    <iframe className='w-full h-[700px] 3xl:h-[920px]' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                {/* Shop Austin Section */}
                <ShopAustinSection />
                {/* Client Reviews */}

                <SatisfiedSection title="Testimonials" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />

            </MainLayout>
        </>
    )
}

export default OurCompanies