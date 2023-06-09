import React from 'react'
import { FiChevronRight, FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const AdminItems = ({ onClose, isItems }) => {

    const location = useLocation();

    const myaccountItems = [
        {
            id:1,
            title: 'Dashboard',
            link: '/admin/dashboard',
        },
        {
            id:2,
            title: 'Orders',
            link: '/admin/orders',
        },
        {
            id:3,
            title: 'Products',
            link: '/admin/manage-products',
        },
        {
            id:4,
            title: 'Categories',
            link: '/admin/categories',
        },
        {
            id:5,
            title: 'Blog',
            link: '/admin/manage-blogs',
        },
        {
            id:6,
            title: "FAQ's",
            link: '/admin/faq',
        },
        {
            id:7,
            title: "Help & Support",
            link: '/admin/help-&-support',
        },
        {
            id:8,
            title: 'Stay In Loop',
            link: '/admin/stay-in-loop',
        },
        {
            id:9,
            title: 'Media',
            link: '/admin/media',
        },
        {
            id:10,
            title: 'Change Password ',
            link: '/admin/change-password',
        },
        {
            id:11,
            title: 'Site Settings',
            link: '/admin/settings',
        },
    ]

    const handleFilterClick = (event) => {
        event.stopPropagation();
    };

    const modalClass = isItems ? 'top-0 bottom-0' : '-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none';

    return (
        <>
            <div className={`maxlg:fixed maxlg:bg-black/20 maxlg:items-end left-0 right-0 z-50 duration-300 lg:min-w-[240px] maxlg:flex ${modalClass}`} onClick={onClose}>
                <div className='[&>div]:maxlg:px-10 maxlg:max-h-[398px] w-full maxlg:pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto lg:h-auto' onClick={handleFilterClick}>
                    <div className='lg:hidden maxlg:sticky top-0 flex maxlg:py-4 justify-between lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md'>
                        <button type='button' className='border border-[rgba(0,0,0,0.15)] text-[#B20B0B] flex gap-4 items-center font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300'>
                            <span>
                                Logout
                            </span>
                            <FiLogOut stroke-width="3" />
                        </button>
                        <button type='button' onClick={onClose} className='text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300'>
                            Close
                        </button>
                    </div>
                    <div className='maxlg:!px-3 flex flex-col gap-1 maxlg:py-3'>
                        {myaccountItems.map((item) => (
                            <Link to={item.link} key={item.id} className={`duration-300 w-full px-6 py-4 font-semibold flex justify-between items-center text-left border rounded-lg ${location.pathname === item.link ? 'active border-b3 bg-b3 text-white' : 'border-b14 text-[rgba(17,16,16,0.64)]'}`}>
                                <span>{item.title}</span>
                                {
                                    location.pathname === item.link ?
                                        <FiChevronRight />
                                        : null
                                }
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminItems 