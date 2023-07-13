import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ image, title, publish, readMore }) => {
    return (
        <div className='xl:p-6 2xl:p-[30px] grid grid-cols-1 gap-5'>
            <img src={`/blogs/` + image} alt="" className='w-full h-48 lg:h-52 xl:h-[238px]' />
            <div className='flex flex-col gap-[10px]'>
                <span className='text-xs text-b24 font-semibold uppercase'>{publish}</span>
                <h3 className='font-bold lg:text-lg xl:text-xl'>{title}</h3>
            </div>
            <div>
                <Link to={publish} className='px-5 py-[10px] rounded border border-b3  text-b3 font-bold hover:bg-b3 hover:text-white duration-300 text-xs'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard