import React, { useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BiCamera } from 'react-icons/bi';
import BackHome from '../components/BackHome';
import {submitRefundRequest} from '../api/frontEnd'
import Toast from '../utils/Toast';

const Refund = () => {

    const [orderNo, setOrderNo] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [media, setMedia] = useState([]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
         setMedia([selectedFile,...media]);
        }
    };


    const HandleRefund = async (e) => {
     e.preventDefault()
     const data = {orderNo:orderNo,email:email,name:name,phone:phone,amount:amount,media:media};
     const res = await submitRefundRequest(data);
     console.log(res)
     if(res.status === 200){
      setOrderNo('');setName('');setEmail('');setPhone('');setAmount('');setMedia([]);
      Toast(res.data.msg,'success',1000)
     }else{
      Toast(res.data.message,'error',1000)
     }
    }

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
                            <input type="text" value={orderNo} onChange={(e)=>setOrderNo(e.target.value)} name='order_id' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='fq34-D10M02Y2023' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="name" className='block text-xs text-b18/50 mb-2 font-bold'>Name</label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='Full name' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email_adress" className='block text-xs text-b18/50 mb-2 font-bold'>Email Address</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name='email_adress' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="phone_no" className='block text-xs text-b18/50 mb-2 font-bold'>Phone Number</label>
                            <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} name='phone_no' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='yourusername@email.com' />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="refund_amount" className='block text-xs text-b18/50 mb-2 font-bold'>Enter Refund Amount</label>
                            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} name='refund_amount' className='w-full bg-white h-10 rounded-lg text-black px-4 text-xs outline-none' placeholder='$35' />
                        </div>
                        <div className='mb-10'>
                         <div className='block text-xs text-b18/50 mb-2 font-bold'>Upload a Photo or Video (optional)</div>

                         <div className='grid grid-cols-6 gap-x-2 h-52 px-2 w-full py-4 overflow-x-hidden overflow-y-scroll rounded-xl bg-white' >

                          <img src="/p1.webp" className='w-24 bg-gray-100 rounded-md' />
                          <img src="/p1.webp" className='w-24 bg-gray-100 rounded-md' />
                          <img src="/p1.webp" className='w-24 bg-gray-100 rounded-md' />
                          <video src="/videos/sample.mp4" controls className='w-62' />

                         </div>
                          
                          <input id="fileInput" hidden type="file" accept="image/*, video/*" onChange={handleFileChange} className="mb-2"/>
                        </div>
                        <button type="button" onClick={e=>HandleRefund(e)} className='px-4 py-3 text-xs font-medium text-white bg-b3 w-full rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Refund


{/* <label htmlFor="fileInput" className='image_video_section cursor-pointer w-full h-[208px] bg-white rounded-lg xy-center flex-col gap-3'>
                              <span className='w-16 h-16 rounded-full xy-center bg-b3/10'><BiCamera className='h-8 w-8 text-b3 ' /></span>
                              <span className='text-b18 text-xs'>Select a picture or video to upload</span>
                          </label> */}