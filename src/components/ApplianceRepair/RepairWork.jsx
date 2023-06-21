import React from 'react'

const RepairWork = () => {
    return (
        <div className='bg-b8'>
            <div className='py-10 lg:py-16 xl:py-20 3xl:py-[144px] w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <div className='bg-b3 rounded-3xl px-4 py-16 md:p-16 flex maxlg:flex-col gap-10 3xl:gap-16'>
                    <div className='lg:min-w-[320px] lg:h-[320px] xl:min-w-[352px] xl:h-[352px]'>
                        <img src="appliance/appliancework.png" alt="" />
                    </div>
                    <div>
                        <div className='rounded-3xl bg-[#18B5BA] px-4 py-7 xs:p-7 sm:p-11 3xl:px-16 3xl:py-60px'>
                            <h3 className='text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-bold mb-6'>How Appliance Repair Works</h3>
                            <p className='text-base xs:text-xl xs:leading-8 text-white'>
                                We can't speak for others but typically an appliance repair technician will come on site and diagnose your appliance for a flat rate. Usually this appliance diagnostic fee is waived if you choose to complete the repair on your appliance. If you choose not to complete the repair you usually only owe the diagnostic fee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepairWork