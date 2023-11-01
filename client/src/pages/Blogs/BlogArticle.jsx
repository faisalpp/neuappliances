import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import NewsLetterSection from '../../components/NewsLetterSection';
import SatisfiedSection from '../../components/SatisfiedSection';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GetBlogBySlug } from '../../api/frontEnd'
import moment from 'moment'
import parse from 'html-react-parser'
import Loader2 from '../../components/Loader/Loader2';

const BlogArticle = () => {

    const [blog, setBlog] = useState([])

    const navigate = useNavigate()
    const { slug } = useParams()

    const [loading, setLoading] = useState(false)

    const GetBlog = async () => {
        setLoading(true)
        const data = { slug: slug }
        const res = await GetBlogBySlug(data)
        // console.log(res)
        if (res.status === 200) {
            setBlog(res.data.blog)
            setLoading(false)
        } else {
            setLoading(false)
            navigate('/isr')
        }
    }

    useEffect(() => {
        GetBlog()
    }, [])

    const FormatDate = (date) => {
        return moment(date).format('MMMM D, YYYY');
    }


    return (
        <>
            {loading ? <Loader2 /> :
                <MainLayout>

                    <div className='py-10 lg:py-16 xl:py-20 w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                        <div className='max-w-[960px] mx-auto grid grid-cols-1 gap-10 md:gap-14'>
                            <div>
                                <h1 className='text-28px coxs:text-3xl sm:text-4xl lg:text-40px font-bold mb-4 leading-tight'>
                                    {blog.length > 0 ? blog[0].title : null}
                                </h1>
                                <span className='md:text-xl tracking-[-0.4px]'>{blog.length > 0 ? FormatDate(blog[0].createdAt) : null}</span>
                            </div>
                            <div>
                                {blog.length > 0 ? parse(blog[0].content) : null}
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

                    <SatisfiedSection apiSectionName="blog-page-review" title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />

                    <NewsLetterSection backimage="/Newsletter.webp" />
                </MainLayout>}
        </>
    )
}

export default BlogArticle