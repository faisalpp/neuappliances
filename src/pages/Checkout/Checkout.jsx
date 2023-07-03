import React from 'react';
import Cart from './Cart';
import UpdateButton from '../../components/Checkout/UpdateButton';

const Checkout = ({ children }) => {

    return (
        <>
            <div className='grid grid-cols-1 justify-center items-center w-full h-full'>
                <div className='flex maxlg:flex-col 3xl:grid grid-cols-2 w-full h-full'>
                    <div className='px-4 xs:px-10 sm:px-16 pt-14 pb-52 h-full grow w-full bg-white 2xl:max-w-[808px] 3xl:max-w-full'>
                        <div className='max-w-[572px] w-full lg:ml-auto'>
                            {children}
                        </div>
                    </div>
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default Checkout