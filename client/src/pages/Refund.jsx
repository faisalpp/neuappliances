import React, { useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BiCamera } from 'react-icons/bi';
import BackHome from '../components/BackHome';
import {submitRefundRequest} from '../api/frontEnd'
import Toast from '../utils/Toast';
import {uploadUserMedia} from '../api/frontEnd'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import * as Yup from 'yup';
import BtnLoader from '../components/Loader/BtnLoader'

const Refund = () => {

    const refundValidationSchema = Yup.object().shape({
        orderNo: Yup.string().required('Order No Email is Required!'),
        name: Yup.string().required('Name is Required!'),
        email: Yup.string().required('Email is Required!'),
        phone: Yup.string().required('Phone No is Required!'),
        amount: Yup.string().required('Refund Amount is Required!'),
        medias: Yup.array().nullable(),
    });

    const mediaRef = useRef(null)
    const [orderNo, setOrderNo] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [medias, setMedias] = useState([]);

    const [mediaLoader,setMediaLoader] = useState(false)

    const handleFileChange = async (e) => {
     const selectedFile = e.target.files[0];
     let type;
     if(selectedFile.type.includes('image')){
        type = 'images';
    }else if (selectedFile.type.includes('video')){
        type = 'videos'
    }else{
     Toast('Invalid Media Format (Image Or Video)','error',1000)
    }

    if(type?.length > 0){
     setMediaLoader(true)
     const formData = new FormData()
     formData.append('media',selectedFile);
     formData.append('location',`refunds/${type}/`);
     const res = await uploadUserMedia(formData)
    if(res.status === 200){
      setMediaLoader(false)
      setMedias([...medias,{type:type,data:res.data.url}])
      mediaRef.current.value = '';
    }else{
     mediaRef.current.value = '';
     Toast(res.data.message,'error',1000)
     setMediaLoader(false)
    }
   }
  };

  const [loader,setLoader] = useState(false)
  const [errors,setErrors] = useState([])

    const HandleRefund = async (e) => {
     e.preventDefault()
     setLoader(true)
     try{
        await refundValidationSchema.validate(shippingAddress, { abortEarly: false }); 
     }catch(error){ 
      setLoader(false)
      if (error) {
       let errors = error.errors;setErrors(errors)
       errors.forEach((item)=>{Toast(item,'error',1000)})
      } else {setErrors([])}
     }


     const data = {orderNo:orderNo,email:email,name:name,phone:phone,amount:amount,media:medias};
     const res = await submitRefundRequest(data);
     if(res.status === 200){
      setLoader(false)
      setOrderNo('');setName('');setEmail('');setPhone('');setAmount('');setMedias([]);
      Toast(res.data.msg,'success',1000)
     }else{
      setLoader(false)
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
                        <div className='mb-5'>
                         <div className='block text-xs text-b18/50 mb-2 font-bold'>Upload a Photo or Video (optional)</div>
                         <div className='flex bg-white rounded-xl w-full h-80' >
                          
                          {medias.length > 0 || mediaLoader  ? 
                           <div className='flex flex-wrap gap-x-10 gap-y-5 px-5 mr-1 w-full py-5 h-80 overflow-x-hidden overflow-y-scroll' >
                             {medias.map((media)=>
                             (media.type === 'images' ?
                             <div className='border-[1px] border-b31 px-2 py-2 rounded-xl h-fit w-fit' ><img src={media.data} className='w-20 h-20' /></div>
                             :<video src={media.data} className='w-40 rounded-xl h-[90px]' controls ></video>
                             ))}
                             {/* Media Loader */}
                             {mediaLoader ? <div className='flex justify-center items-center h-24 w-24 border-[1px] rounded-md border-blue-500 px-2 py-2' ><img src="/file-loader.gif" className='w-12 h-12' /></div>:null}
                             <div onClick={()=>mediaRef.current.click()} className='cursor-pointer flex justify-center items-center border-[1px] rounded-md border-b6 w-24 h-24 px-2 py-2' ><AiOutlinePlusSquare className='text-b6 text-5xl' /></div>
                           </div>
                           : 
                          <div className='flex w-full justify-center items-center' >
                          <label htmlFor="fileInput" className='image_video_section w-full h-[208px] bg-white rounded-lg xy-center flex-col gap-3'>
                           <span onClick={()=>mediaRef.current.click()} className='shadow-md cursor-pointer w-16 h-16 rounded-full xy-center bg-b3/10'><BiCamera className='h-8 w-8 text-b3 ' /></span>
                           <span className='text-b18 text-xs'>Select a picture or video to upload</span>
                          </label>
                          </div>}
                         
                         </div>
                          <input ref={mediaRef} hidden type="file" accept="image/*, video/*" onChange={handleFileChange} className="mb-2"/>
                        </div>
                         <button type="button" onClick={e=>HandleRefund(e)} className='px-4 py-3 text-xs font-medium text-white bg-b3 w-full rounded-lg'>{loader ? <BtnLoader style="w-5" /> :'Submit'}</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Refund


