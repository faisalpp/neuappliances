import React from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { AiOutlineArrowDown } from 'react-icons/ai';
import CosmaticCard from '../components/CosmaticCard';
import SatisfiedSection from '../components/SatisfiedSection';
import MassiveAppliance from '../components/OurStory/MassiveAppliance';
import NewsLetterSection from '../components/NewsLetterSection';

const Pricing = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <div className='hidden md:flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Pricing</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Pricing, Conditions & Discounts" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus v" />
                    <p className='mt-5 text-b16 w-full md:w-2/3 maxmd:text-center 3xl:w-[1135px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.
                    </p>
                    <a href="#cosmatic" className='inline-flex text-xs justify-center maxsm:w-full font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>Learn More <span><AiOutlineArrowDown className='text-base' /></span></a>
                </div>

                <div id='cosmatic'>
                    <CosmaticCard />
                </div>

                <SatisfiedSection apiSectionName="home-page-footer-review" title="Join Thousands of Satisfied Customers." dots={true} />


                <div className='w-full 3xl:max-w-1680px mx-auto'>
                    <iframe className='w-full h-[250px] md:h-[700px] 2xl:h-[920px]' src="https://youtube.com/embed/0K0Nx1nG3x4" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <MassiveAppliance title="Shop 5-Stars Products" sliderstyle="mx-2 3xl:mx-5" />
                <MassiveAppliance title="Shop 4-Stars Products" customstyle="!pt-0" sliderstyle="mx-2 3xl:mx-5" />
                <MassiveAppliance title="Shop 3-Stars Products" customstyle="!pt-0" sliderstyle="mx-2 3xl:mx-5" />
                <MassiveAppliance title="Shop 2-Stars Products" customstyle="!pt-0" sliderstyle="mx-2 3xl:mx-5" />

                <SatisfiedSection apiSectionName="home-page-footer-review" title="Join Thousands of Satisfied Customers." dots={true} />

                <NewsLetterSection backimage="Newsletter.webp" />

            </MainLayout>
        </>
    )
}

export default Pricing