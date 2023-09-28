import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Location from '../svgs/Location';
import Clock from '../svgs/Clock';
import Contact from '../svgs/Contact';
import BackHome from '../components/BackHome';

const ContactUs = () => {

    const Contactinformations = [
        { icon: Location, title: 'Address', description: '123 N Loop Blvd E, Austin, TX 78751' },
        { icon: Clock, title: 'Office hours', description: 'Monday - Friday <br/> 8:00am to 5:00pm' },
        { icon: Contact, title: 'Contact Info', description: 'youremail@gmail.com <br/> + 234 888 8888 88' },
    ]

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    <BackHome className="md:hidden mb-10" />

                    <div className='hidden md:flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Contact Us</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt " />
                </div>

                <div className='maincontainer'>
                    <img src="/contactus/map.png" alt="map" className='shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)] rounded-3xl object-cover w-full h-[250px] md:h-[686px]' />
                </div>

                <div className='maincontainer py-10 lg:py-16 xl:py-20'>
                    <h2 className='font-bold text-xl lg:text-2xl xl:text-32px text-center'>Get in touch with our team and let’s talk</h2>

                    <div className='grid lg:grid-cols-2 mt-20 gap-10 xl:gap-20'>
                        <div className='rounded-2xl bg-b8 p-10'>
                            <h3 className='text-b3 text-xl font-semibold mb-8'>Leave a Message</h3>
                            <div className='mb-5'>
                                <label htmlFor="name" className='block text-xs text-b18/50 mb-2 font-bold'>Name</label>
                                <input type="text" name='name' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='Full name' />
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="email" className='block text-xs text-b18/50 mb-2 font-bold'>Email Address</label>
                                <input type="email" name='email' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                            </div>
                            <div className='mb-12'>
                                <label htmlFor="message" className='block text-xs text-b18/50 mb-2 font-bold'>Your Message</label>
                                <textarea name="message" rows="8" className='w-full bg-white rounded-lg text-black py-3 px-4 text-xs outline-none' placeholder='Write something...'></textarea>
                            </div>
                            <button className='px-4 py-3 text-xs font-medium text-white bg-b3 w-full rounded-lg'>Send Message</button>
                        </div>
                        <div>
                            <div className='grid xl:grid-cols-2 gap-x-3 gap-y-10 xl:gap-y-20'>
                                {Contactinformations.map((item, index) => (
                                    <div key={index} className='flex gap-4'>
                                        <div className='min-w-[56px] md:min-w-[64px] h-14 md:h-16 rounded-full bg-b8 xy-center'>
                                            <item.icon />
                                        </div>
                                        <div>
                                            <h3 className='text-b18 text-xl md:text-2xl font-bold mb-3 md:mb-4'>{item.title}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: item.description }} className='text-black leading-6'></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </MainLayout>
        </>
    )
}

export default ContactUs