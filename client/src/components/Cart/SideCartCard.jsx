import React from 'react'
import ToolTip from '../ToolTip'
import { AiFillStar } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SideCartCard = () => {
    return (
        <div className='flex justify-start mt-3 gap-3' >
            <img src="/p1.png" className='w-16 h-16' alt='' />
            <div className='flex flex-col gap-2' >
                <p className='text-sm font-semibold line-clamp-2' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls</p>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='flex gap-1 items-center'>
                            <span className='text-black/50 text-xs font-semibold'>
                                Cosmetic <br /> Rating
                            </span>
                            <span>
                                <ToolTip color="text-b3" />
                            </span>
                        </div>
                        <div className='inline-flex items-center'>
                            <AiFillStar className='text-b7 text-lg' />
                            <AiFillStar className='text-b7 text-lg' />
                            <AiFillStar className='text-b7 text-lg' />
                            <AiFillStar className='text-b7 text-lg' />
                        </div>
                    </div>
                    <div className='space-x-1'>
                        <strike className='text-b25 text-xs'>
                            $379.00
                        </strike>
                        <span className='font-semibold text-b3 text-sm'>
                            $279.00
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <button>
                    <RiDeleteBin6Line className='text-xl text-b3' />
                </button>
            </div>
        </div>
    )
}

export default SideCartCard