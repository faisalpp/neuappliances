import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HelpAndSupportCard = () => {
    return (
        <>
            <Link to="/help-card-page" className='bg-[#F8FBFB] rounded-2xl px-8 py-6'>
                <div className='flex justify-between text-b18 items-center'>
                    <h3 className='font-bold text-lg'>Lorem Ipsum Dolor</h3>
                    <span>
                        <AiOutlineArrowRight className='text-lg' />
                    </span>
                </div>
                <p className='mt-4 text-sm leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibul tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phaselluse eu lectus pellentesque tincidunt.
                </p>
            </Link>
        </>
    )
}

export default HelpAndSupportCard