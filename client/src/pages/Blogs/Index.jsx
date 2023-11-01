import React, { useEffect, useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import ApplianceDetail from '../../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import NewsLetterSection from '../../components/NewsLetterSection';
import SatisfiedSection from '../../components/SatisfiedSection';
import { Link } from 'react-router-dom';
import RecentStories from '../../components/Blogs/RecentStories';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GetRecentBlog } from '../../api/frontEnd'
import Loader2 from '../../components/Loader/Loader2'

const Index = () => {

    const [clicks, setClicks] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [count, setCount] = useState(0)
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        GetBlogs()
    }, [])

    const GetBlogs = async () => {
        setLoading(true)
        const params = { page: page, limit: limit }
        const res = await GetRecentBlog(params);
        // console.log(res)
        if (res.status === 200) {
            setCount(Math.ceil(res.data.totalCount / limit))
            setBlogs(res.data.blogs)
            setLoading(false)
        } else {
            setBlogs([])
            setLoading(false)
        }
    }

    const MoreBlogs = async (nextPage) => {
        setLoad(true)
        const params = { page: nextPage, limit: limit }
        const res = await GetRecentBlog(params);
        // console.log(res)
        if (res.status === 200) {
            setCount(Math.ceil(res.data.totalCount / limit))
            setBlogs(prevBlogs => [...prevBlogs, ...res.data.blogs])
            setLoad(false)
        } else {
            setLoad(false)
        }
    }

    const LoadMore = () => {
        if (clicks < page) {
            setPage(prevPage => prevPage + 1);
            setClicks(prevClicks => prevClicks + 1);
            MoreBlogs(page + 1)
        }
    }

    return (
        <>
            {loading ? <Loader2 /> :
                <MainLayout>
                    <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                        {/* Bread Crumbs Start */}
                        <div className='flex items-center' >
                            <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Blog</h5>
                        </div>
                        {/* Bread Crumbs End */}
                        <ApplianceDetail title="Appliance Industry Blog" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula." />

                        <button type="button" className='inline-flex text-xs font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6'>See All Stories <span><AiOutlineArrowDown className='text-base' /></span></button>
                    </div>

                    {/* Recent Stories */}
                    <RecentStories load={load} data={blogs} LoadMore={LoadMore} />

                    <SatisfiedSection apiSectionName="blog-page-review" title="Our Customers Are RAVING About Our Appliance Outlet" dots={true} />

                    <NewsLetterSection backimage="Newsletter.webp" />
                </MainLayout>}
        </>
    )
}

export default Index