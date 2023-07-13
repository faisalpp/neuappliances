import React from 'react'

const CartCard = () => {

    return (
        <div className='flex justify-start mt-3 gap-14px' >
            <div className='max-w-[64px] relative w-full'>
                <img src="/p1.png" className='w-16 h-16 object-contain' alt='' />
                <span className='absolute flex justify-center items-center text-xs font-medium w-5 h-5 rounded-full bg-b3 text-white -right-2 -top-2'>
                    1
                </span>
            </div>
            <div className='flex items-center gap-14px' >
                <div>
                    <h3 className='text-sm text-b16 font-medium tracking-032 !leading-[150%]'>
                        White GE 1.7 cu. ft. Over the Range Microwave with Convenience
                    </h3>
                    <p className='text-b25 text-xs'>
                        5 Stars (Flawless Cosmetic Rating)
                    </p>
                </div>
                <div className='flex justify-between text-b3 text-sm font-medium'>
                    $100.00
                </div>
            </div>
        </div>
    )
}

export default CartCard