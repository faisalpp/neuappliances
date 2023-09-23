import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import Pagination from '../Pagination/Pagination';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { getVideoMediaAll } from '../api/frontEnd'
import Pagination2 from '../components/Pagination/Pagination2';
import Loader from '../components/Loader/Loader'


const StayInLoop = () => {

    const [media, setMedia] = useState([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const GetLoopMedia = async () => {
            setIsLoading(true)
            const params = { page: page, limit: limit };
            const data = { section: 'stay-in-loop-videos' }
            const res = await getVideoMediaAll(params, data);
            console.log(res)
            if (res.status === 200) {
                setMedia(res.data.loops)
                setTotalPages(Math.ceil(res.data.totalCount / limit))
                setIsLoading(false)
            } else {
                setIsLoading(false)
                console.log(res)
            }
        }
        GetLoopMedia()
    }, [page])

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Stay In The Loop</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <h1 className='text-32px font-bold mt-6'>
                        Stay in the Loop
                    </h1>
                </div>

                <div className='pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    {isLoading ? <div className='flex items-center justify-center' ><img src="/loader-bg.gif" /></div> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6'>
                            {media.map((item, Index) => (
                                <div className='w-fit' key={Index}>
                                    {item.type === 'iframe' ? <iframe src={item.url} title={item.url} className='h-[250px] object-cover w-full rounded-2xl' ></iframe> : <video src={item.url} className='h-[300px] object-cover w-full rounded-2xl' controls />}
                                </div>
                            ))}
                        </div>}
                    <div>
                        <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default StayInLoop