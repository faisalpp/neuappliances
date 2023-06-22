import React from 'react'
import { AiFillStar, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaPlus, FaQuestion } from 'react-icons/fa'
import StackableSvg from '../svgs/StackableSvg'
import SteamSvg from '../svgs/SteamSvg'
import GasSvg from '../svgs/GasSvg'
import ToolTip from './ToolTip'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'

const CompleteLaundary = ({ closeModal }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full overflow-y-auto h-screen bg-black/40 z-50 !m-0'>
            <div className='relative max-w-[1440px] grid grid-cols-1 gap-60px mx-auto h-auto bg-white my-10 p-60px rounded-3xl'>
                <button type='button' onClick={closeModal} className='absolute -right-10 top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                    <IoCloseOutline className='text-3xl' />
                </button>
                <div className='grid grid-cols-[1fr_auto_1fr] gap-[46px] lg:gap-10 w-full justify-center items-center'>
                    <div className='flex flex-col gap-4 items-center w-full' >
                        <h4 className='text-xl font-semibold' >Washer</h4>
                        <div className='py-6 pr-12 bg-white border-[1px] border-b3 rounded-xl w-full' >
                            <div className='flex gap-4 items-start w-full'>
                                <div className='max-w-[195px] w-full h-[209px]'>
                                    <img src='p1.png' className='w-full h-full object-contain' alt='' />
                                </div>
                                <div className='grid grid-cols-1 gap-4 w-full' >
                                    <p className='font-semibold line-clamp-1 leading-5 mb-2' >White GE 1.7 cu. ft. Over the Range Microwave with Convenience Cooking Controls for long text</p>
                                    <div className='flex items-center gap-x-5' >
                                        <span className='font-semibold text-xl text-b3' >$279.00</span>
                                        <strike className="text-b23" >$279.00</strike>
                                        <span className='flex bg-b4 text-xs text-b16 px-2 py-1 font-semibold rounded-full' >-27%</span>
                                    </div>
                                    <div className='flex items-center gap-5 2xl:gap-[10px]' >
                                        <div className='flex items-center gap-1' >
                                            <h4 className='lg:text-sm text-xs font-semibold w-max text-b15' >Cosmetic Rating</h4>
                                            <ToolTip color="text-b15/80" />
                                        </div>
                                        <div className='flex items-center'>
                                            <AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' /><AiFillStar className='text-b7 lg:text-lg text-xs' />
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-5 2xl:gap-10' >
                                        <h4 className='lg:text-sm text-xs font-semibold text-b15' >Appliance Brand</h4>
                                        <h4 className='lg:text-sm text-xs font-medium w-max text-black' >Whirlpool</h4>
                                    </div>
                                    <div className='lg:flex hidden items-center gap-x-14' >
                                        <div className='flex font-semibold text-sm text-b15' ><h4>Discount</h4>&nbsp;%</div>
                                        <div className='w-full bg-gray-100 rounded-lg' ><span className='flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2' ></span></div>
                                    </div>
                                    <ul className='flex flex-col gap-y-3 ml-1 text-black' >
                                        <li>. Lorem ipsum dolor alter miler amigos</li>
                                        <li>. Lorem ipsum dolor alter miler amigos</li>
                                        <li>. Lorem ipsum dolor alter miler amigos</li>
                                        <li>. Lorem ipsum dolor alter miler amigos</li>
                                    </ul>
                                    <div className='flex flex-col'>
                                        <h5 className='text-sm font-semibold' >Dryer Options</h5>
                                        <div className='flex flex-wrap gap-2 mt-2' >
                                            <div className='flex items-center gap-x-2 border border-b14 w-fit rounded-lg px-3 py-2' ><StackableSvg /><h5 className='text-xs font-medium' >STACKABLE</h5></div>
                                            <div className='flex items-center gap-x-2 border border-b14 w-fit rounded-lg px-3 py-2' ><SteamSvg /><h5 className='text-xs font-medium' >STEAM</h5></div>
                                            <div className='flex items-center gap-x-2 border border-b14 w-fit rounded-lg px-3 py-2' ><GasSvg /><h5 className='text-xs font-medium' >GAS</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><FaPlus className='text-b3' /></div>
                    <div className='flex flex-col gap-4 items-center w-full h-full' >
                        <h4 className='text-xl font-semibold' >Dryer</h4>
                        <div className='flex flex-col items-center justify-center py-10 border-dashed border-2 border-b3 rounded-xl h-full w-full' >
                            <div className='flex flex-col items-center space-y-3' >
                                <FaQuestion className='text-4xl mb-4' />
                                <div className='flex justify-center' ><Link to="" className='flex items-center bg-b7 text-xs px-4 py-3 rounded-md text-white font-bold' ><span className='' >Choose A Dryer</span><BsArrowRightShort className='text-2xl' /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 rounded-xl overflow-hidden'>
                    <button type='button' className='bg-b3 p-4 w-full font-bold text-white'>
                        Washer
                    </button>
                    <button type='button' className='bg-b11 p-4 w-full font-medium'>
                        Dryers
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompleteLaundary