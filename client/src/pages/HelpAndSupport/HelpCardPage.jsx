import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { getHelpBySlug } from '../../api/admin/Help&Support/helpSupport'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import Loader2 from '../../components/Loader/Loader2';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const HelpCardPage = () => {

    const { slug } = useParams()
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false)


    const GetBlog = async () => {
        setLoading(true)
        const data = { slug: slug }
        const res = await getHelpBySlug(data)
        
        if (res.status === 200) {
            setLoading(false)
            setBlog(res.data.help)
            setTotalCount(Math.ceil(res.data.totalCount / limit))
        } else {
            setBlog([])
            setLoading(false)
        }
    }

    useEffect(() => {
        GetBlog()
    }, [])


    function wrapper(inputString) {
        if (inputString) {
            return inputString[0].toUpperCase() + inputString.slice(1);
        }
    }

    return (
        <>
            {loading ? <Loader2 /> :
                <MainLayout>
                    <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                        <Link to="/helpful-appliances-tips" className='flex mb-10 lg:hidden items-center gap-2 text-sm text-b3 font-semibold'><AiOutlineArrowLeft />Back</Link>
                        {/* Bread Crumbs Start */}
                        <div className='flex items-center flex-wrap' >
                            <h5 className='text-[10px] sm:text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >Help & Support Center</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >{blog.length > 0 ? wrapper(blog[0].category) : null}</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-gray-500' >{blog.length > 0 ? blog[0].title : null}</h5>
                        </div>
                        {/* Bread Crumbs End */}
                    </div>
                    <div className='pb-10 lg:pb-16 xl:pb-20 w-full px-4 sm:px-56 lg:px-[250px] xl:px-[270px] 2xl:px-[310px] mx-auto' >
                        <h1 className='font-bold mb-10 text-3xl' >{blog.length > 0 ? blog[0].title : null}</h1>
                        {blog.length > 0 ? parse(blog[0].content) : null}
                    </div>
                </MainLayout>}
        </>
    )
}

export default HelpCardPage