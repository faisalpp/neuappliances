import React from 'react'
import CosmaticSlider from '../CosmaticSlider';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const RecentlyAddedSection = ({ title, active, buttonname }) => {

    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 maincontainer'>
                <h2 className='font-bold text-xl lg:text-2xl xl:text-32px text-center'>{title}</h2>

                <CosmaticSlider />

                <div className='flex justify-center mt-10 lg:mt-14'>
                    <Link to="" className={`whitespace-nowrap inline-flex items-center  gap-1 hover:gap-2 duration-300 px-4 py-3 rounded-lg font-semibold text-sm 3xl:text-base border border-b3 ${active ? 'text-white bg-b3 hover:bg-transparent hover:text-b3' : 'hover:bg-b3 hover:text-white text-b3'}`}>
                        <span>{buttonname}</span>
                        <AiOutlineArrowRight className="text-base" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RecentlyAddedSection