import React from 'react'
import { Link } from 'react-router-dom'
import ShieldSvg from '../../svgs/ShieldSvg'
import ScratchSvg from '../../svgs/ScratchSvg'
import BoxSvg from '../../svgs/BoxSvg'
import RoundedTick from '../../svgs/RoundedTick'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiPlayCircle } from 'react-icons/bi'

const ApplianceParts = () => {
    return (
        <div className='bg-[#F2F9FC] px-3 maxcosm:py-5 xs:p-10 2xl:p-7 3xl:p-10 rounded-3xl flex flex-col gap-6'>
            <div>
                <img src="nueappliancesoutlet.png" alt="nueappliancesoutlet" className='h-16' />
            </div>
            <div className='flex flex-col gap-3 text-b18'>
                <h3 className='font-bold text-2xl'>Neu Appliance Outlet</h3>
                <p className='leading-6'>
                    Appliances can be expensive and the need to replace an appliance seems to always happen at an inconvenient time. Our website's live inventory provides our customers with reliable up to date - remote access to all of our discount appliance inventory in real time.
                </p>
            </div>
            <div className='text-b18 flex flex-col gap-3'>
                <p className='font-bold'>
                    Neu Appliance Outlet provides the solutions you have been looking for:
                </p>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div className='p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <ShieldSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-xs text-center'>
                            Certified Refurbished Appliances
                        </p>
                    </div>
                    <div className='p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <ScratchSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-xs text-center'>
                            Scratch & Dent Appliances
                        </p>
                    </div>
                    <div className='p-2 bg-[#F7FBFD] flex flex-col items-center gap-2 rounded-lg'>
                        <BoxSvg className="w-10 h-10 mx-auto" />
                        <p className='text-b18 font-bold text-xs text-center'>
                            Open Box Appliances
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='text-b18 flex flex-col gap-3'>
                    <p>
                        Our Website's Tools For Success include:
                    </p>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-3'>
                            <div className='w-6 h-6'>
                                <RoundedTick />
                            </div>
                            <p>
                                High definition appliance pictures of the actual item you’re purchasing.
                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-6 h-6'>
                                <RoundedTick />
                            </div>
                            <p>
                                Detailed appliance specifications & dimensions.
                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-6 h-6'>
                                <RoundedTick />
                            </div>
                            <p>
                                Accurate Cosmetic Rating descriptions.
                            </p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-6 h-6'>
                                <RoundedTick />
                            </div>
                            <p>
                                Fast & convenient delivery.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='inline-flex gap-2 pt-6'>
                    <Link to="" className='bg-[#071822] px-4 py-3 rounded-lg text-xs text-white flex gap-1 items-center font-medium'><HiOutlineShoppingCart className="text-white text-sm" /><span>Shop Now</span></Link>
                    <Link to="" className='border border-[#071822] px-4 py-3 rounded-lg text-xs text-[#071822] flex gap-1 items-center font-medium'><BiPlayCircle className="text-[#071822] text-sm" /><span>Watch Video</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ApplianceParts