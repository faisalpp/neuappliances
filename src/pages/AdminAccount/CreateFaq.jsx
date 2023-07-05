import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { BsArrowRightShort } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFaq = () => {

    const {slug}=useParams()

    const navigate = useNavigate();

    const CreateFaq = async (e) => {
    }

    return (
        <>
            <AdminAccount>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <div className='flex justify-center w-full'>
                 
                    <form onSubmit={CreateFaq} encType='multipart/form-data' className='flex flex-col space-y-5 w-8/12 px-10 py-10
                     rounded-2xl bg-white border-[1px] border-gray-200' >
                        <div className='flex flex-col space-y-1'>
                            <h5 className='text-xs font-semibold' >FAQ'S Type</h5>
                            <input type="text" value={slug} className='text-sm outline-none border-[1px] 
                            border-gray-200 w-full px-4 py-3 rounded-md'/>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h5 className='text-xs font-semibold' >FAQ'S Question</h5>
                            <input type="text" className='text-sm outline-none border-[1px] 
                            border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Question ?' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h5 className='text-xs font-semibold' >FAQ'S Answer</h5>
                            <input type="text" className='text-sm outline-none border-[1px] 
                            border-gray-200 w-full px-4 py-3 rounded-md' placeholder='Answer'/>
                        </div>
                        <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
                    </form>
                </div>
                <ToastContainer />
            </AdminAccount>
        </>
    )
}

export default CreateFaq