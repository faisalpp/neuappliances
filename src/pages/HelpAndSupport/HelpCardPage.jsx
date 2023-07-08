import React from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';

const HelpCardPage = () => {

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center flex-wrap' >
                        <h5 className='text-[10px] sm:text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >Help & Support Center</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >Delivery</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-gray-500' >Lorem Ipsum Dolor</h5>
                    </div>
                    {/* Bread Crumbs End */}
                </div>
                <div className='pb-10 lg:pb-16 xl:pb-20 w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='max-w-[960px] mx-auto grid grid-cols-1 gap-10'>
                        <h1 className='text-28px sm:text-3xl font-bold leading-tight'>
                            Lorem Ipsum Dolor
                        </h1>
                        <p className='leading-8 text-b18 tracking-032'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula. Aenean lacus libero, varius sed elit eu, pellentesque malesuada arcu. Ut id porta erat. Phasellus luctus metus imperdiet lobortis tempus. Phasellus at turpis metus. Vestibulum pharetra elit eget augue gravida dictum. Nunc malesuada a nibh eget fringilla. Nam sollicitudin ultrices erat.
                        </p>
                        <p className='leading-8 text-b18 tracking-032'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula. Aenean lacus libero, varius sed elit eu, pellentesque malesuada arcu. Ut id porta erat. Phasellus luctus metus imperdiet lobortis tempus. Phasellus at turpis metus. Vestibulum pharetra elit eget augue gravida dictum. Nunc malesuada a nibh eget fringilla. Nam sollicitudin ultrices erat.
                        </p>
                        <div>
                            <img src="/blogs/article/washing.png" className='lg:h-[502px] w-full' alt="" />
                        </div>
                        <div className='[&>*]:leading-8 [&>*]:text-b18 [&>*]:tracking-032'>
                            <p className='mb-4'>
                                Single Evaporator Refrigerators
                            </p>
                            <p className='mb-16'>
                                Always, Always, Always leave your refrigerator on “Factory Settings”. A majority of refrigerators display near the controls what the “Factory Settings” is. If your refrigerator does not, set right the temperature to the middle setting if it is a analog dial. If your refrigerator is digital set to 0 degrees in the freezer and 32 in the refrigerator. With a single evaporator refrigerator, the evaporator coil that produces the cold air is generated in the freezer and sent to the refrigerator with a series of fans, vents or damper doors (openings). Changing the settings will adjust the cooling cycle duration and the ventilation openings. If your refrigerator and freezer are set too far apart (one low and one high), when the different temperature airs meet in the air passage way they will form condensation. That condensation will freeze and build up ice and eventually block air from pass through. Avoid this by setting your appliance to the factory settings.
                            </p>
                            <p className='mb-4'>
                                Dual Evaporator Refrigerators:
                            </p>
                            <p>
                                You have a little more leniency on varying settings on the dual evaporator refrigerators. There typically aren't shared air passageways that are shared between the freezer or fridge to freeze over. However your refrigerator is designed to perform at the factory settings.
                            </p>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default HelpCardPage