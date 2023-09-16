import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import HelpAndSupportCard from '../../components/HelpAndSupportCard';
import { getHelpTabs } from '../../api/admin/Help&Support/helpSupportTab'
import { GetHelpByCateogry } from '../../api/admin/Help&Support/helpSupport'
import Pagination2 from '../../components/Pagination/Pagination2'

const HelpAndSupport = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('delivery');
    const [fadeOut, setFadeOut] = useState(false);
    const [totalCount, setTotalCount] = useState(0);

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)

    useEffect(() => {
        GetBlog()
    }, [activeTab, page])

    const GetBlog = async () => {
        setLoading(true)
        const params = { page: page, limit: limit }
        const data = { category: activeTab }
        const res = await GetHelpByCateogry(data, params)
        console.log(res)
        if (res.status === 200) {
            setLoading(false)
            setBlogs(res.data.helps)
            setTotalCount(Math.ceil(res.data.totalCount / limit))
            console.log(Math.ceil(res.data.totalCount / limit))
        } else {
            setBlogs([])
            setLoading(false)
        }
    }





    const handleTabClick = (tabId) => {
        setFadeOut(true); // Trigger fade-out animation
        setTimeout(() => {
            setActiveTab(tabId);
        }, 200); // W
    };

    useEffect(() => {
        setFadeOut(false); // Reset fade-out animation after tab change
    }, [activeTab]);

    // const [tabLoading,setTabLoading] = useState(false)
    const [helpTabs, setHelpTabs] = useState([])

    useEffect(() => {
        const GetHelpTabs = async () => {
            const res = await getHelpTabs();
            // console.log(res)
            if (res.status === 200) {
                setHelpTabs(res.data.helpTabs)
                setActiveTab(res.data.helpTabs[0].slug)
            } else {
                setHelpTabs([])
            }
        }
        GetHelpTabs()
    }, [])


    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer flex flex-col gap-4' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b3' /><h5 className='text-xs text-black' >Help & Support Center</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <h1 className='text-32px lg:text-40px text-b18 font-bold'>
                        Help & Support
                    </h1>

                    {/* Search Bar */}
                    <div className='max-w-[560px] relative w-full'>
                        <input type="search" placeholder='What do you need help with?' className='placeholder:text-[#777E90] placeholder:text-xs w-full outline-none border border-[rgba(0,0,0,0.16)] pl-10 py-4 pr-4 rounded-lg' name="" id="" />
                        <AiOutlineSearch className='absolute top-5 left-4 text-base' />
                    </div>
                </div>
                {/* Help and Support */}
                <div className='pb-10 lg:pb-16 xl:pb-20 maincontainer flex maxlg:flex-col gap-10 lg:gap-7 xl:gap-10'>
                    <div className="tab-buttons maxlg:order-2 lg:max-w-[250px] 2xl:max-w-xs lg:w-full flex flex-col gap-2">
                        {helpTabs.map((tab, index) => <button key={index} className={`px-5 xl:px-6 py-4 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab.slug ? 'active text-white bg-b3' : 'text-b23'}`} onClick={() => handleTabClick(tab.slug)}>
                            <span>{tab.title}</span>{activeTab === tab.slug ? <FiChevronRight /> : ''}
                        </button>)}
                    </div>
                    <div className='flex flex-col w-full ' >
                        {loading ? <div className='flex  items-center w-full justify-center' ><img src="/loader2.gif" /></div> : <div className={`tab-content w-full ${fadeOut ? 'fade-out' : ''}`}>
                            {blogs.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                                {blogs.map((blog) => <HelpAndSupportCard title={blog.title} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' category={blog.category} slug={blog.slug} shortDescription={blog.shortDescription} />)}
                            </div>
                                :
                                <div className='flex mt-10 justify-center w-full h-full' >
                                    <img src="/not-found.webp" className='w-36 h-36' />
                                </div>
                            }
                        </div>}
                        <Pagination2 page={page} setPage={setPage} totalPages={totalCount} />
                    </div>
                </div>
            </MainLayout >
        </>
    )
}

export default HelpAndSupport