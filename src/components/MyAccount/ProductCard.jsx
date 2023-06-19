import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ToolTip from '../ToolTip'
import { IoCloseSharp } from 'react-icons/io5'

const ProductCard = ({ sliderstyle, stars }) => {
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
            <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
        ));
        return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
    }
    return (
        <>
            <div className={`relative flex flex-col border border-b14 rounded-2xl bg-white overflow-hidden`} >
                <span className='absolute top-0 right-0 bg-b4 rounded-2xl mt-2 mr-1 px-4 py-2 text-xs font-bold z-20' >50% Off</span>
                <div className='flex w-full justify-center xl:px-5 lg:px-5 px-3 pt-10' >
                    <img src="/p1.png" className=' xl:w-54 lg:w-52 w-[160px] h-full' alt='refrigrator' />
                </div>
                {/* Remove Item */}
                <button type="button" className='absolute top-0 left-4 w-10 h-10 rounded-full bg-b3 flex justify-center items-center'>
                    <IoCloseSharp className="text-3xl text-white" />
                </button>

                <div className='flex flex-col gap-y-3 my-5 mx-5 xl:mx-[37.41px]' >
                    <p className='font-semibold font-reg xl:text-base text-sm !leading-5 text-line-camp'>White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
                    <div className='flex' ><h4 className='text-b3 font-semibold' >$279.00</h4>
                        <div className='flex justify-end w-full space-x-2 items-center' >
                            <strike className="text-[rgba(17,16,16,0.64)]">$279.00</strike>
                            <span className='bg-b4 rounded-xl font-semibold px-2 py-1 text-xs' >- 27%</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-2' ><div className='flex items-center gap-1' ><h4 className='text-sm font-semibold text-b15' >Cosmetic Rating</h4><ToolTip color="text-b3" /></div><div className='flex mt-2 items-center' ><StarIconPrinter numberOfTimes={stars} /> </div></div>
                    <div className='flex items-center space-x-10' >
                        <div className='flex font-semibold text-sm text-b15' ><h4>Discount</h4>&nbsp;%</div>
                        <div className='grow bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-20 h-2' ></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard 