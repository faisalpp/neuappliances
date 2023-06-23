import React from 'react'
import NeuShieldPopup from '../NeuShieldPopup'
import FreeCurbsideReturn from '../FreeCurbsideReturn'
import CompleteLaundary from '../CompleteLaundary'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'

const RecentStories = () => {
    const blogs = [
        {
            image: 'blog1.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog2.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog3.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog4.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog5.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog6.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog7.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog8.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
        {
            image: 'blog9.png',
            title: 'Congue gravida semper fusce eu et elementum. Mi tempor.',
            publish: 'AUGUST 10',
            read_more_link: '',
        },
    ]
    return (
        <div className='pb-10 lg:pb-16 xl:pb-20 pt-5 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
            <h2 className='text-2xl xl:text-[32px] font-bold text-b18 text-center'>Recent Stories</h2>
            <div className='my-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 2xl:gap-6'>
                {blogs.map((blog, index) => (
                    <BlogCard image={blog.image} title={blog.title} publish={blog.publish} readMore={blog.read_more_link} />
                ))}
            </div>
            <div className='flex justify-center'>
                <Link to="" className='px-4 py-3 rounded-lg border bg-b3 text-white border-b3 hover:bg-white hover:text-b3 font-medium duration-300 text-xs'>Read More</Link>
            </div>
        </div>
    )
}

export default RecentStories