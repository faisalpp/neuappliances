import React from 'react'

const ApplianceDetail = ({ title, description }) => {
    return (
        <div className='mt-2'>
            <h1 className='text-2xl lg:text-3xl xl:text-[40px] font-bold mb-6 text-b16'>{title}</h1>
            <p className='w-full md:w-2/3 3xl:w-[1135px] text-b16'>{description}</p>
        </div>
    )
}

export default ApplianceDetail