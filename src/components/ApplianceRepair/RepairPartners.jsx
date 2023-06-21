import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLocalPhone } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RepairPartners = () => {
    const recommendPartners = [
        {
            image: 'appliancerepair1.png',
            title: 'Daigle Appliance Repair',
            description: `We have heard stellar things about Daigle Appliance Repair from our customers. Everything from their fast response time, to their affordable appliance repair pricing to their professionalism. Christian Daigle with Daigle Appliance Repair is a total pro when it comes to all things appliance repair. His personal approach to appliance repair ensures us he is a top Candidate for your appliance repair needs and his customers yell it from the mountain tops. This appliance repair company has 5 stars on yelp with over 125 Reviews (probably more by the time your reading this.) Just like any repair service; appliance repair requires an honest technician to properly diagnose the issue. We feel Daigle Appliance Repair does a stellar job of taking care of their customers and just like their customers, We recommend them to take care of your appliance repair needs. Give em' a try and tell them Neu sent you!!`,
        },
        {
            image: 'appliancerepair2.png',
            title: 'Atlas Appliance Repair',
            description: `Atlas Appliance Repair has been fixing appliances around Austin, Tx since 2010. Atlas is a family owned and operated business and you can feel that family vibe with the appliance repair services they offer. Avri and David (owners of Atlas Appliance Repair) are two friends that grew up in Jerusalem, Israel and have been fixing broken things ever since. Appliance Repair is tricky and requires honesty from the appliance repair technician to do the job right. We feel Atlas will take care of your appliance repair needs in a honest, personal manner because of their extensive experience and family run operation. Give em' a try and tell them Neu sent you!`,
        },
        {
            image: 'appliancerepair3.png',
            title: 'Tony Appliance Repair',
            description: `Austin's Appliance Repair OG! We love referring our customers to Tony because he will provide 5 star customer service like we do! Tony Appliance Repair is a one man army leaving happy customers and working appliances in his wake. We have been referring customers to tony for years and have heard all the great feedback. Keep rockin' the appliance repair world Tony you are an all-star!`,
        },
    ]
    return (
        <div>
            <div className='pb-10 lg:pb-16 xl:pb-20 pt-5 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                <h2 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold text-b18 text-center'>Our Recommended Repair Partners</h2>
            </div>
            <div className='py-10 lg:py-16 xl:py-20 grid grid-cols-1 gap-20 2xl:gap-44 [&>div:nth-child(even)>.repairImages]:order-2 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                {recommendPartners.map((recommendpartner, index) => (
                    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 gap-10 xl:gap-20'>
                        <div className='2xl:col-span-2 repairImages'>
                            <img src={`appliance/${recommendpartner.image}`} className='h-full' alt={recommendpartner.title} />
                        </div>
                        <div className='2xl:col-span-3'>
                            <div className='inline-flex justify-start'>
                                <div className='border-[1.38569px] border-b3 px-4 py-2 rounded-full'>
                                    <img src="neulogo.png" alt="neulogo" />
                                    <span className='block font-medium uppercase text-[5.09px]'>RECOMMENDS</span>
                                </div>
                            </div>
                            <h3 className='text-b18 text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-extrabold mb-4 mt-2'>{recommendpartner.title}</h3>
                            <p className='text-b18 leading-8 pb-10'>
                                {recommendpartner.description}
                            </p>
                            <div className='flex gap-2'>
                                <Link to="" className='bg-b3 text-white rounded-lg px-4 py-3 flex gap-1 items-center text-xs font-medium'><MdOutlineLocalPhone className='text-sm' /><span>(512) 363-5327</span></Link>
                                <Link to="" className='border border-b3 rounded-lg px-4 py-3 text-b3 flex gap-1 items-center text-xs font-medium'><span>Learn More</span><AiOutlineArrowRight className='text-sm' /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RepairPartners