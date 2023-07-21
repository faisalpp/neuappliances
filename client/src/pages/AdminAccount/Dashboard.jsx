import React from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {CgSmartHomeWashMachine} from 'react-icons/cg'
import {TbCategory} from 'react-icons/tb'
import {BsBox} from 'react-icons/bs'
import Card from '../../components/AdminDashboard/Card'

const Dashboard = () => {
    

    return (
        <>
        <AdminAccount>
         <div className='grid grid-cols-4 gap-y-10 my-5 grid-flow-row' >
            <Card title="PRODUCTS" count={1} icon={<CgSmartHomeWashMachine className='text-4xl text-b7' />} />
            <Card title="CATEGORIES" count={1} icon={<TbCategory className='text-4xl text-b7' />} />
            <Card title="ORDERS" count={1} icon={<BsBox className='text-4xl text-b7' />} />
         </div>
        </AdminAccount>
        </>
    )
}

export default Dashboard