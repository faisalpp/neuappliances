import React, { useState, useMemo } from 'react';
import MainLayout from '../layout/MainLayout';
import Pagination from '../Pagination/Pagination.js';
import { RiArrowDropRightLine } from 'react-icons/ri';


const StayInLoop = () => {

    let PageSize = 12;

    const data = ['/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png', '/video.png']

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Back to all appliance</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Buying Options</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <h1 className='text-32px font-bold mt-6'>
                        Stay in the Loop
                    </h1>
                </div>

                <div className='pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {currentTableData.map((image) => (
                            <div className='w-full'>
                                <img src={image} alt="" className='h-[300px] object-cover w-full rounded-2xl' />
                            </div>
                        ))}
                    </div>
                    <div>
                        <Pagination
                            className="pagination-bar mt-9"
                            currentPage={currentPage}
                            totalCount={data.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default StayInLoop