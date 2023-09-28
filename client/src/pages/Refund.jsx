import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BiCamera } from 'react-icons/bi';
import BackHome from '../components/BackHome';

const Refund = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);
        } else {
            // setFile(null);
        }
    };
    return (
        <MainLayout>
            <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                {/* Bread Crumbs Start */}
                <BackHome className="md:hidden mb-10" />

                <div className='hidden md:flex items-center' >
                    <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-b3' >Help & Support Center</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-black' >Refund</h5>
                </div>
                {/* Bread Crumbs End */}


                <div className='max-w-[960px] pt-20 mx-auto'>
                    <h1 className='text-32px maxmd:text-center font-bold text-b16'>Refund</h1>

                    <p className='leading-8 text-b18 -tracking-032 my-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus v
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla.
                    </p>

                    <div className='rounded-2xl bg-b8 p-10'>
                        <h3 className='text-b18 text-xl font-semibold mb-8'>Order Details</h3>
                        <div className='mb-5'>
                            <label htmlFor="order_id" className='block text-xs text-b18/50 mb-2 font-bold'>Order ID</label>
                            <input type="text" name='order_id' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='Full name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='block text-xs text-b18/50 mb-2 font-bold'>Name</label>
                            <input type="text" name='name' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='Full name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email_adress" className='block text-xs text-b18/50 mb-2 font-bold'>Email Address</label>
                            <input type="email" name='email_adress' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="phone_no" className='block text-xs text-b18/50 mb-2 font-bold'>Phone Number</label>
                            <input type="text" name='phone_no' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="refund_amount" className='block text-xs text-b18/50 mb-2 font-bold'>Enter Refund Amount</label>
                            <input type="text" name='refund_amount' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                        </div>
                        <div className='mb-10'>
                            <div className='block text-xs text-b18/50 mb-2 font-bold'>Upload a Photo or Video (optional)</div>
                            {file ?
                                <div className='w-full'>
                                    <div className='h-[208px] w-full'>
                                        {file.type.startsWith('image/') ? (
                                            <img src={URL.createObjectURL(file)} alt="Preview" className="w-full rounded-lg object-cover h-full" />
                                        ) : (
                                            <video className="w-full h-full" key={file.name} loop muted>
                                                <source src={URL.createObjectURL(file)} type={file.type} />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                    <label htmlFor="fileInput" className='w-full block mt-5 px-3 py-2 rounded-lg bg-b3 text-white text-center'>Change</label>
                                </div>
                                : <label htmlFor="fileInput" className='image_video_section cursor-pointer w-full h-[208px] bg-white rounded-lg xy-center flex-col gap-3'>
                                    <div className='w-16 h-16 rounded-full xy-center bg-b3/10'>
                                        <BiCamera className='h-8 w-8 text-b3 ' />
                                    </div>
                                    <span className='text-b18 text-xs'>Select a picture or video to upload</span>
                                </label>
                            }
                            <input
                                id="fileInput"
                                hidden
                                type="file"
                                accept="image/*, video/*"
                                onChange={handleFileChange}
                                className="mb-2"
                            />
                        </div>
                        <button className='px-4 py-3 text-xs font-medium text-white bg-b3 w-full rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Refund
