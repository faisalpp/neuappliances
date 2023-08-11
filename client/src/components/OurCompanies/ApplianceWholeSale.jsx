import React from 'react'
import { Link } from 'react-router-dom'
import { BiLinkExternal, BiPlayCircle } from 'react-icons/bi'
import ScratchSvg2 from '../../svgs/ScratchSvg2'

const ApplianceWholeSale = () => {
    return (
        <div className='bg-b8 px-3 maxcosm:py-5 xs:p-10 2xl:p-7 3xl:p-10 rounded-3xl flex flex-col gap-6'>
            <div>
                <img src="/nueapplianceswholesale.png" alt="nueapplianceswholesale" className='h-16' />
            </div>
            <div className='flex flex-col gap-3 text-b18'>
                <h3 className='font-bold text-2xl'>Neu Appliance Wholesale</h3>
                <p className='leading-6'>
                    Wholesale distributor of appliance liquidation inventory like Scratch and dent, customer return or salvage appliances by the truckload. We are appliance dealers' best option for wholesale appliance inventory in bulk.
                </p>
            </div>
            <div className='text-b18 flex flex-col gap-3'>
                <p className='font-bold'>
                    Our wholesale customers use our services to stock their showrooms with quality appliance inventory supply by the truckload including:
                </p>
                <ul className='grid grid-cols-1 coxs:grid-cols-2 gap-2 text-b18'>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            Scratch & Dent Appliances
                        </p>
                    </li>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            Customer Return Appliances
                        </p>
                    </li>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            Salvage
                            Appliances
                        </p>
                    </li>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            Used
                            Appliances
                        </p>
                    </li>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            General Liquidation Appliances
                        </p>
                    </li>
                    <li className='flex items-center gap-2 py-6 pl-4 pr-2 bg-[#F6FDFE] rounded-lg'>
                        <div className='w-8 h-8'>
                            <ScratchSvg2 />
                        </div>
                        <p className='text-sm font-medium'>
                            and more
                        </p>
                    </li>
                </ul>
            </div>
            <div className='inline-flex flex-col coxs:flex-row gap-2 pt-6 lg:pt-[57px]'>
                <Link to="https://www.neuappliancewholesale.com" className='bg-b3 px-4 py-3 rounded-lg text-xs text-white flex gap-1 items-center font-medium'><span>Go to Neu Appliance Wholesale</span><span><BiLinkExternal className="text-white text-sm" /></span></Link>
                <Link to="https://www.youtube.com/watch?v=UjUl8PSALbM" target="_blank" className='border border-b3 px-4 py-3 rounded-lg text-xs text-b3 flex gap-1 items-center font-medium whitespace-nowrap'><span><BiPlayCircle className="text-b3 text-sm" /></span><span>Watch Video</span></Link>
            </div>
        </div>
    )
}

export default ApplianceWholeSale