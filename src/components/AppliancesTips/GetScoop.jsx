import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import GetScoopCard from './GetScoopCard'

const GetScoop = () => {
    return (
        <div className='relative py-10 lg:py-16 xl:py-20 2xl:py-120px w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
            <img src="insidescoop.png" alt="insidescoop" className='-z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full' />
            <h2 className='text-white font-bold mb-10 lg:mb-16 xl:mb-20 text-xl lg:text-2xl xl:text-3xl 2xl:text-32px text-center'>
                Get the Inside Scoop
            </h2>
            <GetScoopCard />
        </div>
    )
}

export default GetScoop