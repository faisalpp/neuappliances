import React from 'react';

const OurVison = ({ order, image, about, title, description }) => {

    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-24 3xl:gap-28 py-10 lg:py-16 xl:py-20 2xl:py-100px w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <div className={order}>
                    <img src={image} alt="" className='maxlg:object-contain lg:h-[420px] 2xl:h-[470px] 3xl:h-[500px]' />
                </div>
                <div className='flex items-center relative'>
                    <div className='maxlg:hidden absolute top-0 left-0 w-[300px] xl:w-[318px] h-[230px] xl:h-[250px] 3xl:h-[280px] bg-b3/10 rounded-3xl mt-4 -z-10'></div>
                    <div className='flex flex-col gap-3 3xl:gap-5 lg:ml-10'>
                        <span className='font-bold text-xs'>{about}</span>
                        <h3 className='font-bold text-xl xl:text-2xl 3xl:text-3xl'>
                            {title}
                        </h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurVison