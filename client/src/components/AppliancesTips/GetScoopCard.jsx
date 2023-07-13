import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const GetScoop = () => {
    const ScoopCards = [
        {
            image: 'refrigrator.png',
            title: 'Refrigerators & Freezers',
            tips: 8,
        },
        {
            image: 'dryers.png',
            title: 'Dryers',
            tips: 8,
        },
        {
            image: 'gasstoves.png',
            title: 'Gas Stoves',
            tips: 8,
        },
        {
            image: 'refrigrator.png',
            title: 'Refrigerators & Freezers',
            tips: 8,
        },
        {
            image: 'p1.png',
            title: 'Washing Machines',
            tips: 8,
        },
        {
            image: 'dryers.png',
            title: 'Dryers',
            tips: 8,
        },
    ]
    return (
        <div className='max-w-[888px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6'>
            {ScoopCards.map((scoopcard) => (
                <Link to="/tips-forregerators-and-freezers" className='w-full h-full'>
                    <div className='flex gap-4 items-center text-white bg-white/20 w-full h-full p-5 sm:p-7 xl:p-10 rounded-[19.021px] border border-white/50'>
                        <div className='bg-white min-w-[56px] h-[56px] flex items-center justify-center p-2 rounded-lg'>
                            <img src={scoopcard.image} alt="" className='object-contain w-full h-full' />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h3 className='text-base sm:text-lg font-bold'>{scoopcard.title}</h3>
                            <span className='text-sm'>
                                {scoopcard.tips} tips
                            </span>
                        </div>
                        <div>
                            <FiChevronRight className='w-6 h-6' />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default GetScoop