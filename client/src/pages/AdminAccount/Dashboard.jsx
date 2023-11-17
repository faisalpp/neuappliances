import React,{useState,useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {CgSmartHomeWashMachine} from 'react-icons/cg'
import {TbCategory} from 'react-icons/tb'
import {BsBox} from 'react-icons/bs'
import {RiRefund2Fill} from 'react-icons/ri'
import Card from '../../components/AdminDashboard/Card'
import {getDashboardData} from '../../api/admin/dashboard'
import Toast from '../../utils/Toast';

const Dashboard = () => {

    const [productCount,setProductcount] = useState(0)
    const [categoryCount,setCategorycount] = useState(0)
    const [orderCount,setOrdercount] = useState(0)
    const [refundCount,setRefundcount] = useState(0)
    
    const GetDashboardData = async () => {
     const res = await getDashboardData()
     
      if(res.status === 200){
       setProductcount(res.data.dashboard.productCount)
       setCategorycount(res.data.dashboard.categoryCount)
       setOrdercount(res.data.dashboard.orderCount)
       setRefundcount(res.data.dashboard.refundCount)
      }else{
       Toast(res.data.message,'error',1000)   
      }
     }

     useEffect(() => {
        GetDashboardData()
     }, [])
     

    return (
        <>
        <AdminAccount>
         <div className='grid grid-cols-4 gap-y-10 my-5 grid-flow-row' >
            <Card title="PRODUCTS" count={productCount} icon={<CgSmartHomeWashMachine className='text-4xl text-b7' />} />
            <Card title="CATEGORIES" count={categoryCount} icon={<TbCategory className='text-4xl text-b7' />} />
            <Card title="ORDERS" count={orderCount} icon={<BsBox className='text-4xl text-b7' />} />
            <Card title="REFUNDS" count={refundCount} icon={<RiRefund2Fill className='text-4xl text-b7' />} />
         </div>
        </AdminAccount>
        </>
    )
}

export default Dashboard