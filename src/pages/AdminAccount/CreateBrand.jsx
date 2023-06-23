import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';


const CreateBrand = () => {

    const [image,setImage] = useState('/generalelectronics.png')
    const [title,setTitle] = useState('');

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    }
    
    return (
        <>
        <AdminAccount>
         <div className='flex justify-center w-full'>
         <form className='flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='rounded-2xl border border-gray-300 p-3 h-[133px] w-fit flex justify-center items-center self-center'>
           {/* <img src='/generalelectronics.png' className='max-w-full h-[115px] object-contain' alt="example" /> */}
           <img src={image} className='max-w-fit h-[115px] object-contain' alt="example" />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Brand Title</h5>
           <input type="text" value={title} onChange={e=>setImage(e.target.value)} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Samsung' />
          </div>
          <div className='flex flex-col space-y-1' >
           <h5 className='text-xs font-semibold' >Brand Logo</h5>
           <input type="file" onChange={onImageChange} className='text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md' />
          </div>
          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
        </AdminAccount>
        </>
    )
}

export default CreateBrand