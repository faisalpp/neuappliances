import React from 'react';

const AboutCeo = () => {

    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 2xl:py-100px w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto bg-b5'>
                <div className="w-full max-w-[844px] mx-auto flex flex-col items-center text-center gap-5">
                    <div>
                        <img src="quotes.png" alt="quotes" className='2xl:w-24 2xl:h-[67px]' />
                    </div>
                    <p className='text-2xl 3xl:text-3xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero ultrices dis a arcu. Eu rhoncus, non suspendisse nec consequat enim. Proin natoque malesuada donec convallis lectus euismod nec, in.
                    </p>
                    <div>
                        <strong className='text-sm'>John Smith</strong>
                        <br />
                        <span className='text-sm'>
                            CEO
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCeo