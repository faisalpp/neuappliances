import React from 'react'

const ApplianceDetail = ({ title, description }) => {
    return (
        <div className='mt-2'>
            <h2 className='text-3xl xl:text-[40px] font-bold mb-6 text-b16'>{title}</h2>
            <p className='w-full md:w-2/3 text-b16'>{description}</p>
        </div>
    )
}

export default ApplianceDetail