import React from 'react';
import MainLayout from '../../layout/MainLayout';
import NewsLetterSection from '../../components/NewsLetterSection';
import SatisfiedSection from '../../components/SatisfiedSection';
import { Link } from 'react-router-dom';
import ArticleCard from '../../components/Blogs/ArticleCard';
import { FaTwitter } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';

const BlogArticle = () => {

    return (
        <>
            <MainLayout>

                <div className='py-10 lg:py-16 xl:py-20 w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='max-w-[960px] mx-auto grid grid-cols-1 gap-10 md:gap-14'>
                        <div>
                            <h1 className='text-28px coxs:text-3xl sm:text-4xl lg:text-40px font-bold mb-4 leading-tight'>
                                Congue gravida semper fusce eu et elementum. Mi fusce eu et elementum tempor.
                            </h1>
                            <span className='md:text-xl tracking-[-0.4px]'>July 19, 2022</span>
                        </div>
                        <div>
                            <img src="/blogs/article/washing.png" className='lg:h-[400px] w-full' alt="" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-xl sm:text-2xl'>
                                How to Pick the Right Refrigerator
                            </h2>
                            <p className='leading-8 tracking-032'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula. Aenean lacus libero, varius sed elit eu, pellentesque malesuada arcu. Ut id porta erat. Phasellus luctus metus imperdiet lobortis tempus. Phasellus at turpis metus. Vestibulum pharetra elit eget augue gravida dictum. Nunc malesuada a nibh eget fringilla. Nam sollicitudin ultrices erat.
                            </p>
                        </div>

                        <div className='[&>div:nth-child(even)]:flex-row-reverse grid grid-cols-1 gap-14'>
                            <ArticleCard image="right_refrigrator.png" />
                            <ArticleCard image="washing2.png" />
                            <ArticleCard image="washing3.png" />
                            <ArticleCard image="washing4.png" />
                        </div>
                        {/* Share Post */}
                        <div className='flex gap-2'>
                            <Link to="" className='flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300'>
                                <FaTwitter />
                            </Link>
                            <Link to="" className='flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300'>
                                <RiLinkedinFill />
                            </Link>
                            <Link to="" className='flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300'>
                                <AiOutlineInstagram />
                            </Link>
                        </div>
                    </div>

                </div>

                <SatisfiedSection title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />

                <NewsLetterSection backimage="Newsletter.png" />
            </MainLayout>
        </>
    )
}

export default BlogArticle